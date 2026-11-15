---
title: 'Journey Builder: governance before code'
summary: 'A local-first application deliberately held at the design stage. No application code until six conformance gates pass, and none of them has yet.'
status: 'sketching'
started: '2026-10-23'
updated: '2026-11-12'
---

Three commits, zero lines of application code, and that is the point. The repository holds architecture decision records and a set of six conformance gates that have to pass before the design contract freezes and implementation is allowed to start. So far the only completed work is the dependency set: resolved, security-reviewed, and verified as reproducibly installable, with its limitations written down.

Deciding not to build yet is a decision. Writing down what would have to be true before building is how you make it one.
