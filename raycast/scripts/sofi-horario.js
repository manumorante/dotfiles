#!/usr/bin/env node

// @raycast.schemaVersion 1
// @raycast.title aaa
// @raycast.mode fullOutput
// @raycast.packageName Manu Scripts
// @raycast.icon 🌸

const fs = require('fs')
const pdf = require('pdf-parse') // https://gitlab.com/autokent/pdf-parse

const FILE_PATH = '/Users/manu/Downloads/hamman.pdf'
let dataBuffer = fs.readFileSync(FILE_PATH)

// Configuración

/***********************************
  Example
  Turno   Lunes       Martes
  10:00   (A) Maria   (AE) Juan
          (M) Sofia   (AE) Pepe
          TMMD        TMMD
  12:00   (M) Pepe    (AE) Sofia
          (M) Sofia   (AE) Maria
          TMMD        TMMD
*************************************/

// const PERSON      = 'Katia'
const PERSON      = 'Sofia'
const TURNS       = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
const DAYS_NAME   = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const DAY_BREAK   = 'TMMD'
let   DATA        = ''

// Load PDF file and save text data as global
pdf(dataBuffer).then(function(data) {
  DATA = data.text

	init()
})

// Return array
function _toArray(obj) {
  if (Array.isArray(obj)) {
    return obj
  } else {
    return obj.split('\n')
  }
}

// Get turn by id info for all days
function _getTurn(turnID) {
  return DATA.split(':00')[turnID]
}

// Get days
function _getDays(turn) {
  return turn.split(DAY_BREAK)
}

// Get persons form a day by id
function _getPersons(days, dayID){
  return _toArray(days[dayID-1])
}

// Get days from row
// Use example:
//   Lunes (1) a las 10:00 (1)
//   getDay(1, 1)
function getDay(dayID, turnID, all = false) {
  let turn = _getTurn(turnID)
  let days = _getDays(turn)
  let persons = _getPersons(days, dayID)
  
  // If `all` is true then show all people
  // if not then filter by `person`
  persons = persons.filter((x) => {
    return all || x.includes(PERSON)
  })

  return persons
}


function work(persons) {
  return Boolean(getDay(dayID, turnID).length)
}

function printDaysAll(){
  DAYS_NAME.forEach((day, dayID) => {
    dayID = dayID + 1
    console.log(`${day} ${dayID}`)

    TURNS.forEach((turn, turnID) => {
      turnID = turnID + 1
      console.log(`${turn} ${turnID}`)

      let todos = getDay(dayID, turnID, true)
      let person = getDay(dayID, turnID)

      if(Boolean(person.length)){

      }
    })
    
    console.log(``)
  })
}

function printDays(){
  DAYS_NAME.forEach((day, dayID) => {
    dayID = dayID + 1

    TURNS.forEach((turn, turnID) => {
      turnID = turnID + 1

      let person = getDay(dayID, turnID)

      if(Boolean(person.length)){
        console.log(`${day}`)
        console.log(`${turn}`)
        console.log(``)
      }
    })
    
    console.log(``)
  })
}


// Init
function init() {

  printDays()
  // test()

  // console.log(DATA.split(':00'))

  // DATA.split(':00').forEach((line, index) => {
  //   console.log(`${line} ${index}`)    
  // })
}


function test(){
  console.log(`------------------------------`)
  console.log(`TODOS LOS TRABAJADORES`)
  
  console.log(`Lunes a las 10:00 (TODOS)`)
  console.log(getDay(1, 1, true))
  
  console.log(`Domingo a las 24:00 (TODOS)`)
  console.log(getDay(7, 8, true))
    
  // console.log(`Jueves a las 16:00`)
  // console.log(getDay(4, 4, true))
  
  // console.log(`SOLO ${PERSON}`)
  // console.log(getDay(4, 4))
  console.log(`------------------------------`)  
}