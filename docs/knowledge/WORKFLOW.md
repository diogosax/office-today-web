# Working protocol across tools

## Start

Check the remote, branch and checkout state. Read existing instructions and this knowledge base; load only task-relevant sources. Do not depend on another chat's history or assume automatic access to sibling repositories.

ChatGPT and the owner define outcomes and acceptance criteria. Codex or the Cursor agent implements the assigned task; Claude Desktop or Ask reviews when useful. Work need not pass through all three services. Preserve project-specific rules and approved visual decisions.

English is canonical for shared technical documentation, agent prompts and handoffs. Owner-facing discussion may remain in Brazilian Portuguese; product UI follows its audience. Later multilingual support content is separate from these technical source records.

## Execute and close

Use a bounded task per branch/PR and one writer per checkout. Cross-repository contract changes require references in both repositories. Finish with updated state and handoff, verifiable evidence and a next action. Never store secrets, private customer data or complete chat transcripts by routine.

Choose proportionate checks. Do not run deployment, migration, operator bootstrap, email, ingestion or billing scripts during context loading. Remote delivery and merge follow the authorized mission and AGENTS gates; deployment/publication retain separate target-specific authorization.

## Existing commands (inventory, not automatic execution)

### `package.json`

- `dev`: `next dev`
- `build`: `next build`
- `start`: `next start`
- `lint`: `eslint`

## Fresh-conversation comprehension check

Without editing files, ask the assistant to identify the repository and brand, distinguish platform and website, list observed capabilities and pending items with sources, explain validation requirements and propose one next step. Correct documentation when the answer requires guessing. A static documentation check does not replace this interactive test.

This interactive test remains pending for this project. Do not infer success from another project's test.

## Release execution protocol

For PR, merge, deployment or incident work read [release and recovery](RELEASE_WORKFLOW.md) and its canonical project sources. It records checked evidence, unresolved gaps and the current no-publication boundary. Loading this context does not authorize execution.

## Mission lifecycle

Authority and closure gate: [AGENTS](../../AGENTS.md#mission-controlled-delivery). Use the [mission template](../missions/TEMPLATE.md); current work and exact next actions belong only in [CONTINUITY](CONTINUITY.md).

1. Confirm repository, platform/site role, integration base and local changes. Reconcile recorded handoff and prior PRs with GitHub; never replay a merged mission.
2. Record the owner's actual outcome, source/date, scope, actions, acceptance, checks, stop conditions and target branch in a mission. Product phases, business rules and publication do not arise from context loading. Preserve existing project-specific decisions and safety limits.
3. Implement the complete authorized scope on an isolated task branch. Existing canonical business/architecture logs remain authoritative; link instead of duplicating rules. Use proportionate checks and the two-attempt correction limit in AGENTS.
4. Inspect branch-push/PR/merge triggers before remote delivery. Review acceptance and diff, resolve blocking feedback, require applicable checks on the exact latest head and revalidate a moved base. Under approved conditional-merge authority use the expected head SHA; hold any unapproved automatic publication. No automatic dev-to-main promotion.
5. Before merge reconcile CONTINUITY with the proposed outcome, removing repeat-delivery instructions. After merge verify merged flag/SHA/target and target-push CI separately, then retain final evidence in the PR/report. Pending/failing post-merge checks remain explicit. A PR's future merge SHA belongs to its PR, avoiding recursive documentation commits. If no product mission is active, say so and identify the owner's next decision.

[STATE](STATE.md) retains dated product evidence and its limits, not a competing live task ledger. New work reads the current repository handoff; no mandatory tour of every tool/model or portfolio is needed. English is canonical for shared technical context; owner conversation may remain pt-BR.

### Documentation verification

Run `python3 scripts/check-project-context.py` and `git diff --check`. The read-only `documentation / context` CI checks context ownership/required sections and local link targets in the shared context and missions; it does not establish business truth, external links, anchor validity, owner approval, live deployment or recovery readiness. Required runtime checks still depend on changed behavior and each project's existing validation map. Skipped path-filtered workflows are recorded as not applicable only after reviewing their triggers, never as passed tests.
