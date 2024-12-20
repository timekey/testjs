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

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
