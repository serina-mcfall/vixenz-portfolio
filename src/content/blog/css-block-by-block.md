---
title: 'CSS, block by block: two full-stack builds and one AI in the loop'
summary: 'What CSS felt like as a complete beginner, what changed when I built Moonlit Library, what changed again when I built the Atlas design system, and what working with Claude as a guide-not-solution has taught me about how I learn.'
published: '2026-06-16'
tags: ['css', 'frontend', 'ai-pair-programming', 'reflective', 'moonlit', 'atlas']
---

## Foundations: the married couple

When I first started Dev Academy Foundations it was intimidating, to say the least. I came in with no coding experience and the whole thing was a bit of a culture shock.

But CSS. CSS clicked almost immediately. I noticed right away how it just kind of flowed together and paired with HTML. They felt like a married couple that had been together for years. They understood each other. They knew how to work together. They got the job done.

That was the first thing that made me think: maybe I can do this.

## Moonlit Library: CSS in the build itself

Moonlit was my first real production CSS. Writing CSS in the actual client-side code, not in an isolated `styles.css` exercise, was new. The patterns were the same but the context was different: the CSS lived inside a component-shaped project that was also fetching data and rendering routes and being tested.

Claude helped with this, with guidance and patience while I was learning. When issues cropped up, Claude guided me *to* the mistake rather than fixing it for me. The pattern was always "here is where the problem lives, and here is why your eye missed it," never "I have rewritten this for you."

What I started to love was how a couple of well-placed pieces of code can make a website beautiful. How CSS makes a site pop and come alive. The artist in me sees the appeal of frontend development specifically from working in CSS on the client side.

For Moonlit, the design was as important as the build and the planning. Working out what I wanted that site to look like was what made the final result possible: the moon palette, the gold accents, the rating widget shaped like phases. The CSS came out of the design decisions, not the other way around.

## Atlas Phase 3: the second time around

Atlas Phase 3 felt different. It was like walking into a new job and knowing exactly what the user wanted without needing to look, and just building it.

The second time around cemented the way it works. It made the patterns understandable and executable. I was able to build the code with very minimal errors. They were still there (they always are), but I caught more of them myself, and where Claude was needed, it was for understanding what the error *meant* and where the fix belonged, not for writing the fix.

I am learning, in my own way, how to notice errors and what they mean. That is the actual skill I am building. Not "fewer errors" but better instincts for what each error is telling me.

## How I use AI for CSS

This part is honest because it should be:

Claude does not write my CSS for me. Claude guides me when I am stuck. The pattern that works for me (across both Moonlit and Atlas) is:

- I describe what I want the page to do
- I write the CSS myself
- When something breaks or behaves wrong, I ask Claude what it is seeing
- Claude points me to the line, the pattern, the missing piece, and explains *why*
- I make the change myself

The "why" is the thing. If Claude just fixes the bug for me, I keep making the same mistake. If Claude explains why my approach didn't work, I stop making *that class* of mistake. That is the difference between a tool and a tutor, and I want a tutor.

The pros are real: faster onboarding to patterns I haven't seen, immediate vocabulary checks ("is this what `:focus-visible` is for?"), pair-programming-style explanations of why a particular CSS Grid template is doing what it is doing.

The cons are real too: Claude cannot see the rendered page. Claude cannot tell me a layout looks visually wrong unless I show it a screenshot. Claude can suggest patterns that are technically valid but accessibility-broken if I don't push back. The honest stance is: AI is a strong second pair of eyes for *code*, not for *design judgement*. Design judgement stays mine.

## What I would do differently

Understand the pattern a bit better before the build. The thing I would change is not the code: it is the order. Sit with the design system longer up front. Work out why *this* goes here and *that* goes there before I start typing. The mistakes I made were almost all in the rushing-to-write part, not the thinking part.

Next time, I want to plan the CSS the way I plan the schema: slowly, deliberately, with the structure clear before any keystroke.

## Where I am heading

My heart lays in the server side. Databases, migrations, seeds, the relational workflow: that is where I am happiest. I have known this since the Avalúne Compendium track.

But the UI is a magic place to be, full of so much potential. CSS is the part of frontend development where I see the most of myself: the artist, the pattern-watcher, the slow careful reader who notices when a layout is off by 2 pixels and won't let it go.

I am going to keep learning both. The plan is to continue, grow, and progress. The married couple are still doing their thing; I am just getting better at translating between them.
