'use strict';

/**
 * WshRemoteError.js
 * This Object spoofs the WshRemoteError Object
 * Properties and methods taken from Microsoft documentation
 * https://msdn.microsoft.com/en-us/library/d02b3e15(v=vs.84).aspx
 */
var WshRemoteError = function() {
    // Default properties
    this.Description    = '';
    this.Line           = 0;
    this.Character      = 0;
    this.Number         = 0;
    this.SourceText     = '';
    this.Source         = '';

	this._name = 'WshRemoteError';
};

WshRemoteError.prototype.toString = function() {
    return this._name;
};

module.exports = WshRemoteError;