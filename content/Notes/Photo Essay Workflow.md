---
title: Photo Essay Workflow
---

# Photo Essay Workflow

## Full lifecycle

| Status | Who sets it | What happened |
|---|---|---|
| `draft` | Claudian | Intake complete, file created |
| `review` | Claudian | Draft written, Jim notified |
| `approved` | Jim | "approve" said to Claudian |
| `published` | Claudian | `npx quartz sync` ran, live URL confirmed |

## Starting a new essay

1. Say `/new-sand-flea-essay` in Claude Code
2. Pick the trip folder from the list Claudian presents
3. Provide essay title and trip date
4. Claudian moves photos, reads the transcript, creates the draft file
5. Say "draft this essay" when ready for Claudian to write

## Voice memo

Place the transcript as a `.txt` file inside the OneDrive trip folder (`OneDrive\Pictures\Sand Flea Media\<trip>\`) before running `/new-sand-flea-essay`. Claudian reads it automatically. If it's missing, Claudian will ask you to paste it.

## Approving and publishing

After editing the draft in Obsidian, say "approve" or "/approve-essay" to Claudian. It will sync to Quartz and confirm the live URL.

## Voice

Drafting uses the `jim-voice` skill — Jim's general writing voice, not photo-essay-specific. The profile lives at `.claude/skills/jim-voice/voice-profile.md` and can be edited directly any time. To rebuild from scratch, re-run a broad scan of Jim's personal writing folders.
