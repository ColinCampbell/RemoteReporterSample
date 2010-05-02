// ==========================================================================
// Project:   Sample
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sample RemoteReporter */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Sample.main = function main() {

  Sample.getPath('mainPage.mainPane').append() ;

  SC.Logger.set('reporter', RemoteReporter.create());
  
  // SC.Logger.log("Hello from the sample side!");

} ;

function main() { Sample.main(); }
