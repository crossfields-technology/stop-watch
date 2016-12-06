'use strict'

Polymer({

  is: 'crossfields-stop-watch',

  properties: {
    mode: {
      type: String,
      value: 'stopwatch',
      notify: true
    },

    time: {
      type: String,
      value: 0,
      notify: true
    },

    autostart: {
      type: Boolean,
      value: false,
      notify: true
    },

    active: {
      type: Boolean,
      value: false,
      notify: true
    },

    offset: {
      type: Number,
      value: 0
    },

    timer: {
      type: Boolean,
      value: false
    },

    startTime: {
      type: Date,
      value: null
    },

    pauseTime: {
      type: Date,
      value: null
    },

    hideMilliseconds: {
      type: Boolean,
      value: true
    },

    isPaused: {
      type: Boolean,
      value: true,
      notify: true
    }
  },

  listeners: {
    'start-stopwatch': 'start',
    'stop-stopwatch': 'stop',
    'reset-stopwatch': 'reset'
  },

  start: function() {
    this.active = true;

    if(!this.active) {
      this.startTime = Date.now();
    }
    if(this.isPaused){
      this.startTime = Math.floor(Date.now() - this.pauseTime);
    }

    this.isPaused = false;
    switch (this.mode){
      case 'stopwatch':
          this.fire('onWatchStart', {startTime: this.startTime});
          this.uptick();
          break;
      case 'timer':
          this.fire('onTimerStart', {startTime: this.startTime});
          this.downtick();
          break;
      default:
          break;
    }
  },

  stop: function () {
    this.active = false;
    this.isPaused = true;
    return false;
  },

  uptick: function () {
    var elapsed = Math.floor((Date.now() - this.startTime));
    if(!this.active) {
      this.fire('onWatchStop', {duration:elapsed} )
      return false;
    }
    this.fire("tick", {elapsed:elapsed});
    this.set('time', this.setTime(elapsed + this.offset));
    this.async(this.uptick, 100);
  },

  downtick: function () {
    var elapsed = Math.floor((Date.now() - this.startTime)),
        remaining = this.offset - elapsed;

    if(!this.active) {
      this.fire('onTimerStop', {duration:elapsed, remaining: remaining} )
      return false;
    }
    if(remaining <= 0) {
      this.set('time', this.setTime(0));
      this.stop();
      return false;
    } else {
      this.set('time', this.setTime(remaining));
      this.async(this.downtick, 100);
    }
  },

  pause: function() {
    this.pauseTime = Math.floor((Date.now() - this.startTime));
    this.active = false;
    this.isPaused = true;
  },

  resume: function() {
    if(!this.active && !this.pauseTime) {
      this.start();
      return;
    }
    this.start();
  },

  reset: function() {
    this.fire('onReset');
    this.active = false;
    this.isPaused = true;
    this.time = this.setTime(this.offset);
  },

  setTime: function (duration) {
    try {
      var s = parseInt((duration / 1000) % 60),
          m = parseInt((duration / (1000 * 60)) % 60),
          ms = String(duration).slice(-3);
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;

      var displayTime;

      if (this.hideMilliseconds) {
        displayTime = m + ":" + s;
      } else {
        displayTime = m + ":" + s + "." + ms;
      }
      return displayTime;
    } catch(e){
      alert(e);
    }
  },

  ready: function() {
    this.reset();
    if(this.autostart === true) {
        this.start();
    }
  }

});
