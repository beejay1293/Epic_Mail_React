# EPIC_Mail_React

EPIC Mail is an Application that helps people exchange messages/information over the internet.

[![Build Status](https://travis-ci.org/beejay1293/Epic_Mail_React.svg?branch=develop)](https://travis-ci.org/beejay1293/Epic_Mail_React)
[![Coverage Status](https://coveralls.io/repos/github/beejay1293/Epic_Mail_React/badge.svg?branch=develop)](https://coveralls.io/github/beejay1293/Epic_Mail_React?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/e2c379f742e6c59e5940/maintainability)](https://codeclimate.com/github/beejay1293/Epic_Mail_React/maintainability)


## Features

- User can sign up
- User can sign in
- Users can **get create or send an email**
- Users can **fetch all received emails**
- Users can **fetch all unread received emails**
- Users can **fetch all sent emails**
- Users can **fetch a specific email record**
- Users can **delete a specific email record**


## Technologies

- React js
- Redux
- Jest & Enzyme
- ESLint
- Babel
- Travis CI
- Code Climate & Coveralls

## Requirements and Installation

To install and run this project you would need to have listed stack installed:

- React js
- Git

To run:

```sh
git clone <https://github.com/beejay1293/Epic_Mail_React.git>
cd EPIC_Mail_React
npm install
npm run start:dev
```

## Testing

```sh
npm test
```

## API-ENDPOINTS


`- POST /api/v2/auth/signup Create a new user record.`

`- POST /api/v2/auth/login login a user.`

`- POST /api/v2/messages Create or send an email.`

`- GET /api/v2/messages Get all received emails.`

`- GET /api/v2/messages/unread get all unread received emails.`

`- GET /api/v2/sent get all sent emails.`

`- GET /api/v2/messages/<:message-id> Get a specific email record.`

`- DELETE /api/v2/messages/<:message-id> Delete a specific email record.`



## Pivotal Tracker stories

[https://www.pivotaltracker.com/n/projects/2355095](https://www.pivotaltracker.com/n/projects/2355095)


## UI

You can see a hosted version of the frontend hosted at

[https://epic-mail-frontend.herokuapp.com/](https://epic-mail-frontend.herokuapp.com/)


## API

The API is currently in version 1 (v1) and in version 2 (v2) and is hosted at

[https://andela-epic-mail.herokuapp.com/](https://andela-epic-mail.herokuapp.com/)

## API Documentation

[https://andela-epic-mail.herokuapp.com/api-docs/](https://andela-epic-mail.herokuapp.com/api-docs/)

## Author

Matti Mobolaji Usman
