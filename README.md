## Description

# Test nestjs project

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Endpoints

## Company endpoints:

```http request
### create company:

POST http://localhost:3000/company
Content-Type: application/json

{
    "name": "CompanyName",
    "address": "Number Street CIty Country",
    "userId": "6763d26274f9a1b262b255db"
}

### list of companies :

GET http://localhost:3000/company
Content-Type: application/json

### get one company :

GET http://localhost:3000/company/67633530be8655691159f5fa
Content-Type: application/json

### update a company :

PATCH http://localhost:3000/company/67633530be8655691159f5fa
Content-Type: application/json

{
    "name": "CompanyName 2",
    "address": "Number 2 Street CIty Country"
}

### delete a company :

DELETE http://localhost:3000/company/67633530be8655691159f5fa
Content-Type: application/json

```

## User endpoints:

```http request
### create a user:

POST http://localhost:3000/user
Content-Type: application/json

{
    "name": "user 1",
    "email": "user1@company.test"
}

### bad create user, not be successful

POST http://localhost:3000/user
Content-Type: application/json

{
    "name": "without email"
}


### list of users :

GET http://localhost:3000/user
Content-Type: application/json

### get a user by its id :

GET http://localhost:3000/user/6763d26274f9a1b262b255db
Content-Type: application/json

### update a user :

PATCH http://localhost:3000/user/6763cf9f74f9a1b262b255d5
Content-Type: application/json

{
    "name": "user1",
    "email": "email2@company.test"
}

### delete a user :

DELETE http://localhost:3000/user/6763f8bc531ee0c0c1ca1f62
Content-Type: application/json

```
