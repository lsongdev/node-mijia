'use strict';
const EventEmitter = require('events');
const discovery = require('./lib/discovery');

class MiHome extends EventEmitter {
  /**
   * Browse for devices available on the network. Will not automatically
   * connect to them.
   */
  static browse(options) {
    return new discovery.Browser(options || {});
  }
  /**
   * Get access to all devices on the current network. Will find and connect to
   * devices automatically.
   */
  static devices(options) {
    return new discovery.Devices(options || {});
  }
}

/**
 * Get information about the models supported. Can be used to extend the models
 * supported.
 */
MiHome.models = require('./lib/models');

/**
 * Resolve a device from the given options.
 *
 * Options:
 * * `address`, **required** the address to the device as an IP or hostname
 * * `port`, optional port number, if not specified the default 54321 will be used
 * * `token`, optional token of the device
 */
MiHome.device = require('./lib/connectToDevice');

/**
 * Extract information about a device from its hostname on the local network.
 */
MiHome.infoFromHostname = require('./lib/infoFromHostname');

// expose
module.exports = MiHome;
