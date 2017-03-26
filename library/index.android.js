/**
 * @providesModule RCTBugfender
 * @flow
 */
'use strict';

import { NativeModules } from 'react-native'

const Bugfender = NativeModules.Bugfender;
const PRIORITY = {
  DEBUG: 3,
  ERROR: 6,
  INFO: 4,
  VERBOSE: 2,
  WARN: 5
};
const TAG = 'Bugfender'

module.exports = {
  _reactLog: function(priority, message, tag = null) {
    if (!this.reactLogging) return;

    const logMessage = `${this.tag ? `${this.tag}:` : ''} ${message}`;
    switch (priority) {
      case PRIORITY.ERROR:
        console.error(logMessage);
        break;      
      case PRIORITY.INFO:
        console.info(logMessage);
        break;      
      case PRIORITY.WARN:
        console.warn(logMessage);
        break;
      case PRIORITY.VERBOSE:
      case PRIORITY.DEBUG:
        console.log(logMessage);
        break;
    }    
  },
  _nativeLog: function(priority, message, tag = null) {
    Bugfender.log(priority, tag, message);
  },
  _log: function(priority, message, tag = null) {
    this._nativeLog(priority, message, tag);
    this._reactLog(priority, message, tag);
  },
  reactLogging: false,
  setApiKey: function(apiKey) {
    this._reactLog(`API key: ${apiKey}`, TAG);
    Bugfender.setApiKey(apiKey);
  },
  d: function(message, tag = null) {
    this._log(PRIORITY.DEBUG, message, tag);
  },
  e: function(message, tag = null) {
    this._log(PRIORITY.ERROR, message, tag);
  },
  i: function(message, tag = null) {
    this._log(PRIORITY.INFO, message, tag);
  },
  v: function(message, tag = null) {
    this._log(PRIORITY.VERBOSE, message, tag);
  },
  w: function(message, tag = null) {
    this._log(PRIORITY.WARN, message, tag);
  },  
  sendIssue: function(title, message) {
    this._reactLog(`Sending '${title}: ${message}'`, TAG);
    Bugfender.sendIssue(title, message);
  },
  setDeviceString: function(key,  value) {
    this._reactLog(`Sending '${key}: ${value}'`, TAG);
    Bugfender.setDeviceString(key, value);
  },

  setDeviceInteger: function(key,  value) {
    this._reactLog(`Sending '${key}: ${value}'`, TAG);
    Bugfender.setDeviceInteger(key, value);
  },

  setDeviceBoolean: function(key,  value) {
    this._reactLog(`Sending '${key}: ${value}'`, TAG);
    Bugfender.setDeviceBoolean(key, value);
  },

  setDeviceFloat: function(key,  value) {
    this._reactLog(`Sending '${key}: ${value}'`, TAG);
    Bugfender.setDeviceFloat(key, value);
  },

}
