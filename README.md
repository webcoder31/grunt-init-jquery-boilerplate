# grunt-init-jquery-boilerplate

> Get a ready-to-use jQuery plugin boilerplate in less than a minute and start developing right now!

<!-- Link's sortcuts -->
[grunt]: http://gruntjs.com/
[grunt-init]: http://gruntjs.com/project-scaffolding
[karma]: http://karma-runner.github.io/
[QUnit]: https://qunitjs.com/
[JSHint]: http://jshint.com/
[JSCS]: http://jscs.info/

![grunt-init-jquery-boilerplate](./.github/README.jpg?raw=true "grunt-init-jquery-boilerplate")

**grunt-init-jquery-boilerplate** is a **[grunt-init][] template** that supply a boilerplate to develop a **jQuery plugin** in an easy way. 

The purpose of this tool is to provide everything needed to:

- Quickly get an operating environment for developing your own jQuery plugin via [grunt-init][] CLI.
- Ensure good coding practices (code checking and code linting with [JSCS][] and [JSHint][]).
- Encourage reliability and maintainability (unit testing with [QUnit][] and [Karma][]).
- Facilitate sharing (**GitHub** ready, manifest files for **npm**, **bower** and **jQuery plugins** registries).


## Summary

<!-- MarkdownTOC autolink="true" link_prefix="user-content-" uri_encoding="false" autoanchor="false" bracket="round" markdown_preview="github"-->

- [Requirements](#user-content-requirements)
- [Installation](#user-content-installation)
- [Usage](#user-content-usage)
    - [Scaffolding your plugin boilerplate](#user-content-scaffolding-your-plugin-boilerplate)
    - [Coding, checking, building and testing your plugin](#user-content-coding-checking-building-and-testing-your-plugin)
    - [Registering your plugin](#user-content-registering-your-plugin)
- [Contributing](#user-content-contributing)
- [History](#user-content-history)
- [Thanks](#user-content-thanks)
- [License](#user-content-license)

<!-- /MarkdownTOC -->


## Requirements

In order, to use **grunt-init-jquery-boilerplate** you must have [Node.js](https://nodejs.org), [npm](https://www.npmjs.com) and [git](https://git-scm.com/) installed on your operating system.


## Installation

If you haven't already done so, install [grunt-init][]. It's a **grunt** tool dedicated to projects scaffolding.

```
npm install -g grunt-init
```

Once **grunt-init** is installed, place the **grunt-init-jquery-boilerplate** template in the following folder `.grunt-init/` of your home directory. It's recommended that you use **git** to clone this template into that directory, as follows.

All OS (excepted Windows):
```
git clone https://github.com/webcoder31/grunt-init-jquery-boilerplate.git ~/.grunt-init/jquery-boilerplate
```

Windows OS:
```
git clone https://github.com/webcoder31/grunt-init-jquery-boilerplate.git %USERPROFILE%\.grunt-init\jquery-boilerplate
```

From now on, you will no longer need to do this again to use the scaffolding tool with the supplied template. Both will be directly available and we will see how to use them in the next topic.

## Usage

### Scaffolding your plugin boilerplate

At the command-line, move into an empty directory, run this command and follow the prompts.

```
grunt-init jquery-boilerplate
```

Once done, if for example you named your plugin project "**myplugin**" when prompted, you've got a ready-to-use project with the following basic structure:

```
├── .github/
│   ├── CONTRIBUTING.md ................ // Instructions for others to contribute to your plugin
│   ├── README.jpg ..................... // README illustration for your plugin
│   └── README.psd ..................... // Photoshop source file of README illustration
├── demo/
│   └── index.html ..................... // Demo page of your plugin (based on the source file)
├── dist/
│   ├── jquery.myplugin.js ............. // Distribution version of your plugin
│   └── jquery.myplugin.min.js ......... // Minified distribution version of your plugin
├── src/
│   └── jquery.myplugin.js ............. // Source file of your plugin
├── test/
│   └── spec/
│   │   └── jquery.myplugin.spec.js .... // Unit test specifications for your plugin
│   └── sandbox.js ..................... // A sandbox used to run tests
├── .editorconfig
├── .gitignore
├── .jscsrc ............................ // Coding convention rules
├── .jshintrc .......................... // Checks applied to the source code
├── .npmignore
├── bower.json ......................... // Bower package manifest
├── Gruntfile.js ....................... // Grunt tasks definitions
├── karma.conf.js ...................... // Karma configuration (used by Karma CLI only, not grunt)
├── LICENSE-XXX ........................ // License(s) file(s)
├── myplugin.jquery.json ............... // jQuery plugin package manifest
├── package.json ....................... // npm package manifest
└── README.md .......................... // README file of your plugin
```

Then you have to run `npm install` to install project dependencies. This wiil create a folder `node_modules` containing all required dependencies at the root of your project. 


### Coding, checking, building and testing your plugin

Now that you have a ready-to-use jQuery boilerplate you can start developing your own plugin and test it with the help of the following available `grunt` commands:

- `grunt build` to produce the distribution version of your plugin and the minified one.
- `grunt test` to run unit tests on the distrib version of your plugin (see [QUnit][]).
- `grunt lint` to ensure the source code of your plugin is OK (see [JSHint][]) and it respect coding convention (see [JSCS][]).
- `grunt watch` to automatically verify your code is OK, build it and test it every time source or test files are modified.
- `grunt` to verify your code is OK, build it and test it.


### Registering your plugin

Once your plugin is ready and you published it on GitHub, you can easily register it to npm, bower and also jQuery plugin registries. All the required files are already provided in your project. 

See the following documentations to learn how:

- [How to publish into npm registry](https://gist.github.com/coolaj86/1318304/)
- [Publishing your jQuery plugin to npm, the quick and dirty way](http://blog.npmjs.org/post/111475741445/)
- [Creating Bower packages](https://bower.io/docs/creating-packages/)
- [jQuery Plugin Package Manifest Specification](http://plugins.jquery.com/docs/package-manifest/)

**Note:** The jQuery Plugin Registry is in read-only mode. New plugin releases will not be processed.
jQuery recommends moving to [npm](https://www.npmjs.com/), using ["jquery-plugin"](https://www.npmjs.com/browse/keyword/jquery-plugin) as the keyword in your package.json. See [how to publish into npm registry](https://gist.github.com/coolaj86/1318304).


## Contributing

You can report issues or suggest improvments [here](https://github.com/webcoder31/grunt-init-jquery-boilerplate/issues).

Want to submit your own feature? Please, look at [CONTRIBUTING.md](https://github.com/webcoder31/grunt-init-jquery-boilerplate/blob/master/.github/CONTRIBUTING.md) for a guideline.


## History

Check [Releases](https://github.com/webcoder31/grunt-init-jquery-boilerplate/releases) for detailed changelog.


## Thanks

The present tool is inspired from two projects that I adapted and mixed together to meet my own needs, and finally share it.

- https://github.com/jquery-boilerplate/jquery-boilerplate
- https://github.com/gruntjs/grunt-init-jquery

Thank you very much to everyone involved in these projects and their great work.


## License

The present tool is governed by the CeCILL-C license under French law and complies with the free software distribution rules. You may use, modify and / or redistribute it according to the terms of the CeCILL-C license issued by CEA, CNRS and INRIA at the following address: http://www.cecill.info.