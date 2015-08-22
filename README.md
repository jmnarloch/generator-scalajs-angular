# Generator Scala.js Angular [![Build Status](https://secure.travis-ci.org/jmnarloch/generator-scalajs-angular.png?branch=master)](https://travis-ci.org/jmnarloch/generator-scalajs-angular) [![npm version](https://badge.fury.io/js/generator-scalajs-angular.svg)](http://badge.fury.io/js/generator-scalajs-angular) [![Dependency Status](https://david-dm.org/jmnarloch/generator-scalajs-angular.svg)](https://david-dm.org/jmnarloch/generator-scalajs-angular) [![devDependency Status](https://david-dm.org/jmnarloch/generator-scalajs-angular/dev-status.svg)](https://david-dm.org/jmnarloch/generator-scalajs-angular#info=devDependencies)

> [Yeoman](http://yeoman.io) [Scala.js Angular](https://github.com/greencatsoft/scalajs-angular) generator

This generator is based on the fabulous Scala.js Angular example: [https://github.com/greencatsoft/scalajs-angular-todomvc](https://github.com/greencatsoft/scalajs-angular-todomvc)

## Getting Started

Make sure that you have `sbt` installed, if not simply fallow the [instructions for your operating system](http://www.scala-sbt.org/0.13/tutorial/Setup.html). 

Install the Yeoman generator.

```bash
npm install -g generator-scalajs-angular
```

Run the generator to setup your project:

```bash
yo scalajs-angular
```

This will scaffold the project structure and run `sbt compile`.

Note: First run might take some time due to dependencies download.
 
## Directory structure

```
.
├── build.sbt
├── project
│   ├── Build.scala
│   ├── build.properties
│   ├── plugins.sbt
├── scalajs
│   ├── src
└── scalajvm
    ├── app
    ├── conf
    ├── public
```

Scalajvm contains the Play backend. Scalajs the Scala.js Angular application.

## Running

When the generator has finished it work execute:

```
sbt run
```

Navigate to [http://localhost:9000](http://localhost:9000) in your browser.

You should see similar page:

![TodoMVC Example](https://github.com/jmnarloch/generator-scalajs-angular/raw/master/todo-app.png "TodoMVC example")


## License

Apache 2.0
