# Working protocol across tools

## Start

Check the remote, branch and checkout state. Read existing instructions and this knowledge base; load only task-relevant sources. Do not depend on another chat's history or assume automatic access to sibling repositories.

ChatGPT and the owner define outcomes and acceptance criteria. Codex or the Cursor agent implements the assigned task; Claude Desktop or Ask reviews when useful. Work need not pass through all three services. Preserve project-specific rules and approved visual decisions.

English is canonical for shared technical documentation, agent prompts and handoffs. Owner-facing discussion may remain in Brazilian Portuguese; product UI follows its audience. Later multilingual support content is separate from these technical source records.

## Execute and close

Use a bounded task per branch/PR and one writer per checkout. Cross-repository contract changes require references in both repositories. Finish with updated state and handoff, verifiable evidence and a next action. Never store secrets, private customer data or complete chat transcripts by routine.

Choose proportionate checks. Do not run deployment, migration, operator bootstrap, email, ingestion or billing scripts during context loading. Publishing documentation to a branch does not authorize merge or deployment; retain the repository's existing release flow.

## Existing commands (inventory, not automatic execution)

### `package.json`

- `dev`: `next dev`
- `build`: `next build`
- `start`: `next start`
- `lint`: `eslint`

## Fresh-conversation comprehension check

Without editing files, ask the assistant to identify the repository and brand, distinguish platform and website, list observed capabilities and pending items with sources, explain validation requirements and propose one next step. Correct documentation when the answer requires guessing. A static documentation check does not replace this interactive test.

This interactive test remains pending for this project. Do not infer success from another project's test.
