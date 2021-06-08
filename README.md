# Stand Up Memory Helper

!! REMOVED FROM STORE !!

This extension is no longer working due to the recent update of Google Meet.

## A google Chrome Extension

A working memory aid for Google Meet™

### Description

A tool to help remember who has spoken in a stand-up or meeting.

This extension adds a list of attendees to any Google Meet™ and allows you to cross names out when they have spoken. This means in large stand-ups you don't need to rely on your working memory to know who is yet to speak

### Implementation

This extension utiilises Google Chrome's API to execute Javascript and CSS scripts in the browser when a user clicks on the extension.

The script searches the screen when the User is connected to a Google Meet™ meeting, and collects the attendees names, adding them to a list on screen. Each name can be clicked to mark them as crossed-out. A mutation observer is set up, listening for changes to the DOM to indicate a new attendee has joined, and a new button is added for the new attendee.

The Javascript is very simple - I found there to be some limitations with using ES6 in the script, and some of the resources I found recommended using for-loops rather than forEach etc.

### Get the extension

~~To download the extension, head to the [Chrome store](https://chrome.google.com/webstore/detail/stand-up-memory-helper/bbkdmgbcgmolkchkahbenkdhajcdopjb/related)~~

Removed due to breaking update

### Run locally

- Download the repo
- head to the chrome [extension manager](chrome://extensions/) ensuring you are in developer mode by clicking the Chrome menu icon and select Extensions from the Tools menu. Ensure that the "Developer mode" checkbox in the top right-hand corner is checked.
- Go to 'Load Unpacked' and load your project. This will add the extension to your browser locally, and you can refresh and see any errors.
