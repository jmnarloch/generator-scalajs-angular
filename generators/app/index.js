'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Scala.js Angular') + ' generator!'
    ));

    this.copy = function (dir, src, dest) {
      this.fs.copy(
        this.templatePath(dir + src),
        this.destinationPath(dir + dest)
      );
    }.bind(this);
  },

  writing: {
    project: function() {
      this.copy('project/', '_build.properties', 'build.properties');
      this.copy('project/', '_Build.scala', 'Build.scala');
      this.copy('project/', '_plugins.sbt', 'plugins.sbt');
    },

    scalajs: function() {
      this.copy('scalajs/src/main/scala/todomvc/example/', '_Directives.scala', 'Directives.scala');
      this.copy('scalajs/src/main/scala/todomvc/example/', '_Scopes.scala', 'Scopes.scala');
      this.copy('scalajs/src/main/scala/todomvc/example/', '_StatusFilter.scala', 'StatusFilter.scala');
      this.copy('scalajs/src/main/scala/todomvc/example/', '_Task.scala', 'Task.scala');
      this.copy('scalajs/src/main/scala/todomvc/example/', '_TaskService.scala', 'TaskService.scala');
      this.copy('scalajs/src/main/scala/todomvc/example/', '_TodoApp.scala', 'TodoApp.scala');
      this.copy('scalajs/src/main/scala/todomvc/example/', '_TodoCtrl.scala', 'TodoCtrl.scala');
    },

    scalajvm: function() {
      this.copy('scalajvm/app/controllers/', '_SourceMapProvider.scala', 'SourceMapProvider.scala');
      this.copy('scalajvm/app/controllers/', '_TodoController.scala', 'TodoController.scala');

      this.copy('scalajvm/app/todomvc/example/', '_Task.scala', 'Task.scala');
      this.copy('scalajvm/app/todomvc/example/', '_TaskStore.scala', 'TaskStore.scala');

      this.copy('scalajvm/app/views/', '_index.scala.html', 'index.scala.html');

      this.copy('scalajvm/app/', '_Application.scala', 'Application.scala');

      this.copy('scalajvm/conf/evolutions/default/', '_1.sql', '1.sql');
      this.copy('scalajvm/conf/', '_application.conf', 'application.conf');
      this.copy('scalajvm/conf/', '_routes', 'routes');

      this.copy('scalajvm/public/images/', '_bg.png', 'bg.png');
      this.copy('scalajvm/public/stylesheets/', '_main.css', 'main.css');
      this.copy('scalajvm/public/templates/', '_todo-item.html', 'todo-item.html');
    },

    projectfiles: function () {
      this.copy('', 'gitignore', '.gitignore');
    }
  },

  install: function () {
    if (this.options.skipInstall) {
      return this;
    }

    this.spawnCommand('sbt', ['compile']);
  }
});
