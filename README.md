# \<crossfields-stop-watch\>

Polymer 1.0 stopwatch element to display duration.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Element implementation

```
<crossfields-stop-watch></crossfields-stop-watch>
```

## Properties

### autoStart

| Property  | Type      | Default  |
|-----------|-----------|----------|
| autoStart | Boolean   | false    |

autostart the stop watch on load.

```
<crossfields-stop-watch auto-start="true"></crossfields-stop-watch>
```

### hideMilliseconds

| Property         | Type      | Default |
|------------------|-----------|---------|
| hideMilliseconds | Boolean   | true    |

hide milliseconds on the stop watch.

```
<crossfields-stop-watch hide-milliseconds="false"></crossfields-stop-watch>
```

### mode

| Property         | Type      | Default      |
|------------------|-----------|--------------|
| mode             | String    | stopwatch    |

set the mode for the stopwatch.

1. stopwatch
  1. increments the clock forwards.
2. timer
  1. increments the stopwatch backwards from an *offset* millisecond time.

```
<crossfields-stop-watch mode="timer" offset="5000"></crossfields-stop-watch>
<crossfields-stop-watch mode="stopwatch"></crossfields-stop-watch>
```

### offset

| Property         | Type      | Default      |
|------------------|-----------|--------------|
| offset           | Number    | 0            |

offset the clock by now time (calculated by milliseconds (1000 = 1 second)).

```
<crossfields-stop-watch offset="5000"></crossfields-stop-watch>
```


### showActions

| Property         | Type      | Default      |
|------------------|-----------|--------------|
| showActions      | Boolean   | false        |

display the start, stop and rest buttons.

```
<crossfields-stop-watch show-actions="true"></crossfields-stop-watch>
```

### showPause

| Property         | Type      | Default      |
|------------------|-----------|--------------|
| showPause        | Boolean   | false        |

show the pause and resume button next to the stopwatch.

```
<crossfields-stop-watch show-pause="true"></crossfields-stop-watch>
```
