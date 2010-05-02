// ==========================================================================
// Project:   Sample.messageController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sample */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Sample.messageController = SC.ObjectController.create(
/** @scope Sample.messageController.prototype */ {

  hellos: ["Hello", "Haai", "Ola", "Aloha", "Ciao", "Hallo"],
  
  send: function() {
    var hellos = this.get('hellos');
    var message = hellos[Math.floor(Math.random() * hellos.length)];
    SC.Logger.log(message);
  }

}) ;
