// ==========================================================================
// Project:   Sample - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sample */

// This page describes the main user interface for your application.  
Sample.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'send'.w(),
    
    send: SC.ButtonView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 24 },
      action: "Sample.messageController.send",
      title: "Send a Message"
    })
  })

});
