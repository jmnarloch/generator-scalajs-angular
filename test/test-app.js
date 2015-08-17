'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('scalajs-angular:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.gitignore',
      'build.sbt',
      'project/build.properties',
      'project/Build.scala',
      'project/plugins.sbt',
      'scalajs/src/main/scala/todomvc/example/Directives.scala',
      'scalajs/src/main/scala/todomvc/example/Scopes.scala',
      'scalajs/src/main/scala/todomvc/example/StatusFilter.scala',
      'scalajs/src/main/scala/todomvc/example/Task.scala',
      'scalajs/src/main/scala/todomvc/example/TaskService.scala',
      'scalajs/src/main/scala/todomvc/example/TodoApp.scala',
      'scalajs/src/main/scala/todomvc/example/TodoCtrl.scala',
      'scalajvm/app/controllers/SourceMapProvider.scala',
      'scalajvm/app/controllers/TodoController.scala',
      'scalajvm/app/todomvc/example/Task.scala',
      'scalajvm/app/todomvc/example/TaskStore.scala',
      'scalajvm/app/views/index.scala.html',
      'scalajvm/app/Application.scala',
      'scalajvm/conf/evolutions/default/1.sql',
      'scalajvm/conf/application.conf',
      'scalajvm/conf/routes',
      'scalajvm/public/images/bg.png',
      'scalajvm/public/stylesheets/main.css',
      'scalajvm/public/templates/todo-item.html'
    ]);
  });
});
