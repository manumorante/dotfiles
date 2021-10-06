#!/usr/bin/env node

// @raycast.schemaVersion 1
// @raycast.title DS Components
// @raycast.mode fullOutput
// @raycast.refreshTime 24h
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
  'Alert',
  'Anchor',
  'Avatar',
  'Badge',
  'BlogPost',
  'BorderRadius',
  'Button',
  'Colors',
  'Flex',
  'FloatingAlert',
  'Fonts',
  'IconLink',
  'Image',
  'Input',
  'Link',
  'LinkList',
  'List',
  'Opacity',
  'Paragraph',
  'Popover',
  'Select',
  'Shadows',
  'SimpleCard',
  'Spacing',
  'Tag',
  'TextBlock',
  'Title',
  'Tooltip'
  
]

console.log(c('Active components\n', Green))

components.map(component => {
  let name = fixText(component, 25)
  console.log(`${name} ${url}/${component}`)
})
