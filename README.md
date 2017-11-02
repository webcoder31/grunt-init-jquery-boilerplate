# grunt-init-jquery-boilerplate

> Get a ready-to-use jQuery plugin boilerplate with [grunt-init][], including [Karma][] driven [QUnit][] unit tests.

[grunt-init]: http://gruntjs.com/project-scaffolding
[karma]: http://karma-runner.github.io/
[QUnit]: https://qunitjs.com/
[JSHint]: http://jshint.com/
[JSCS]: http://jscs.info/


## Installation

If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone https://github.com/webcoder31/grunt-init-jquery-boilerplate.git ~/.grunt-init/jquery-boilerplate
```

_(Windows users, see [the grunt-init documentation][grunt-init] for the correct destination directory path)_


## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init jquery-boilerplate
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

Once done, if you named your plugin "myplugin", you've got a ready-to-use project with the following basic structure:

```
├── demo/
│   └── index.html ..................... // Demo page of your plugin
├── dist/
│   ├── jquery.myplugin.js ............. // Distrib version of your plugin
│   └── jquery.myplugin.min.js ......... // Minified version of your plugin
├── src/
│   └── jquery.myplugin.js ............. // Source file of your plugin
├── test/
│   └── spec/
│   │   └── jquery.myplugin.spec.js .... // Unit test specifications
│   └── sandbox.js ..................... // Setup a sandbox to run tests
├── .editorconfig
├── .gitignore
├── .jscsrc ............................ // Coding convention rules
├── .jshintrc .......................... // Checks applied to the source code
├── .npmignore
├── bower.json ......................... // Bower package manifest
├── CONTRIBUTING.md .................... // Instructions for others to contribute
├── Gruntfile.js ....................... // Grunt tasks definitions
├── karma.conf.js ...................... // Used by Karma CLI only (not grunt)
├── LICENSE-XXX ........................ // License(s) file(s)
├── myplugin.jquery.json ............... // jQuery plugin package manifest
├── package.json ....................... // npm package manifest
└── README.md .......................... // README file of your plugin
```

Then you have to run `npm install` to install all required dependencies and you're done !

Now that you have a ready-to-use jQuery boilerplate you can start developing your own plugin (and test it) with the help of the following available `grunt` commands:

- `grunt build` to produce the distrib version of your plugin and minified one.
- `grunt test` to run unit tests on the distrib version of your plugin (see [QUnit][]).
- `grunt lint` to ensure the source file of your plugin is OK (see [JSHint][]) and respect appropriate coding convention rules (see [JSCS][]).
- `grunt watch` to automatically verify your code is OK, build it and test it every time your source files or test files are modified.
- `grunt` to verify your code is OK, build it and test it.


## Register your plugin

Once your plugin is ready and you published it on GitHub, you can easily register it to npm, bower and also jQuery plugin registries. All the required files are already provided in your project. 

See the following documentations to learn how:

- http://blog.npmjs.org/post/111475741445/publishing-your-jquery-plugin-to-npm-the-quick
- http://plugins.jquery.com/docs/package-manifest/
- https://bower.io/docs/creating-packages/#register

**Note:** The jQuery Plugin Registry is in read-only mode. New plugin releases will not be processed.
jQuery recommends moving to [npm](https://www.npmjs.com/), using ["jquery-plugin"](https://www.npmjs.com/browse/keyword/jquery-plugin) as the keyword in your package.json. See [how to publish into npm registry](https://gist.github.com/coolaj86/1318304).


## Thanks

The present tool is inspired from two projects that I adapted and mixed together to meet my own needs, and finally share it.

- https://github.com/jquery-boilerplate/jquery-boilerplate
- https://github.com/gruntjs/grunt-init-jquery

Thank you very much to everyone involved in these projects and their great work.


## License

The present tool is governed by the CeCILL-C license under French law and complies with the free software distribution rules. You may use, modify and / or redistribute it according to the terms of the CeCILL-C license issued by CEA, CNRS and INRIA at the following address: http://www.cecill.info.