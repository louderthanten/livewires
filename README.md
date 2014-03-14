# livewires

## Getting Started

Because Live Wires is built using Sass and CoffeeScript, you’re going to need a preprocesser application to render your code into CSS and JavaScript.

[Mixture](http://mixture.io) is above and beyond the best tool we’ve used for this. It’s polished, well documented, and the simplest to set up. The only other software you need is a text editor and browser.

There are a number of pretty good alternatives like <a href="https://incident57.com/codekit/">CodeKit</a> or <a href="http://alphapixels.com/prepros/">Prepros</a> that will also work just fine.

### Easy

This method requires little more than installing Mixture:

#### Step 1

Install [Mixture](http://mixture.io#download).

#### Step 2

Choose Live Wires from the included boilerplates list.

#### Step 3

Save the project and start coding. That’s it.


Once you’re up and running, there are a few settings you may want to customize in in the mixture.json and /models/_global.json files. Read more about that on the [Mixture](http://docs.mixture.io) site.

### Standard

If you’re using a different preprocessor, you have a few more steps, but they’re pretty easy too:

#### Step 1

Create a folder for your project.

#### Step 2

Download or clone Live Wires from the GitHub repository and save the contents in your project folder.

#### Step 3

Point your preferred Sass & CoffeeScript preprocessor app to the project folder.

#### Step 4

Configure the preprocessor to compile /source/scss/ to /httpdocs/css/ and /source/coffee/ to /httpdocs/js/.

#### Step 5

Run the preprocesser and start coding.

Note: You may also want to setup a local MAMP server for this types of install so you can use PHP or other server-side languages to build your templates. In these cases, you’ll want to point your server to the /httpdocs/ directory.

### Advanced

This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install livewires --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('livewires');
```

## The "livewires" task

### Overview
In your project's Gruntfile, add a section named `livewires` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  livewires: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  livewires: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  livewires: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
