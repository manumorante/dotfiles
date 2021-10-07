#!/usr/bin/env node

// @raycast.schemaVersion 1
// @raycast.title DS Predencio
// @raycast.mode fullOutput
// @raycast.packageName Raycast Scripts
//
// Optional parameters
// @raycast.icon 🧽

Black = 30
Red = 31
Green = 32
Yellow = 33
Blue = 34
Magenta = 35
Cyan = 36
White = 97

// Color
function c(text, color) {
  return `\x1b[${color}m${text}\x1b[0m`
}

// Limit string length
function fixText(text, length) {
  text = `${text}                              `
  return text.substring(0, length)
}

const url = 'https://frontend-ds.domestika.org'

const components = [
'Buttons',
'Colors',
'Icons',
'Spacing',
'Text',
'Accordion',
'Activities',
'Alert J Closable With Image',
'Alert J Closable With User',
'Alert J Closable',
'Alert J Collapsible With User',
'Alert J Collapsible',
'Alert',
'Avatar',
'Avatar Text',
'Badge',
'Banner',
'Banner Square',
'Banner Sticky',
'Box',
'Circle',
'Collapsible',
'Countdown',
'Course Card',
'Course Card Component',
'Course Card Component Old',
'Dropdown Filter Page',
'Faqs',
'Featured List',
'Input Copy To Clipboard',
'Input Email Autocomplete',
'Input Password Show Hide',
'Input',
'Modal',
'Paper',
'Placeholder',
'Plans',
'Plans Card Component',
'Popover',
'Portlet',
'Price',
'Price Tag',
'Shadow',
'Share Buttons',
'Share',
'Status Indicator',
'Tag',
'Toggle',
'Tooltip',
'Fetch',
'Image Preload',
'Iterable Unsubscribe',
'Qr Code'
]

console.log(c('Active components\n', Green))

components.map(component => {
  let name = fixText(component, 25)
  console.log(`${name} ${url}/${component}`)
})
