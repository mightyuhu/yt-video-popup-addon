// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function start(tab) {
  chrome.extension.getBackgroundPage().console.log(tab);
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = tab.url.match(regExp);
  if (match&&match[2].length==11){
      chrome.windows.create(
         {
          url:'https://youtube.com/watch_popup?v='+match[2],
          type:'detached_panel'
         },
         function(){});
  }
}

// Set up a click handler so that we can merge all the windows.
chrome.browserAction.onClicked.addListener(start);
