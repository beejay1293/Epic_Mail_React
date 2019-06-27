# EPIC_Mail_React

EPIC Mail is an Application that helps people exchange messages/information over the internet.

[![Build Status](https://travis-ci.org/beejay1293/Epic_Mail_React.svg?branch=develop)](https://travis-ci.org/beejay1293/Epic_Mail_React)
[![Coverage Status](https://coveralls.io/repos/github/beejay1293/Epic_Mail_React/badge.svg?branch=develop)](https://coveralls.io/github/beejay1293/Epic_Mail_React?branch=develop)


## Features

- User can sign up
- User can sign in
- Users can **get create or send an email**
- Users can **fetch all received emails**
- Users can **fetch all unread received emails**
- Users can **fetch all sent emails**
- Users can **fetch a specific email record**
- Users can **delete a specific email record**
- Users can **Create a new group**
- Users can **get all groups records**
- Admin/Moderator can **edit the name of a specific group**
- Admin can **delete a specific group record**
- Admin/Moderator can **add a new user to a group**
- Admin/Moderator can **delete a user from a group**
- Users can **send an email to a group**
- Deliver messages via SMS

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
npm run start
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

`- POST /api/v2/groups Create a new group record.`

`- GET /api/v2/groups Get all group records.`

`- PATCH /api/v2/groups/<:groupId>/name Edit the name of a specific group record.`

`- DELETE /api/v2/groups/<:groupId> Delete a specific group record.`

`- POST /api/v2/groups/<:groupId>/users Add a new user to a group.`

`- DELETE /api/v2/groups/<:groupId>/users/<:userId> Delete a specific user from a group.`

`- POST /api/v2/groups/<:groupId>/messages send an email to a group.`

## Pivotal Tracker stories

[https://www.pivotaltracker.com/n/projects/2355095](https://www.pivotaltracker.com/n/projects/2355095)


## API

The API is currently in version 1 (v1) and in version 2 (v2) and is hosted at

[https://andela-epic-mail.herokuapp.com/](https://andela-epic-mail.herokuapp.com/)

## API Documentation

[https://andela-epic-mail.herokuapp.com/api-docs/](https://andela-epic-mail.herokuapp.com/api-docs/)

## Author

Matti Mobolaji Usman
