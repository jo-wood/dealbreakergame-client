# Dealbreaker Game - Real-time Dating App
<div>
  <img align="left" width="100" height="100" src="https://github.com/jo-wood/dealbreakergame-client/blob/jo-repo/src/images/favicon.png">

  [dealbreakergame.ca (WIP)](https://www.dealbreakergame.ca)

  A real-time dating app that uses an algorithm to match contestants after answering a blitz of questions before revealing each other's instagram profile.
</div>

---

  [Jump to visual on how the App works](#explore-the-app) 

**Tech Stack:**

* ReactJS

*Backend:*

* NodeJS (express)
* Socket.IO
* PostgreSQL
* Instagram API (OAuth)

## Primary Dependencies

*This application is built in connection with the backend server in repo:* [backend-server](https://github.com/jo-wood/dealbreakergame-backend)

**Note that this application is built using Instagram's API which keeps development in sandbox mode until privacy requirements are approved. Currently a `Work In Progress` to hardwire a run through case of the project in this repo**

Please [Explore the App](#explore-the-app) for a view on how the game runs.

* react - ^16.8.6
* react-circular-progressbar - ^2.0.1
* react-countdown-now - ^2.1.1
* react-dom - ^16.8.6
* react-helmet - ^5.2.1
* react-router-dom - ^5.0.1
* react-scripts - 3.0.1
* dotenv - ^8.0.0
* socket.io - ^2.2.0
* socket.io-client - ^2.2.0
* universal-cookie - ^4.0.2
* sass - ^1.22.7

```
*To Intall Project must have Instagram sandbox authorization and update .env*
`npm install` to get dependencies
`npm start` to start the project on local machine.
```

## Problem Statement

The current dating app market is quite polarized:

* either viewed as more serious with convoluted questionnaires and heavy input required at sign-up
* or swipe left/right by very superficial means (and generic conversations that span over days)

But both of these extremes matter, so what's just right?

Dealbreaker. The dating game app.
No excuses anymore! We've got your dealbreakers covered.

## Proposed Solution

A dating app that gives you connection first, with easy effort on the user to start a relevant conversation (at the time you actually feel like having a conversation) but still values your potential importance on physical attraction as well

* Think, HQ Trivia meets The Dating Game show
* Every night at 8:00, jump onto the dealbreaker game where contestants have also joined
* All contestants waiting to play the game are pooled in images at the bottom of the screen, but... they are blurred out
* In real-time, as the clock strikes 8:00, the current game is LOCKED IN and for 5 mins, questions appear with multiple choice answers
* Submit your answer to the question - and when the timer on that question ends - based on your % match, contestants pictures start to clear
* But we still have some questions to go!
* As you reach the end of the game, your top matches will be fully revealed! And you can start a conversation with plenty to talk about (these questions will guarantee that!)



## Explore the App

<p align="center">
    <img width="100%" height="100%" src="https://github.com/jo-wood/dealbreakergame-client/blob/jo-repo/docs/dealbreakergame.png">
</p>
