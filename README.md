# [LIFE APP](https://live-a-life-you-will-remember.herokuapp.com)

## [Objection.js](https://vincit.github.io/objection.js/) + [Express](https://expressjs.com/) = Web App

## Disclaimer

This is a beginner's attempt to begin fullstack. I wanted to keep it freaking simple. No webpack no babel no nothing. As vanilla as possible. Then I got into confusion. And here you are.

## Setup

Pre-requisites
(You should probably use docker for these commands, I should too.)

```
brew install psql
brew install knex
```

### Database

Create database locally:

```
createdb life
```

To migrate whatever inside the migrations folder:

```
knex migrate:latest
```

To feed the database with seeds:

```
knex seed:run
```

### Server / Client

Install the dependencies:

```
npm install
```

Create .env in root folder:

```
npm run create:env
```

Run the freaking app:

```
npm run start
```

### Deploy to Heroku

You can also deploy to Heroku easily using these commands (Heroku is awesome!):

```
brew install heroku
heroku login
heroku create you-can-name-anything-you-want-here
git push heroku origin
heroku open
```
