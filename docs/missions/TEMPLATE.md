# <ID> - <Observable outcome>

Status: proposed / authorized / in progress / blocked / ready for review / closed
Owner: <decision maker>
Authorization: <dated owner instruction or issue; exact outcome and actions, not this template>

## Objective and sources

<Outcome and reason. Link product rules, relevant ADRs/logs and prior mission/PR; distinguish evidence, proposals and unanswered decisions.>

## Scope and authority

- Repository / role / integration base / task branch / inspected base SHA:
- In scope / excluded / applicable project-specific limits:
- Authorized implementation, tests, commit, push, PR and conditional merge:
- Deployment/publication, migration, paid calls and real data: not authorized unless separately named with target and scope. Inspect push/PR/merge triggers first.
- Data/resources: <disposable targets and side-effect boundaries; never secrets in context>.

## Acceptance criteria

| ID | Observable result | Verification/evidence |
| --- | --- | --- |
| AC1 | <complete scoped outcome> | <check or flow> |
| AC2 | <negative/boundary behavior> | <evidence> |
| AC3 | <canonical docs, reviewable PR and closure handoff> | <links> |

## Execution and validation

1. Reconcile repository, instructions, product sources and handoff before implementation.
2. Record proportionate checks and prerequisites; implement and validate within approved scope.
3. For a failure record symptom/hypothesis and at most two targeted correction attempts. Stop that cycle with diagnosis after the limit; no unchanged retries or weakening checks.
4. Inspect publication coupling before push/PR/merge. Verify acceptance, diff, blocking feedback and applicable checks on the exact current head; revalidate moved head/base and use expected-head merge. Read [AGENTS](../../AGENTS.md#mission-controlled-delivery) and the [release adapter](../knowledge/RELEASE_WORKFLOW.md).
5. Reconcile [CONTINUITY](../knowledge/CONTINUITY.md) before stopping. Verify merge/target-push checks afterwards and record final evidence in the PR/report. No recursive commits to mirror the PR's future SHA/check state.

Selected checks / tested SHA / run URLs / unexecuted checks and reasons:

## Stop conditions

Missing policy/permission, conflicting edits, unsafe target, unapproved publication coupling, failing required checks or two unsuccessful corrections stop dependent work. Preserve work, record evidence and missing input, and continue independent authorized actions.

## Delivery and handoff

<PR link and final merge/CI evidence authority. Current mission/blockers/next action live in CONTINUITY only. A closed mission is never reopened by old handoff text; a new phase needs authorization.>
