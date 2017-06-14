# Mocha-Chai-Unit-Testing
This project was created to learn how to use Mocha/Chai to do unit tests in node.js

### Setting up of the environment
In the directory for the project we should type the next command:
```
npm init
```

As a result we have to get a `package.json` file for our project.

Next, we have to install our testing framework, and an expectation library called Chai that serves as a nice replacement for Node's standard assert function:
```
npm install mocha --save
npm install chai --save
```

Finaly, the following command is used to invoke the Mocha binary installed locally in the `./node_modules` directory:
```
./node_modules/.bin/mocha --reporter spec
```

We can also update the `test` command in our `package.json` to contain the above command. That will help us to make our tests easier :)

At this point we can start to develop our code and cover it by unit tests. Good luck! :)
