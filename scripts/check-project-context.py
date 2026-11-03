#!/usr/bin/env python3
"""Offline structural checks; no network, credentials or runtime execution."""
from pathlib import Path
import re
import subprocess
import sys
from urllib.parse import unquote

root = Path(__file__).resolve().parents[1]
required = ["AGENTS.md", "docs/knowledge/README.md", "docs/knowledge/PROJECT.md",
            "docs/knowledge/STATE.md", "docs/knowledge/WORKFLOW.md",
            "docs/knowledge/CONTINUITY.md", "docs/knowledge/RELEASE_WORKFLOW.md",
            "docs/missions/TEMPLATE.md"]
errors = ["Missing context file: " + p for p in required if not (root / p).is_file()]
files = subprocess.check_output(
    ["git", "ls-files", "--cached", "--others", "--exclude-standard", "-z"],
    cwd=root).decode().split("\0")
selected = [p for p in files if p.endswith(".md") and
            (p in ["AGENTS.md", "CLAUDE.md"] or p.startswith("docs/knowledge/")
             or p.startswith("docs/missions/"))]
for name in selected:
    file = root / name
    if not file.is_file():
        errors.append("Missing tracked file: " + name)
        continue
    content = file.read_text()
    for target in re.findall(r"\[[^\]\n]*\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)", content):
        if re.match(r"(?:[a-z][a-z0-9+.-]*:|#|//)", target, re.I):
            continue
        local = unquote(re.split(r"[?#]", target.strip("<>"))[0])
        if not local:
            continue
        resolved = (file.parent / local).resolve()
        if not resolved.is_relative_to(root) or not resolved.exists():
            errors.append(name + ": missing/outside repository link " + target)
for name, markers in {
    "AGENTS.md": ["## Mission-controlled delivery"],
    "docs/knowledge/CONTINUITY.md": ["## Mission", "## Evidence", "## Blockers", "## Next actions"],
    "docs/knowledge/WORKFLOW.md": ["## Mission lifecycle"],
    "docs/missions/TEMPLATE.md": ["Authorization:", "## Scope and authority", "## Acceptance criteria",
                                  "## Execution and validation", "## Stop conditions", "## Delivery and handoff"],
}.items():
    if (root / name).is_file():
        content = (root / name).read_text()
        errors.extend(name + ": missing section " + marker for marker in markers if marker not in content)
if errors:
    print("\n".join(errors), file=sys.stderr)
    sys.exit(1)
print("Project context structure and local link targets verified; anchors/external URLs and live state not checked.")
