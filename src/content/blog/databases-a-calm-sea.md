---
title: 'Databases are a calm sea: the data layer, built by hand'
summary: 'Why I love the schema layer, the drawer test I figured out myself, the car-and-driver way I think about migrations and seeds, why I built it all by hand (tantrums included), and the 30,000-card MTG database coming next.'
published: '2026-06-16'
tags: ['databases', 'sqlite', 'knex', 'migrations', 'seeds', 'backend', 'reflective', 'neurodiversity']
---

## The calm sea

Databases are about structure, pattern, and predictability. They give my autistic side the piece it needs.

A lot of my thoughts are chaotic and always on the go. Databases are a calm sea. You sit down with a fresh schema and the whole point of the exercise is to slow down: to work out what belongs where, what relates to what, what earns its place. The work is the slowness. There is nothing chaotic about a well-shaped schema. That is what I love about it.

Schema design appeals to me in a way I never thought it would. When it all comes together (when the migrations run clean and the seeds take and the API returns real data on the first request) I feel pride and gratification that is hard to describe. The first time the Atlas seeds took, I did a jig. That is the honest record.

## The drawer test

I pieced this heuristic together myself. It just made sense to me.

Databases are a file cabinet. Each table is a drawer. Each drawer is connected to the others: through foreign keys, through joins, through the relationships you decide are real. Without the cabinet, the whole thing falls apart. One drawer cannot work without the others, and the cabinet itself has no purpose without the drawers inside.

The test I use when I am deciding whether something should be its own table or just a column on another table:

- Does this thing get looked up on its own?
- Does it get linked to from other records?
- Is there one row per instance of it?

If yes to all three, it earns a drawer. If no, it stays as a column.

The same pattern travels up a level. Client side and server side are the file-cabinet structure of the whole app. The client cannot work without the server. The server has nowhere to display its magic without the client. They work in harmony together. They form a balance that is harmonious and perfect if you get it right.

That is the goal. Not "perfect schema" but perfect *relationship*.

## Migrations and seeds: the car and the driver

Migrations are the car. Shifting gears, changing directions, going to new places, exploring. Migrations are how the schema *moves*. You add a column, you rename a table, you change a relationship: that is the car going somewhere new.

Seeds are the driver. Stable. They know where to go. They are the information highway: the consistent reference data the schema needs to work with. The driver never gets lost. The driver is what makes the car's journey actually arrive somewhere.

Migrations explore. Seeds anchor. Together they are the journey of the data layer.

## By hand: and why

I picked Express + Knex + SQLite for Atlas and the Avalúne Compendium. No ORM. No managed service. Hand-rolled queries, hand-written migrations, hand-authored seeds.

I could have grabbed Supabase or Prisma and shipped faster. I did not, for a specific reason: I wanted to learn it from the ground up. Mistakes and errors and tantrums and all.

I wanted to know *how*:

- How to write a migration that adds a table and a foreign key in the right order.
- How to seed that table with data the API can actually return.
- How to connect the route to the query, the query to the schema, the schema to the seed.
- How to set up the UI so the data has somewhere to land.

From concept to deployment, the project was mine. *I* built it. Not me wrapping a service, me wiring every layer.

That is what hand-rolling buys you. The thing you don't get from an ORM is the *understanding* of what the ORM was hiding. Once you understand it, you can pick the tool deliberately. Until then, picking the tool is just deferring the learning.

## The first seed that took

I will be honest: the moment the first Atlas seed ran clean (when the migration finished and the seed populated `topics` and `concepts` and the API returned actual JSON I had not hand-coded) I did a jig. Full-on, actual happy dance.

That is the gratification. It is not the cleverness of the schema. It is not the elegance of the code. It is the *aliveness* of the data, suddenly there, reachable, real. The drawer test paid off. The migrations did their job. The seeds drove the car all the way home.

## What's next

The MTG Project is the next big database challenge. I am building a Commander deck-builder, which means a database that holds over 30,000 Magic cards plus the relationships between them: colour identity, mana costs, types, formats, set membership, tribal synergies, card-to-card interactions. It is a *significant* schema.

The Scryfall API for Magic data is also finicky, which means there will be a real learning curve in navigating it: rate limits, response shapes I have to normalise, edge cases for split cards and double-faced cards and tokens.

I am also going to try Supabase and Postgres for this project, as part of my explicit learning objectives. SQLite has taken me a long way; Postgres is the next step. Supabase is the managed-service half of the spectrum: I want to see what it actually hides from me, now that I know what I am giving up.

The calm sea keeps getting bigger. So far I am still loving the swim.
