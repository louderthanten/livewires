/*
 * livewires
 * http://www.livewires.io
 *
 * Copyright (c) 2014 Travis Gertz
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: {
          'httpdocs/css/app.css': 'source/scss/app.scss',
          'httpdocs/css/guide.css': 'source/scss/pages/guide.scss'
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'httpdocs/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'httpdocs/css/',
        ext: '.min.css'
      }
    },
    coffee: {
      compile: {
        files: {
          'httpdocs/js/app.js': ['source/coffee/{,*/}*.coffee'],
        }
      },
      tasks: ['uglify']
    },
    uglyfy: {
      js: {
        files: {
          'httpdocs/js/vendor.min.js': 'source/vendor/**/*.js',
          'httpdocs/js/app.min.js': 'httpdocs/js/app.js'
        },
        options: {
          preserveComments: false
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: [ 'last 2 versions','> 5%']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'httpdocs/css/*.css',
        dest: 'httpdocs/css/'
      }
    },
    watch: {
      sass: {
        files: [ '**/*.scss'],
        tasks: ['sass','autoprefixer','cssmin']
      },
      coffee: {
        files: [ '**/*.coffee' ],
        tasks: ['coffee']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: { livereload: true },
        files: ['httpdocs/**/*']
      }
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            'source',
            'httpdocs'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            'source'
          ]
        }
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    livewires: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123'],
        },
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!',
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123'],
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'livewires', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'autoprefixer']);

  grunt.registerTask('server', ['connect', 'watch']);

  // Watch tasks
  grunt.loadNpmTasks('grunt-contrib-watch');

};
