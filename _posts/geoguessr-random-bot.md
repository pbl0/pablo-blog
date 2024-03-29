---
title: 'Geoguessr random challenges'
excerpt: "Another telegram bot..."
coverImage: '/assets/blog/geo-random/bot.jpg'
date: "2022-09-05T18:30:00.000Z"
author:
  name: Pablo
  picture: ''
ogImage:
  url: '/assets/blog/geo-random/bot.jpg'
width: '1079'
height: '1186'
---

## Introduction

I've made yet another telegram bot! Yay!

[@geo_random_bot](https://t.me/geo_random_bot) will send you random [Geoguessr](https://www.geoguessr.com/) challenges links.

> "GeoGuessr is a geography game which takes you on a journey around the world and challenges your ability to recognize your surroundings."

Geoguessr challenges are a great way to start playing this game as they are completely free to play. This bot receives the challenge and stores them in a database, then it will answer whenever it receives the `/random` command with a previously stored random link. Should work in groups too.

<img src="/assets/blog/geo-random/geo-random.png" alt="Bot message image" width="420"/>

## Usage

Talk to  [@geo_random_bot](https://t.me/geo_random_bot)

- `/random` *sends a random challenge*

- You can also specify the map, example:

    `/random World`

- `/all` *Shows a list of every challenge (Doesn't work in groups)*


Send a challenge link to the bot and it will be saved it on the database.

- Example of a challenge link: `https://geoguessr.com/challenge/e0gOWtp7rzSKbPgw`

## Other stuff

In case you are interested in the technical aspects of the bot I've used the following python libraries:

- [python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot) to make the bot.
- [firebase-admin](https://firebase.google.com/docs/firestore/quickstart) google's firestore database
- [requests](https://requests.readthedocs.io/en/latest/) to contact [geoguessr api](https://geoguessr.com/api/) to gather the **map name** and the **rules** of the challenge.

This project took me a couple of hours to get the core functionality (store and send links) working and a couple of weeks more to polish everything else, such as showing the name of the map and the rules of the challenge, adding buttons and the complementary commands (`/start` and `/all`).

Might add some other features in the futures... Maybe.