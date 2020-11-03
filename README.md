# simpleBlog

A basic blog application made with Node + express + Mongo + React made as an exercise for my Web Development Class.

## Organization

The root folder contains a basic express application generated with express-generator. The public folder contains a basic frontend built with jade as a demonstration, but the final frontend was created with create-react-app and resides in the front folder. Notice that the front folder is a whole different project.

## Developing

Start the server, you can test it on https://localhost:3001

```
yarn install
yarn start
```

Start the client, you can test it on https://localhost:3000. Use this URL for development, as react has been configured to connect to the backend on 3001 when doing AJAX.

```
cd front
yarn install
yarn start
```

Have an instance of mongo running, and set the mongo url to the MONGO_URL environment variable. If not variable is found then mongodb://localhost:27017 will be used.

## Preparing for deployment

```
yarn install
cd front
yarn install
yarn run build
cd ..
yarn start
```

## Deploying to Heroku

_. Follow carefully the steps here: https://devcenter.heroku.com/articles/deploying-nodejs
_. Create a free account in mongo atlas, start a new cluster.
_. Make sure that you create a new user in mongo atlas with permissions to edit the database.
_. Make sure that you whitelist your ip for connecting to the database
\*. Here is my package.json

```
{
  "name": "myblog",
  "version": "0.0.0",
  "private": true,
  "main": "./bin/www",
  "scripts": {
    "start": "node ./node_modules/nodemon/bin/nodemon.js ./bin/www",
    "heroku-postbuild": "cd front && yarn install && yarn run build"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "mongodb": "^3.6.2",
    "morgan": "~1.9.1"
  },
  "devDependencies": {
    "eslint": "^7.11.0",
    "eslint-config-prettier": "^6.13.0",
    "nodemon": "^2.0.6",
    "prettier": "^2.1.2"
  },
  "author": "John Alexis Guerra Gómez",
  "license": "MIT",
  "engines": {
    "node": "12.13.x",
    "yarn": "1.13.x"
  }
}
```

Notice the heroku-postbuild script which builds react for you, courtesy of @Suhas Mohan
_. Create an environment variable MONGO_URL in your heroku deployment
_. Success
\*. Hug your instructor
