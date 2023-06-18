# social-media-API 

API for a social network. 

## description

API that allows user to create, update, delete and read data for a social network - uses mongodb and express.

Database contains uers and thoughts. Each user will havev thoughts, friends (other users), and reactions to their thoughts, from other users. 

Users can create, update, delete and read thoughts and reactions to thoughts. 

This is done using API POST, PUT and DELETE routes. 

## installation

1. Git clone
2. Move to directory
3. npm install
4. node index.js

## usage

Create a User

POST localhost:3001/api/users

Example body:

{
    "username": "Big ol' user",
    "email": "bigOlUser@testmail.com"
}

View all Users

GET localhost:3001/api/users

View a single User

GET localhost:3001/api/users/:userId


Update a User

PUT localhost:3001/api/users/:userId

Example body:

{
    "email": "bigOlUser@testmail.com"
}

Delete User

DELETE localhost:3001/api/users/:userId

Add Friend

POST localhost:3001/api/users/:userId/friends/:friendId

Remove Friend

DELETE localhost:3001/api/users/:userId/friends/:friendId

Thought Routes

Create Thought

POST localhost:3001/api/thoughts

Example body:


{
  "thoughtText": "Who's thinkin?",
  "username": "Big ol' user",
  "userId": "648745432e1518dbfbaeb2db"
}


View all Thoughts

GET localhost:3001/api/thoughts

View a single thought

GET localhost:3001/api/thoughts/:thoughtId

Update a thought

PUT localhost:3001/api/thoughts/:thoughtId

Example body:

{
    "thoughtText": "Thinkin' thinkin' thinkin'"
}


Delete a thought

DELETE localhost:3001/api/thoughts/:thoughtId

Add a Reaction

POST localhost:3001/api/thoughts/:thoughtId/reactions

Example Body:

{
	"reactionBody": "Thinkin' thoughts",
	"username": "Big ol' user"
}

Remove a Reaction

DELETE localhost:3001/api/thoughts/:thoughtId/reactions

Example Body:

{
	"reactionId": "6488690a4c9298224ebd2365"
}

## video
https://drive.google.com/file/d/1mugWtdna-LsZKgAJfQ3wvdjH8lajbYQ8/view?usp=sharing

## github 
https://github.com/Hicku




