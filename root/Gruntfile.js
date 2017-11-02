module.exports = function( grunt ) {

    // Configure tasks.
    grunt.initConfig( {

        // Import package manifest.
        pkg: grunt.file.readJSON( "package.json" ),

        // Meta definitions.
        meta: {
            pluginFilename: "jquery.<%= pkg.name %>",
            banner: "/*\n" +
                " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
                " *  <%= pkg.description %>\n" +
                " *  <%= pkg.homepage %>\n" +
                " *\n" +
                " *  Made by <%= pkg.author.name %>\n" +
                " *  Under <%= pkg.license %> License\n" +
                " */\n"
        },

        // Concat definitions.
        concat: {
            options: {
                banner: "<%= meta.banner %>"
            },
            dist: {
                src: [ "src/<%= meta.pluginFilename %>.js" ],
                dest: "dist/<%= meta.pluginFilename %>.js"
            }
        },

        // Lint definitions.
        jshint: {
            files: [ "src/<%= meta.pluginFilename %>.js", "test/**/*" ],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        jscs: {
            src: "src/**/*.js",
            options: {
                config: ".jscsrc"
            }
        },

        // Minify definitions.
        uglify: {
            dist: {
                src: [ "dist/<%= meta.pluginFilename %>.js" ],
                dest: "dist/<%= meta.pluginFilename %>.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

        // Karma test runner.
        karma: {

            // Options.
            options: {
                files: [
                    'node_modules/jquery/dist/jquery.js',
                    'dist/<%= meta.pluginFilename %>.min.js',
                    'test/sandbox.js',
                    'test/spec/*'
                ],
                frameworks: [ 'qunit' ],
                reporters: [ 'progress' ],
                browsers: [ 'PhantomJS' ],
                singleRun: true,
                autoWatch: false
            },

            // Start server in daemon mode.
            daemon: {
                singleRun: false,
                background: true
            },

            // Unit tests.
            unit: {
                singleRun: true
            }
        },

        // Watch for changes to source (call 'grunt watch').
        watch: {

            // On watch start, launch Karma server as daemon.
            startup: {
                files: [], // This is redundant, but we get an error if not specifying files.
                tasks: [ 'karma:daemon:start' ],
                options: {
                    atBegin: true,
                    spawn: false
                }
            },
            files: [ "src/*", "test/**/*" ],
            tasks: [ "default" ]
        }

    } );

    // Load npm task modules.
    grunt.loadNpmTasks( "grunt-contrib-concat" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-jscs" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-karma" );

    // Register defined tasks.
    grunt.registerTask( "lint", [ "jshint", "jscs" ] );
    grunt.registerTask( "build", [ "concat", "uglify" ] );
    grunt.registerTask( "test", [ "karma:unit:start" ] );
    grunt.registerTask( "default", [ "jshint", "build", "test" ] );
};
