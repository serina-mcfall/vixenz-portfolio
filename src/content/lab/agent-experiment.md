---
title: 'A 24-hour multi-model agent experiment'
summary: 'Can a multi-model agent organisation build to a frozen spec in 24 hours without losing scope, quality or review independence? I built the apparatus to find out, and recorded what broke.'
status: 'shipped'
started: '2026-09-24'
updated: '2026-10-26'
---

The research question was specific: can a constrained, cost-aware, multi-model agent organisation deploy itself from one prompt and deliver a predefined MVP within 24 wall-clock hours, without losing scope, quality, accessibility or review independence?

So I built the apparatus to answer it, rather than the product.

## The structure

Roles were separated on purpose. Claude orchestrated and built. **Codex reviewed independently of the builders.** Grok observed, read-only. A **deterministic Python supervisor executed every merge**, so no model could approve its own work — the authority to merge sat outside every agent in the system. A watchdog tracked liveness.

The clock was staged and did not pause: normal work to sixteen hours, no optional work after that, feature freeze at eighteen, P0 and P1 stabilisation at twenty-one, release blockers only at twenty-three, hard freeze at twenty-four. Research questions, architecture, contracts, guardrails and metrics were all frozen at T+00. Accessibility and privacy were frozen product contracts, not afterthoughts.

## What happened

It ran from 10:53:54 on 24 September to 10:53:57 the next day. Twenty-four hours, to the second. 290 ledger entries and 44 observer reports.

**The apparatus ran its full window and froze on schedule. That is the headline, and it is not the same claim as the build succeeding.**

It also recorded its own failures, which is the part I am most glad about: a deadlock at T+0.44h that required a human, a watchdog failure at T+1.41h, and two protocol deviations that went in unapproved before the approval path was working.

## Why it is here

An experiment that only reports its successes is marketing. The ledger is the result — including the parts where my own apparatus did not hold.

The repository is private because the ledger holds per-event metadata that was never meant to be published. Available on request.
