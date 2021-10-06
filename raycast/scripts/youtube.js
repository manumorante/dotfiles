#!/usr/bin/env node

// ABOUT THIS TEMPLATE:
// https://github.com/raycast/script-commands/blob/master/templates/script-command.template.js

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title YouTube
// @raycast.mode silent
// @raycast.packageName Raycast Scripts
//
// Optional parameters:
// @raycast.icon images/youtube.png
// @raycast.argument1 { "type": "text", "placeholder": "Search", "optional": false}
//
// Documentation:
// @raycast.description Write a nice and descriptive summary about your script command here 
// @raycast.author Your name
// @raycast.authorURL An URL for one of your social medias

const { exec } = require('child_process')

// Use destructuring to grab arguments.
// Use slice to start from position 3.
let [query] = process.argv.slice(2)
let uri = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`

exec(`open "${uri}"`)