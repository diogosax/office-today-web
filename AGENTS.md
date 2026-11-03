# Office Today — AGENTS.md


## Shared project context

Read `docs/knowledge/README.md` and its initial reading order before starting a task. Use the same versioned context in Cursor, Codex and Claude. Keep CONTINUITY current for missions and next actions; update STATE only when dated product evidence changes. Preserve all existing repository instructions.

## Shared context language

Use English for shared technical documentation, agent prompts and handoffs. Owner-facing conversations may remain in Brazilian Portuguese. Preserve historical instructions, source quotations, identifiers and paths; later multilingual support content is a separate deliverable.

## Mission-controlled delivery

Read the [mission workflow](docs/knowledge/WORKFLOW.md#mission-lifecycle) and [current handoff](docs/knowledge/CONTINUITY.md) before acting. Every new product phase needs explicit owner authorization. Use [the mission template](docs/missions/TEMPLATE.md); a template or roadmap is not approval. Continue authorized implementation, checks, documentation and branch/PR delivery without repeatedly asking for routine substeps.

For an authorized mission, conditional merge needs accepted scope, diff review, no blocking review requests/threads and every applicable required check successful for the exact current PR head. Revalidate after a head or base change and merge using the expected head SHA. Missing, pending, failed, cancelled or skipped required checks do not qualify; no CI configured is not green CI. Do not weaken project validation or claim this process is server-side branch protection. Native auto-merge requires enforceable required checks; no privileged self-merging workflow is authorized.

Deployment, publication, promotion, migrations, paid calls and real-data operations need their own explicit scope and target authorization. Inspect GitHub workflows and connected hosting before branch push, PR and merge, including automatic previews and production. Stop the publishing action when coupling is unapproved; prepare a reviewable local change and continue independent work. Do not alter hosting settings to evade that boundary. Task branches target the repository's recorded integration base; dev-to-main release promotion remains separate.

Use one writer per checkout and preserve unrelated work. Run proportionate checks; after at most two evidence-based correction attempts for the same failure, stop that cycle with diagnosis and missing input. Never repeat unchanged failing checks or broaden testing after success without new evidence.

CONTINUITY is the only mutable mission/next-action handoff. STATE holds dated product observations; missions hold scope and acceptance; existing decision logs/ADRs remain canonical; PRs hold live review/check state and final merge evidence. Before merge remove instructions that would repeat completed work and state the next authorized action or owner decision. After merge verify the merged flag, resulting SHA on the target and target-push checks separately; record final evidence in the PR/report. On interruption record the unfinished reconciliation explicitly. Resolve a merged PR's pre-merge snapshot from GitHub before executing old instructions. Do not create recursive commits just to mirror that PR's future merge SHA or live CI into itself; update context on the next substantive handoff.
