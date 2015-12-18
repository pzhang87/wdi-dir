# WDI DIR Code Challenge

This is a simple application that queries the OMDB database for movies, displays
additional information on those movies, and allows users to favorite said movies.

## Technologies Used

A simple back-end was provided as part of the challenge, which uses ExpressJS and
Body-Parser. The front-end was written entirely in plain Javascript.

## Installation Instructions

To view locally:

1. Fork and/or clone this repository.
2. Command line: `npm install --save` to install
3. Command Line: `node server.js`
4. Navigate to `localhost:4000` to view the app.

Alternatively, for the deployed version, visit:
```
http://wdi-dir-pz.herokuapp.com/
```

## Discussion/Approach

The core of this challenge seemed to lay in writing the front-end without using
external libraries or frameworks. I broke down the challenge into three components
and attempted to modularize my code as follows:

1. api.js: makes an API call to OMDB and feeds the returned JSON to be rendered
2. movieview.js: generates the HTML and adds it to the page
3. script.js: adds behavior to the page so the user can perform 1 & 2

The intended result is a single page app (which it almost is; see below).

In terms of time spent and the lack of commit messages: I spent about 8-10 hours
on this challenge over the course of three days, working in a different repo for
much of it before deploying. Unfortunately in my attempt to clean up my working
directory, I copied over the necessary files to a new directory and deleted the
old one, not realizing I removed the git repository as well.

With that said - I did not make a substantial number of commits, and would not
have until this very last day. Really wish I would have.

## Additional Features, Known Issues, Other To-Dos:

* Add a 'Toggle Info' button to each movie via CSS classes
* Adding a favorite currently redirects to the blank index, considering options
  like hiding the button + flash message, or collapsing the info, etc.
* General code refactor: apiCall in api.js could take an object instead (to make
  it look more like an AJAX call), event listeners in script.js can be DRY'd up
  since they all need event.preventDefault on their common behavior (object
  constructor?)
* What to do for "N/A" images?
