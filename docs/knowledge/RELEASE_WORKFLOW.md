# Release and recovery — Office Today

Repository: `diogosax/office-today-web`. Role: **institutional website**. Reviewed: 2026-11-02.

Inspected source: [`6a182660f3a1`](https://github.com/diogosax/office-today-web/commit/6a182660f3a156c870c658118044e868a522471a), active integration/base `main`. The remote base was fetched and confirmed to be an ancestor of the documentation checkout; there was no newer base to reconcile at review time. This is source identity, not the deployed revision.

## Scope and authority

The owner requested deployment/recovery procedure validation and shared documentation, **without publishing a release**. This record permits no live deploy, migration, restart, restoration, DNS/IAM change, Connector publication or automatic promotion. The owner later separately authorized squash-merging this documentation PR into its recorded base (`main`) after satisfactory review and applicable checks, to be held if the merge would trigger an application production deployment; that merge authorization is not deployment authorization. Existing clear authorization for a future bounded action persists; avoid repeated approval questions for routine substeps.

Evidence levels: source review and local checks are recorded below. A historical runbook, successful static guard or mocked test is not a successful host rehearsal. No live EC2 connection, backup creation, restore drill or cloud workflow dispatch was performed in this review. Live readiness remains unverified.

## Shared PR and release flow

1. Read project instructions and the current handoff; check branch, remote and pending edits. Use one writer per checkout and an isolated task branch. Platform and site use separate PRs, cross-linked when dependent.
2. Open a draft PR with problem/result, scope, actual checks, migration impact, target environment and recovery plan. Run proportionate checks; documentation-only work does not require application deployment. Never infer CI success from an absent check.
3. Resolve review findings. Use squash for focused task PRs; preserve ancestry for long-lived release-branch promotions. Recheck material commits added after review. Do not rewrite shared branch history or bypass required failing checks.
4. Merge only within the owner's authorization. Record the resulting merged SHA, which may differ from the PR head. Merge does not imply deployment authorization; one explicit instruction may authorize both when scope and environment are clear. An authorized assistant may execute the agreed actions.
5. Prepare a concrete release record: exact SHA, target, impact/window, migration compatibility, completed backup evidence, previous artifact and recovery steps, verification criteria, and authorization scope. Do not deploy a moving branch or label an environment safe merely because it is called dev.
6. Serialize releases per environment. Use the project's canonical mechanism. Preserve server-only secrets. Check strict HTTP success, exact build identity, processes/containers, relevant workers and a representative business journey. A homepage 200 alone is insufficient.
7. On failure stop promotion. Application rollback is distinct from database recovery; older code may be incompatible with a newer schema. Preserve incident evidence and obtain explicit authorization for any destructive recovery or materially different action. Close in STATE/CONTINUITY with results and next action.

## Recovery readiness gate

Before a real release establish: running revision and destination; candidate identity; pending/applied migration set; previous artifact availability; database and external-object backup coverage and consistency; completed backup and restore-test evidence; acceptable recovery time and data-loss window agreed with the owner; and the precise recovery decision for pre-migration failure, post-migration failure, and partial service replacement. Measure recovery time and data loss during a separately scoped isolated drill; do not invent RTO/RPO values. A backup filename or snapshot reference alone does not prove recoverability.

If tooling cannot establish these facts, record the gap and prepare the missing procedure before release. Do not bypass project guards, reset a database, remove persistent volumes or prune retained rollback images. Do not treat an old source checkout as an immutable built artifact.

## Release record template

- Task / PR / repository / integration branch:
- Exact merged candidate SHA / previous deployed SHA / artifact IDs:
- Host and environment / expected user impact / authorization scope:
- Checks performed and results / checks not performed:
- Migration set and compatibility / backup reference and verified completion:
- Recovery action for each failure stage / restore evidence / agreed recovery objectives:
- Actual deployment and verification results (leave NOT RUN until executed):
- Operator / timestamp / follow-up and handoff:

## Automation status

This documentation does not configure CI, branch protections, AWS OIDC, Systems Manager, approvals or deployment jobs. Preserve the current mechanism. Before adding automation, reconcile each project's exact-SHA selection, fail-closed verification and recovery. No auto-merge or auto-deploy is introduced. GitHub protection availability and cloud permissions must be verified for the actual account; do not promise enforced gates from written policy.

## Institutional-site adapter

This repository is a website, not its sibling platform's EC2 runtime. [README](../../README.md) and [package scripts](../../package.json) describe its source. GitHub deployment records (read 2026-11-02) show an active Vercel Git integration: `vercel[bot]` creates Production deployments, the latest at `6a182660f3a1` (the current `main` tip), and Preview deployments for PR-branch pushes, including documentation-only heads that built successfully. Treat a merge or push to `main` as an expected Vercel production deployment. Vercel project settings (production branch, ignored build step, preview protection, rollback target) were not readable from this environment; confirm them in Vercel before publication. Do not transfer the platform's PM2/Compose/database commands here.

Use a preview or isolated local build when separately assigned a site change; verify routes, links, assets, accessibility and relevant forms without submitting live messages. A site PR may publish automatically after merge, so review that consequence before authorization. Select a previously verified deployment or artifact for rollback only after confirming the actual host's supported process and environment. No hosting settings were changed or live rollback tested.

This review adds only context documentation. The owner authorized merging this documentation PR only if the merge would not trigger an application production deployment. Because the evidence above indicates that a merge to `main` would trigger a Vercel production deployment, the merge is held for an explicit owner decision. Do not promote a preview or change deployment/ignored-build settings to work around the hold. Website and platform releases remain separate and cross-linked when dependent.

### Checks actually run — 2026-11-02

Read-only source/package/branch review, GitHub deployment-history review and shared-document checks. The reviewer ran no application build, live host audit, form submission, publication or rollback; Vercel's automatic Preview builds for PR-branch pushes are hosting records, not reviewer-executed checks. **Hosting and recovery readiness remain unverified.**

## Isolated recovery rehearsal — prepared, NOT RUN

Use an explicitly identified disposable environment, synthetic tenants/data and test-only credentials; reject a shared/live database destination. Disable outbound email, billing, ingestion, provider calls and schedules. Do not copy production secrets or customer data into fixtures. Do not create paid cloud resources without an agreed scope.

1. Establish candidate and predecessor identities, dependencies, matching configuration and retained built artifacts. For a repository without a complete executable deploy mechanism, reconcile it first; a generic restart is not a substitute.
2. Seed a synthetic baseline with known row/object counts and tenant boundaries. Create an isolated backup, verify integrity, and record start time and expected recovery/data-loss objectives.
3. Exercise a normal candidate transition in that isolated environment, including only the candidate's reviewed migration set. Verify identity, functional reads and relevant worker behavior with outbound effects stubbed.
4. Inject a pre-migration failure and verify the predecessor is preserved. Separately exercise a post-migration and partial-service failure. Assert that an incompatible rollback is refused before replacements; never weaken guards to get a passing result.
5. Restore into a separate empty disposable destination, with matching code and object state. Verify schema/history, expected synthetic row/object counts, hashes where applicable, tenant isolation and a representative user flow. Verify that newer data-loss boundaries and external-side-effect reconciliation are reported honestly.
6. Measure time to service recovery and data loss, retain sanitized command/result evidence, and identify what each test did and did not establish. A stubbed test does not prove real PostgreSQL/Compose behavior; a disposable drill does not certify the live host.
7. Remove only resources created by the drill using their recorded identities. Confirm no resource or task remains and update this record. Never prune shared images, databases, volumes or backups.

For KeepsAlive, first rerun the existing regression suite on supported Bash and the existing real PostgreSQL/Compose rollback-guard suite. Preserve its migration-specific refusal/mixed-version cases. For Veruscope, include matching synthetic S3 document objects. For Visto Monitor, include web/worker version compatibility and notification/webhook replay prevention. For ProFixID, include public-card and optional photo-object consistency. For GovDecision, prove that failed readiness cannot be reported as a successful release and that migration-before-build failure is recoverable.
