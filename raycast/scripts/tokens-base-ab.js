#!/usr/bin/env node

// @raycast.schemaVersion 1
// @raycast.title Tokens: Base AB
// @raycast.mode fullOutput
// @raycast.refreshTime 24h
// @raycast.packageName Raycast Scripts
//
// Optional parameters
// @raycast.icon 🧽

// Black = 30
// Red = 31
// Green = 32
// Yellow = 33
// Blue = 34
// Magenta = 35
// Cyan = 36
// White = 97

function c(text) {
    return `\x1b[32m${text}\x1b[0m`
}

// SIZES
console.log(
`
.ai:baseline { align-items: baseline; }
.ai:center { align-items: center; }
.ai:flex-end { align-items: flex-end; }
.ai:flex-start { align-items: flex-start; }
.ap:none { appearance: none; }
.as:baseline { align-self: baseline; }
.as:center { align-self: center; }
.as:flex-end { align-self: flex-end; }
.as:flex-start { align-self: flex-start; }
.b-2xl { bottom: var(--size-2xl); }
.b-3xl { bottom: var(--size-3xl); }
.b-4xl { bottom: var(--size-4xl); }
.b-5xl { bottom: var(--size-5xl); }
.b-l { bottom: var(--size-l); }
.b-m { bottom: var(--size-m); }
.b-s { bottom: var(--size-s); }
.b-xl { bottom: var(--size-xl); }
.b-xs { bottom: var(--size-xs); }
.b-xxs { bottom: var(--size-xxs); }
.b-xxxs { bottom: var(--size-xxxs); }
.b:none { bottom: var(--size-none); }
.bd:none { border: none; }
.bdb:none { border-bottom: 0; }
.bdbc-neutral-500 { border-bottom-color: var(--color-neutral-500); }
.bdbs:solid { border-bottom-style: solid; }
.bdbw-xxxxs { border-bottom-width: var(--size-xxxxs); }
.bdc-error-100 { border-color: var(--color-error-100); }
.bdc-error-200 { border-color: var(--color-error-200); }
.bdc-error-300 { border-color: var(--color-error-300); }
.bdc-error-400 { border-color: var(--color-error-400); }
.bdc-error-500 { border-color: var(--color-error-500); }
.bdc-neutral { border-color: var(--color-neutral); }
.bdc-neutral-100 { border-color: var(--color-neutral-100); }
.bdc-neutral-200 { border-color: var(--color-neutral-200); }
.bdc-neutral-300 { border-color: var(--color-neutral-300); }
.bdc-neutral-400 { border-color: var(--color-neutral-400); }
.bdc-neutral-500 { border-color: var(--color-neutral-500); }
.bdc-neutral-600 { border-color: var(--color-neutral-600); }
.bdc-neutral-700 { border-color: var(--color-neutral-700); }
.bdc-neutral-900 { border-color: var(--color-neutral-900); }
.bdc-primary-100 { border-color: var(--color-primary-100); }
.bdc-primary-200 { border-color: var(--color-primary-200); }
.bdc-primary-300 { border-color: var(--color-primary-300); }
.bdc-primary-400 { border-color: var(--color-primary-400); }
.bdc-primary-500 { border-color: var(--color-primary-500); }
.bdc-success-100 { border-color: var(--color-success-100); }
.bdc-success-200 { border-color: var(--color-success-200); }
.bdc-success-300 { border-color: var(--color-success-300); }
.bdc-success-400 { border-color: var(--color-success-400); }
.bdc-success-500 { border-color: var(--color-success-500); }
.bdl:none { border-left: 0; }
.bdr:none { border-right: 0; }
.bdrs-half { border-radius: var(--size-half); }
.bdrs-m { border-radius: var(--size-xs); }
.bdrs-s { border-radius: var(--size-xxs); }
.bdrs-xs { border-radius: var(--size-xxxs); }
.bdrs:unset { border-radius: unset; }
.bds:solid { border-style: solid; }
.bdt:none { border-top: 0; }
.bdw-xxxs { border-width: var(--size-xxxs); }
.bdw:1 { border-width: 1px; }
.bg:none { background: none; }
.bgc-[transparent blue neutral primary secondary success white]-[100-500]
.bgi-caret-down-l { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='18' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' /%3E%3C/svg%3E"); background-position: right var(--size-m) top 14px; }
.bgi-caret-down-l-neutral-600 { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='18' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='#CBCBCB' strokeLinecap='round' strokeLinejoin='round' /%3E%3C/svg%3E"); background-position: right var(--size-m) top 14px; }
.bgi-caret-down-m { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='18' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' /%3E%3C/svg%3E"); background-position: right var(--size-xs) top 9px; }
.bgi-caret-down-m-neutral-600 { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='18' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='#CBCBCB' strokeLinecap='round' strokeLinejoin='round' /%3E%3C/svg%3E"); background-position: right var(--size-xs) top 9px; }
.bgpx-2xl { background-position-x: var(--size-2xl); }
.bgpx-3xl { background-position-x: var(--size-3xl); }
.bgpx-4xl { background-position-x: var(--size-4xl); }
.bgpx-5xl { background-position-x: var(--size-5xl); }
.bgpx-l { background-position-x: var(--size-l); }
.bgpx-m { background-position-x: var(--size-m); }
.bgpx-s { background-position-x: var(--size-s); }
.bgpx-xl { background-position-x: var(--size-xl); }
.bgpx-xs { background-position-x: var(--size-xs); }
.bgpx-xxs { background-position-x: var(--size-xxs); }
.bgpx-xxxs { background-position-x: var(--size-xxxs); }
.bgpx:center { background-position-x: center; }
.bgpx:left { background-position-x: left; }
.bgpx:right { background-position-x: right; }
.bgpy-2xl { background-position-y: var(--size-2xl); }
.bgpy-3xl { background-position-y: var(--size-3xl); }
.bgpy-4xl { background-position-y: var(--size-4xl); }
.bgpy-5xl { background-position-y: var(--size-5xl); }
.bgpy-l { background-position-y: var(--size-l); }
.bgpy-m { background-position-y: var(--size-m); }
.bgpy-s { background-position-y: var(--size-s); }
.bgpy-xl { background-position-y: var(--size-xl); }
.bgpy-xs { background-position-y: var(--size-xs); }
.bgpy-xxs { background-position-y: var(--size-xxs); }
.bgpy-xxxs { background-position-y: var(--size-xxxs); }
.bgpy:bottom { background-position-y: bottom; }
.bgpy:center { background-position-y: center; }
.bgpy:top { background-position-y: top; }
.bgr:no-repeat { background-repeat: no-repeat; }
.bgsz-2xl { background-size: var(--size-2xl); }
.bgsz-3xl { background-size: var(--size-3xl); }
.bgsz-4xl { background-size: var(--size-4xl); }
.bgsz-5xl { background-size: var(--size-5xl); }
.bgsz-l { background-size: var(--size-l); }
.bgsz-m { background-size: var(--size-m); }
.bgsz-s { background-size: var(--size-s); }
.bgsz-xl { background-size: var(--size-xl); }
.bgsz-xs { background-size: var(--size-xs); }
.bgsz-xxs { background-size: var(--size-xxs); }
.bgsz-xxxs { background-size: var(--size-xxxs); }
.bgsz:contain { background-size: contain; }
.bgsz:cover { background-size: cover; }
.bxo:horizontal { -webkit-box-orient: horizontal; }
.bxo:vertical { -webkit-box-orient: vertical; }
.bxsh-error-500 { box-shadow: var(--color-error-500) 0 0 0 1px; }
.bxsh-l { box-shadow: var(--color-neutral-op-16) 0 4px 32px 0; }
.bxsh-m { box-shadow: var(--color-neutral-op-12) 0 4px 16px 0; }
.bxsh-neutral { box-shadow: var(--color-neutral) 0 0 0 1px; }
.bxsh-neutral-100 { box-shadow: var(--color-neutral-100) 0 0 0 1px; }
.bxsh-neutral-200 { box-shadow: var(--color-neutral-200) 0 0 0 1px; }
.bxsh-neutral-300 { box-shadow: var(--color-neutral-300) 0 0 0 1px; }
.bxsh-neutral-400 { box-shadow: var(--color-neutral-400) 0 0 0 1px; }
.bxsh-neutral-500 { box-shadow: var(--color-neutral-500) 0 0 0 1px; }
.bxsh-neutral-600 { box-shadow: var(--color-neutral-600) 0 0 0 1px; }
.bxsh-neutral-700 { box-shadow: var(--color-neutral-700) 0 0 0 1px; }
.bxsh-neutral-800 { box-shadow: var(--color-neutral-800) 0 0 0 1px; }
.bxsh-neutral-900 { box-shadow: var(--color-neutral-900) 0 0 0 1px; }
.bxsh-primary-100 { box-shadow: var(--color-primary-100) 0 0 0 1px; }
.bxsh-primary-200 { box-shadow: var(--color-primary-200) 0 0 0 1px; }
.bxsh-primary-300 { box-shadow: var(--color-primary-300) 0 0 0 1px; }
.bxsh-primary-400 { box-shadow: var(--color-primary-400) 0 0 0 1px; }
.bxsh-primary-500 { box-shadow: var(--color-primary-500) 0 0 0 1px; }
.bxsh-s { box-shadow: var(--color-neutral-op-08) 0 4px 8px 0; }
.bxsh-secondary-100 { box-shadow: var(--color-secondary-100) 0 0 0 1px; }
.bxsh-secondary-200 { box-shadow: var(--color-secondary-200) 0 0 0 1px; }
.bxsh-secondary-300 { box-shadow: var(--color-secondary-300) 0 0 0 1px; }
.bxsh-secondary-400 { box-shadow: var(--color-secondary-400) 0 0 0 1px; }
.bxsh-secondary-500 { box-shadow: var(--color-secondary-500) 0 0 0 1px; }
.bxsh-solid { box-shadow: var(--color-neutral-100) 0 0 0 2px, var(--color-black) 0 0 0 4px; }
.bxsh-solid-negative { box-shadow: var(--color-neutral-100) 0 0 0 1px, var(--color-black) 0 0 0 3px, var(--color-neutral-100) 0 0 0 5px; }
.bxsh-success-500 { box-shadow: var(--color-success-500) 0 0 0 1px; }
.bxsh-tertiary-100 { box-shadow: var(--color-tertiary-100) 0 0 0 1px; }
.bxsh-tertiary-200 { box-shadow: var(--color-tertiary-200) 0 0 0 1px; }
.bxsh-tertiary-300 { box-shadow: var(--color-tertiary-300) 0 0 0 1px; }
.bxsh-tertiary-400 { box-shadow: var(--color-tertiary-400) 0 0 0 1px; }
.bxsh-tertiary-500 { box-shadow: var(--color-tertiary-500) 0 0 0 1px; }
.bxsh-thick-error-500 { box-shadow: var(--color-error-500) 0 0 0 2px; }
.bxsh-thick-neutral { box-shadow: var(--color-neutral) 0 0 0 2px; }
.bxsh-thick-success-500 { box-shadow: var(--color-success-500) 0 0 0 2px; }
.bxz:border-box { box-sizing: border-box; }
.bxz:content-box { box-sizing: border-box; }
.c-black { color: var(--color-black); }
.c-blue-100 { color: var(--color-blue-100); }
.c-blue-200 { color: var(--color-blue-200); }
.c-blue-300 { color: var(--color-blue-300); }
.c-blue-400 { color: var(--color-blue-400); }
.c-blue-500 { color: var(--color-blue-500); }
.c-error-100 { color: var(--color-error-100); }
.c-error-200 { color: var(--color-error-200); }
.c-error-300 { color: var(--color-error-300); }
.c-error-400 { color: var(--color-error-400); }
.c-error-500 { color: var(--color-error-500); }
.c-neutral { color: var(--color-neutral); }
.c-neutral-100 { color: var(--color-neutral-100); }
.c-neutral-200 { color: var(--color-neutral-200); }
.c-neutral-300 { color: var(--color-neutral-300); }
.c-neutral-400 { color: var(--color-neutral-400); }
.c-neutral-500 { color: var(--color-neutral-500); }
.c-neutral-600 { color: var(--color-neutral-600); }
.c-neutral-700 { color: var(--color-neutral-700); }
.c-neutral-800 { color: var(--color-neutral-800); }
.c-neutral-900 { color: var(--color-neutral-900); }
.c-primary-100 { color: var(--color-primary-100); }
.c-primary-200 { color: var(--color-primary-200); }
.c-primary-300 { color: var(--color-primary-300); }
.c-primary-400 { color: var(--color-primary-400); }
.c-primary-500 { color: var(--color-primary-500); }
.c-secondary-100 { color: var(--color-secondary-100); }
.c-secondary-200 { color: var(--color-secondary-200); }
.c-secondary-300 { color: var(--color-secondary-300); }
.c-secondary-400 { color: var(--color-secondary-400); }
.c-secondary-500 { color: var(--color-secondary-500); }
.c-success-100 { color: var(--color-success-100); }
.c-success-200 { color: var(--color-success-200); }
.c-success-300 { color: var(--color-success-300); }
.c-success-400 { color: var(--color-success-400); }
.c-success-500 { color: var(--color-success-500); }
.c-transparent { color: var(--color-transparent); }
.c-white { color: var(--color-white); }
.colmg-l { column-gap: var(--size-l); }
.colmg-m { column-gap: var(--size-m); }
.colmg-s { column-gap: var(--size-s); }
.colmg-xl { column-gap: var(--size-xl); }
.colmg-xs { column-gap: var(--size-xs); }
.colmg:none { column-gap: none; }
.cur:default { cursor: default; }
.cur:pointer { cursor: pointer; }
.cur:text { cursor: text; }
.cur:unset { cursor: unset; }
.d:-webkit-box { display: -webkit-box; }
.d:block { display: block; }
.d:flex { display: flex; }
.d:inline { display: inline; }
.d:inline-block { display: inline-block; }
.d:inline-flex { display: inline-flex; }
.d:none { display: none; }
.ff-sf-pro { font-family: var(--font-family); line-height: 1.5; word-spacing: 0; letter-spacing: 0; }
.focus$bdc-error-500:focus { border-color: var(--color-error-500); }
.focus$bdc-neutral-100:focus { border-color: var(--color-neutral-100); }
.focus$bdc-neutral-200:focus { border-color: var(--color-neutral-200); }
.focus$bdc-neutral-300:focus { border-color: var(--color-neutral-300); }
.focus$bdc-neutral-400:focus { border-color: var(--color-neutral-400); }
.focus$bdc-neutral-500:focus { border-color: var(--color-neutral-500); }
.focus$bdc-neutral-600:focus { border-color: var(--color-neutral-600); }
.focus$bdc-neutral-700:focus { border-color: var(--color-neutral-700); }
.focus$bdc-neutral-900:focus { border-color: var(--color-neutral-900); }
.focus$bdc-neutral:focus { border-color: var(--color-neutral); }
.focus$bdc-success-500:focus { border-color: var(--color-success-500); }
.focus$bds:solid:focus { border-style: solid; }
.focus$bdw-xxxs:focus { border-width: var(--size-xxxs); }
.focus$bdw:1:focus { border-width: 1px; }
.focus$bgc-neutral-100:focus { background-color: var(--color-neutral-100); }
.focus$bgc-neutral-200:focus { background-color: var(--color-neutral-200); }
.focus$bgc-neutral-300:focus { background-color: var(--color-neutral-300); }
.focus$bgc-neutral-400:focus { background-color: var(--color-neutral-400); }
.focus$bgc-neutral-500:focus { background-color: var(--color-neutral-500); }
.focus$bgc-neutral-600:focus { background-color: var(--color-neutral-600); }
.focus$bgc-neutral-700:focus { background-color: var(--color-neutral-700); }
.focus$bgc-neutral-800:focus { background-color: var(--color-neutral-800); }
.focus$bgc-neutral-900:focus { background-color: var(--color-neutral-900); }
.focus$bgc-primary-100:focus { background-color: var(--color-primary-100); }
.focus$bgc-primary-200:focus { background-color: var(--color-primary-200); }
.focus$bgc-primary-300:focus { background-color: var(--color-primary-300); }
.focus$bgc-primary-400:focus { background-color: var(--color-primary-400); }
.focus$bgc-primary-500:focus { background-color: var(--color-primary-500); }
.focus$bgc-secondary-100:focus { background-color: var(--color-secondary-100); }
.focus$bgc-secondary-200:focus { background-color: var(--color-secondary-200); }
.focus$bgc-secondary-300:focus { background-color: var(--color-secondary-300); }
.focus$bgc-secondary-400:focus { background-color: var(--color-secondary-400); }
.focus$bgc-secondary-500:focus { background-color: var(--color-secondary-500); }
.focus$bgc-tertiary-100:focus { background-color: var(--color-tertiary-100); }
.focus$bgc-tertiary-200:focus { background-color: var(--color-tertiary-200); }
.focus$bgc-tertiary-300:focus { background-color: var(--color-tertiary-300); }
.focus$bgc-tertiary-400:focus { background-color: var(--color-tertiary-400); }
.focus$bgc-tertiary-500:focus { background-color: var(--color-tertiary-500); }
.focus$bxsh-neutral-100:focus { box-shadow: var(--color-neutral-100) 0 0 0 1px; }
.focus$bxsh-neutral-200:focus { box-shadow: var(--color-neutral-200) 0 0 0 1px; }
.focus$bxsh-neutral-300:focus { box-shadow: var(--color-neutral-300) 0 0 0 1px; }
.focus$bxsh-neutral-400:focus { box-shadow: var(--color-neutral-400) 0 0 0 1px; }
.focus$bxsh-neutral-500:focus { box-shadow: var(--color-neutral-500) 0 0 0 1px; }
.focus$bxsh-neutral-600:focus { box-shadow: var(--color-neutral-600) 0 0 0 1px; }
.focus$bxsh-neutral-700:focus { box-shadow: var(--color-neutral-700) 0 0 0 1px; }
.focus$bxsh-neutral-800:focus { box-shadow: var(--color-neutral-800) 0 0 0 1px; }
.focus$bxsh-neutral-900:focus { box-shadow: var(--color-neutral-900) 0 0 0 1px; }
.focus$bxsh-neutral:focus { box-shadow: var(--color-neutral) 0 0 0 1px; }
.focus$bxsh-outline-negative:focus { box-shadow: var(--color-neutral-100) 0 0 0 1px, var(--color-black) 0 0 0 3px, var(--color-neutral-100) 0 0 0 5px; }
.focus$bxsh-outline-primary:focus { box-shadow: var(--color-primary-500) 0 0 0 1px, var(--color-neutral-100) 0 0 0 3px, var(--color-black) 0 0 0 5px; }
.focus$bxsh-outline-secondary:focus { box-shadow: var(--color-secondary-500) 0 0 0 1px, var(--color-neutral-100) 0 0 0 3px, var(--color-black) 0 0 0 5px; }
.focus$bxsh-outline-tertiary:focus { box-shadow: var(--color-neutral-700) 0 0 0 1px, var(--color-neutral-100) 0 0 0 3px, var(--color-black) 0 0 0 5px; }
.focus$bxsh-primary-100:focus { box-shadow: var(--color-primary-100) 0 0 0 1px; }
.focus$bxsh-primary-200:focus { box-shadow: var(--color-primary-200) 0 0 0 1px; }
.focus$bxsh-primary-300:focus { box-shadow: var(--color-primary-300) 0 0 0 1px; }
.focus$bxsh-primary-400:focus { box-shadow: var(--color-primary-400) 0 0 0 1px; }
.focus$bxsh-primary-500:focus { box-shadow: var(--color-primary-500) 0 0 0 1px; }
.focus$bxsh-secondary-100:focus { box-shadow: var(--color-secondary-100) 0 0 0 1px; }
.focus$bxsh-secondary-200:focus { box-shadow: var(--color-secondary-200) 0 0 0 1px; }
.focus$bxsh-secondary-300:focus { box-shadow: var(--color-secondary-300) 0 0 0 1px; }
.focus$bxsh-secondary-400:focus { box-shadow: var(--color-secondary-400) 0 0 0 1px; }
.focus$bxsh-secondary-500:focus { box-shadow: var(--color-secondary-500) 0 0 0 1px; }
.focus$bxsh-solid-negative:focus { box-shadow: var(--color-neutral-100) 0 0 0 1px, var(--color-black) 0 0 0 3px, var(--color-neutral-100) 0 0 0 5px; }
.focus$bxsh-solid:focus { box-shadow: var(--color-neutral-100) 0 0 0 2px, var(--color-black) 0 0 0 4px; }
.focus$bxsh-tertiary-100:focus { box-shadow: var(--color-tertiary-100) 0 0 0 1px; }
.focus$bxsh-tertiary-200:focus { box-shadow: var(--color-tertiary-200) 0 0 0 1px; }
.focus$bxsh-tertiary-300:focus { box-shadow: var(--color-tertiary-300) 0 0 0 1px; }
.focus$bxsh-tertiary-400:focus { box-shadow: var(--color-tertiary-400) 0 0 0 1px; }
.focus$bxsh-tertiary-500:focus { box-shadow: var(--color-tertiary-500) 0 0 0 1px; }
.focus$ol:none:focus { outline: none; }
.focus$olc-neutral-900:focus { outline-color: var(--color-neutral-900); }
.focus-visible$bdc-error-100:focus-visible { border-color: var(--color-error-100); }
.focus-visible$bdc-error-200:focus-visible { border-color: var(--color-error-200); }
.focus-visible$bdc-error-300:focus-visible { border-color: var(--color-error-300); }
.focus-visible$bdc-error-400:focus-visible { border-color: var(--color-error-400); }
.focus-visible$bdc-error-500:focus-visible { border-color: var(--color-error-500); }
.focus-visible$bdc-neutral-100:focus-visible { border-color: var(--color-neutral-100); }
.focus-visible$bdc-neutral-200:focus-visible { border-color: var(--color-neutral-200); }
.focus-visible$bdc-neutral-300:focus-visible { border-color: var(--color-neutral-300); }
.focus-visible$bdc-neutral-400:focus-visible { border-color: var(--color-neutral-400); }
.focus-visible$bdc-neutral-500:focus-visible { border-color: var(--color-neutral-500); }
.focus-visible$bdc-neutral-600:focus-visible { border-color: var(--color-neutral-600); }
.focus-visible$bdc-neutral-700:focus-visible { border-color: var(--color-neutral-700); }
.focus-visible$bdc-neutral-900:focus-visible { border-color: var(--color-neutral-900); }
.focus-visible$bdc-neutral:focus-visible { border-color: var(--color-neutral); }
.focus-visible$bdc-primary-100:focus-visible { border-color: var(--color-primary-100); }
.focus-visible$bdc-primary-200:focus-visible { border-color: var(--color-primary-200); }
.focus-visible$bdc-primary-300:focus-visible { border-color: var(--color-primary-300); }
.focus-visible$bdc-primary-400:focus-visible { border-color: var(--color-primary-400); }
.focus-visible$bdc-primary-500:focus-visible { border-color: var(--color-primary-500); }
.focus-visible$bdc-success-100:focus-visible { border-color: var(--color-success-100); }
.focus-visible$bdc-success-200:focus-visible { border-color: var(--color-success-200); }
.focus-visible$bdc-success-300:focus-visible { border-color: var(--color-success-300); }
.focus-visible$bdc-success-400:focus-visible { border-color: var(--color-success-400); }
.focus-visible$bdc-success-500:focus-visible { border-color: var(--color-success-500); }
.focus-visible$bdrs-s:focus-visible { border-radius: var(--size-xxs); }
.focus-visible$bdw-xxxs:focus-visible { border-width: var(--size-xxxs); }
.focus-visible$bgc-neutral-100:focus-visible { background-color: var(--color-neutral-100); }
.focus-visible$bgc-neutral-200:focus-visible { background-color: var(--color-neutral-200); }
.focus-visible$bgc-neutral-300:focus-visible { background-color: var(--color-neutral-300); }
.focus-visible$bgc-neutral-400:focus-visible { background-color: var(--color-neutral-400); }
.focus-visible$bgc-neutral-500:focus-visible { background-color: var(--color-neutral-500); }
.focus-visible$bgc-neutral-600:focus-visible { background-color: var(--color-neutral-600); }
.focus-visible$bgc-neutral-700:focus-visible { background-color: var(--color-neutral-700); }
.focus-visible$bgc-neutral-800:focus-visible { background-color: var(--color-neutral-800); }
.focus-visible$bgc-neutral-900:focus-visible { background-color: var(--color-neutral-900); }
.focus-visible$bgc-primary-100:focus-visible { background-color: var(--color-primary-100); }
.focus-visible$bgc-primary-200:focus-visible { background-color: var(--color-primary-200); }
.focus-visible$bgc-primary-300:focus-visible { background-color: var(--color-primary-300); }
.focus-visible$bgc-primary-400:focus-visible { background-color: var(--color-primary-400); }
.focus-visible$bgc-primary-500:focus-visible { background-color: var(--color-primary-500); }
.focus-visible$bgc-secondary-100:focus-visible { background-color: var(--color-secondary-100); }
.focus-visible$bgc-secondary-200:focus-visible { background-color: var(--color-secondary-200); }
.focus-visible$bgc-secondary-300:focus-visible { background-color: var(--color-secondary-300); }
.focus-visible$bgc-secondary-400:focus-visible { background-color: var(--color-secondary-400); }
.focus-visible$bgc-secondary-500:focus-visible { background-color: var(--color-secondary-500); }
.focus-visible$bgc-tertiary-100:focus-visible { background-color: var(--color-tertiary-100); }
.focus-visible$bgc-tertiary-200:focus-visible { background-color: var(--color-tertiary-200); }
.focus-visible$bgc-tertiary-300:focus-visible { background-color: var(--color-tertiary-300); }
.focus-visible$bgc-tertiary-400:focus-visible { background-color: var(--color-tertiary-400); }
.focus-visible$bgc-tertiary-500:focus-visible { background-color: var(--color-tertiary-500); }
.focus-visible$bxsh-error-100:focus-visible { box-shadow: var(--color-error-100) 0 0 0 1px; }
.focus-visible$bxsh-error-200:focus-visible { box-shadow: var(--color-error-200) 0 0 0 1px; }
.focus-visible$bxsh-error-300:focus-visible { box-shadow: var(--color-error-300) 0 0 0 1px; }
.focus-visible$bxsh-error-400:focus-visible { box-shadow: var(--color-error-400) 0 0 0 1px; }
.focus-visible$bxsh-error-500:focus-visible { box-shadow: var(--color-error-500) 0 0 0 1px; }
.focus-visible$bxsh-neutral-100:focus-visible { box-shadow: var(--color-neutral-100) 0 0 0 2px; }
.focus-visible$bxsh-neutral-200:focus-visible { box-shadow: var(--color-neutral-200) 0 0 0 2px; }
.focus-visible$bxsh-neutral-300:focus-visible { box-shadow: var(--color-neutral-300) 0 0 0 2px; }
.focus-visible$bxsh-neutral-400:focus-visible { box-shadow: var(--color-neutral-400) 0 0 0 2px; }
.focus-visible$bxsh-neutral-500:focus-visible { box-shadow: var(--color-neutral-500) 0 0 0 2px; }
.focus-visible$bxsh-neutral-600:focus-visible { box-shadow: var(--color-neutral-600) 0 0 0 2px; }
.focus-visible$bxsh-neutral-700:focus-visible { box-shadow: var(--color-neutral-700) 0 0 0 2px; }
.focus-visible$bxsh-neutral-800:focus-visible { box-shadow: var(--color-neutral-800) 0 0 0 2px; }
.focus-visible$bxsh-neutral-900:focus-visible { box-shadow: var(--color-neutral-900) 0 0 0 2px; }
.focus-visible$bxsh-neutral:focus-visible { box-shadow: var(--color-neutral) 0 0 0 2px; }
.focus-visible$bxsh-outline-negative:focus-visible { box-shadow: var(--color-neutral-100) 0 0 0 1px, var(--color-black) 0 0 0 3px, var(--color-neutral-100) 0 0 0 5px; }
.focus-visible$bxsh-outline-primary:focus-visible { box-shadow: var(--color-primary-500) 0 0 0 1px, var(--color-neutral-100) 0 0 0 3px, var(--color-black) 0 0 0 5px; }
.focus-visible$bxsh-outline-secondary:focus-visible { box-shadow: var(--color-secondary-500) 0 0 0 1px, var(--color-neutral-100) 0 0 0 3px, var(--color-black) 0 0 0 5px; }
.focus-visible$bxsh-outline-tertiary:focus-visible { box-shadow: var(--color-neutral-700) 0 0 0 1px, var(--color-neutral-100) 0 0 0 3px, var(--color-black) 0 0 0 5px; }
.focus-visible$bxsh-primary-100:focus-visible { box-shadow: var(--color-primary-100) 0 0 0 1px; }
.focus-visible$bxsh-primary-200:focus-visible { box-shadow: var(--color-primary-200) 0 0 0 1px; }
.focus-visible$bxsh-primary-300:focus-visible { box-shadow: var(--color-primary-300) 0 0 0 1px; }
.focus-visible$bxsh-primary-400:focus-visible { box-shadow: var(--color-primary-400) 0 0 0 1px; }
.focus-visible$bxsh-primary-500:focus-visible { box-shadow: var(--color-primary-500) 0 0 0 1px; }
.focus-visible$bxsh-secondary-100:focus-visible { box-shadow: var(--color-secondary-100) 0 0 0 1px; }
.focus-visible$bxsh-secondary-200:focus-visible { box-shadow: var(--color-secondary-200) 0 0 0 1px; }
.focus-visible$bxsh-secondary-300:focus-visible { box-shadow: var(--color-secondary-300) 0 0 0 1px; }
.focus-visible$bxsh-secondary-400:focus-visible { box-shadow: var(--color-secondary-400) 0 0 0 1px; }
.focus-visible$bxsh-secondary-500:focus-visible { box-shadow: var(--color-secondary-500) 0 0 0 1px; }
.focus-visible$bxsh-solid-negative:focus-visible { box-shadow: var(--color-neutral-100) 0 0 0 1px, var(--color-black) 0 0 0 3px, var(--color-neutral-100) 0 0 0 5px; }
.focus-visible$bxsh-solid:focus-visible { box-shadow: var(--color-neutral-100) 0 0 0 2px, var(--color-black) 0 0 0 4px; }
.focus-visible$bxsh-success-100:focus-visible { box-shadow: var(--color-success-100) 0 0 0 1px; }
.focus-visible$bxsh-success-200:focus-visible { box-shadow: var(--color-success-200) 0 0 0 1px; }
.focus-visible$bxsh-success-300:focus-visible { box-shadow: var(--color-success-300) 0 0 0 1px; }
.focus-visible$bxsh-success-400:focus-visible { box-shadow: var(--color-success-400) 0 0 0 1px; }
.focus-visible$bxsh-success-500:focus-visible { box-shadow: var(--color-success-500) 0 0 0 1px; }
.focus-visible$bxsh-tertiary-100:focus-visible { box-shadow: var(--color-tertiary-100) 0 0 0 1px; }
.focus-visible$bxsh-tertiary-200:focus-visible { box-shadow: var(--color-tertiary-200) 0 0 0 1px; }
.focus-visible$bxsh-tertiary-300:focus-visible { box-shadow: var(--color-tertiary-300) 0 0 0 1px; }
.focus-visible$bxsh-tertiary-400:focus-visible { box-shadow: var(--color-tertiary-400) 0 0 0 1px; }
.focus-visible$bxsh-tertiary-500:focus-visible { box-shadow: var(--color-tertiary-500) 0 0 0 1px; }
.focus-visible$c-error-100:focus-visible { color: var(--color-error-100); }
.focus-visible$c-error-200:focus-visible { color: var(--color-error-200); }
.focus-visible$c-error-300:focus-visible { color: var(--color-error-300); }
.focus-visible$c-error-400:focus-visible { color: var(--color-error-400); }
.focus-visible$c-error-500:focus-visible { color: var(--color-error-500); }
.focus-visible$c-neutral-100:focus-visible { color: var(--color-neutral-100); }
.focus-visible$c-neutral-200:focus-visible { color: var(--color-neutral-200); }
.focus-visible$c-neutral-300:focus-visible { color: var(--color-neutral-300); }
.focus-visible$c-neutral-400:focus-visible { color: var(--color-neutral-400); }
.focus-visible$c-neutral-500:focus-visible { color: var(--color-neutral-500); }
.focus-visible$c-neutral-600:focus-visible { color: var(--color-neutral-600); }
.focus-visible$c-neutral-700:focus-visible { color: var(--color-neutral-700); }
.focus-visible$c-neutral-800:focus-visible { color: var(--color-neutral-800); }
.focus-visible$c-neutral-900:focus-visible { color: var(--color-neutral-900); }
.focus-visible$c-neutral:focus-visible { color: var(--color-neutral); }
.focus-visible$c-primary-100:focus-visible { color: var(--color-primary-100); }
.focus-visible$c-primary-200:focus-visible { color: var(--color-primary-200); }
.focus-visible$c-primary-300:focus-visible { color: var(--color-primary-300); }
.focus-visible$c-primary-400:focus-visible { color: var(--color-primary-400); }
.focus-visible$c-primary-500:focus-visible { color: var(--color-primary-500); }
.focus-visible$c-success-100:focus-visible { color: var(--color-success-100); }
.focus-visible$c-success-200:focus-visible { color: var(--color-success-200); }
.focus-visible$c-success-300:focus-visible { color: var(--color-success-300); }
.focus-visible$c-success-400:focus-visible { color: var(--color-success-400); }
.focus-visible$c-success-500:focus-visible { color: var(--color-success-500); }
.focus-visible$ol:none:focus-visible { outline: none; }
.focus-visible$olc-neutral-900:focus-visible { outline-color: var(--color-neutral-900); }
.focus-visible$p-2xl:focus-visible { padding: var(--size-2xl); }
.focus-visible$p-3xl:focus-visible { padding: var(--size-3xl); }
.focus-visible$p-4xl:focus-visible { padding: var(--size-4xl); }
.focus-visible$p-5xl:focus-visible { padding: var(--size-5xl); }
.focus-visible$p-l:focus-visible { padding: var(--size-l); }
.focus-visible$p-m:focus-visible { padding: var(--size-m); }
.focus-visible$p-s:focus-visible { padding: var(--size-s); }
.focus-visible$p-xl:focus-visible { padding: var(--size-xl); }
.focus-visible$p-xs:focus-visible { padding: var(--size-xs); }
.focus-visible$p-xxs:focus-visible { padding: var(--size-xxs); }
.focus-visible$p-xxxs:focus-visible { padding: var(--size-xxxs); }
.fw-regular { font-weight: var(--font-weight-regular); }
.fw-semibold { font-weight: var(--font-weight-semibold); }
.fx-0 { flex: var(--flex-0); }
.fx-1 { flex: var(--flex-1); }
.fx-2 { flex: var(--flex-2); }
.fx-3 { flex: var(--flex-3); }
.fx-4 { flex: var(--flex-4); }
.fx:auto { flex: auto; }
.fx:unset { flex: unset; }
.fxb-full { flex-basis: var(--size-full); }
.fxb-half { flex-basis: var(--size-half); }
.fxb-quarter { flex-basis: var(--size-quarter); }
.fxb-third { flex-basis: var(--size-third); }
.fxb:auto { flex-basis: auto; }
.fxd:column { flex-direction: column; }
.fxd:row { flex-direction: row; }
.fxw:nowrap { flex-wrap: nowrap; }
.fxw:wrap { flex-wrap: wrap; }
.fz-2xl { font-size: var(--font-size-2xl); line-height: var(--font-line-height-2xl); }
.fz-3xl { font-size: var(--font-size-3xl); line-height: var(--font-line-height-3xl); }
.fz-4xl { font-size: var(--font-size-4xl); line-height: var(--font-line-height-4xl); }
.fz-5xl { font-size: var(--font-size-5xl); line-height: var(--font-line-height-5xl); }
.fz-l { font-size: var(--font-size-l); line-height: var(--font-line-height-l); }
.fz-m { font-size: var(--font-size-m); line-height: var(--font-line-height-m); }
.fz-s { font-size: var(--font-size-s); line-height: var(--font-line-height-s); }
.fz-xl { font-size: var(--font-size-xl); line-height: var(--font-line-height-xl); }
.fz-xs { font-size: var(--font-size-xs); line-height: var(--font-line-height-xs); }
.fz-xxs { font-size: var(--font-size-xxs); line-height: var(--font-line-height-4xl); }
.fz:inherit { font-size: inherit; }
.h-2xl { height: var(--size-2xl); }
.h-3xl { height: var(--size-3xl); }
.h-4xl { height: var(--size-4xl); }
.h-5xl { height: var(--size-5xl); }
.h-6xl { height: var(--size-6xl); }
.h-7xl { height: var(--size-7xl); }
.h-8xl { height: var(--size-8xl); }
.h-full { height: var(--size-full); }
.h-full-viewport { height: var(--size-h-full-viewport); }
.h-l { height: var(--size-l); }
.h-m { height: var(--size-m); }
.h-s { height: var(--size-s); }
.h-viewport-height { height: var(--viewport-height); }
.h-xl { height: var(--size-xl); }
.h-xs { height: var(--size-xs); }
.h-xxs { height: var(--size-xxs); }
.h-xxxs { height: var(--size-xxxs); }
.h:auto { height: auto; }
.h:fit-content { height: fit-content; }
.hover$bdbc-neutral-900:hover { border-bottom-color: var(--color-neutral-900); }
.hover$bgc-neutral-100-op-08:hover { background-color: var(--color-neutral-100-op-08); }
.hover$bgc-neutral-100:hover { background-color: var(--color-neutral-100); }
.hover$bgc-neutral-200:hover { background-color: var(--color-neutral-200); }
.hover$bgc-neutral-300:hover { background-color: var(--color-neutral-300); }
.hover$bgc-neutral-400:hover { background-color: var(--color-neutral-400); }
.hover$bgc-neutral-500:hover { background-color: var(--color-neutral-500); }
.hover$bgc-neutral-600:hover { background-color: var(--color-neutral-600); }
.hover$bgc-neutral-700:hover { background-color: var(--color-neutral-700); }
.hover$bgc-neutral-800:hover { background-color: var(--color-neutral-800); }
.hover$bgc-neutral-900:hover { background-color: var(--color-neutral-900); }
.hover$bgc-neutral-op-08:hover { background-color: var(--color-neutral-op-08); }
.hover$bgc-primary-100:hover { background-color: var(--color-primary-100); }
.hover$bgc-primary-200:hover { background-color: var(--color-primary-200); }
.hover$bgc-primary-300:hover { background-color: var(--color-primary-300); }
.hover$bgc-primary-400:hover { background-color: var(--color-primary-400); }
.hover$bgc-primary-500:hover { background-color: var(--color-primary-500); }
.hover$bgc-secondary-100:hover { background-color: var(--color-secondary-100); }
.hover$bgc-secondary-200:hover { background-color: var(--color-secondary-200); }
.hover$bgc-secondary-300:hover { background-color: var(--color-secondary-300); }
.hover$bgc-secondary-400:hover { background-color: var(--color-secondary-400); }
.hover$bgc-secondary-500:hover { background-color: var(--color-secondary-500); }
.hover$bgc-tertiary-100:hover { background-color: var(--color-tertiary-100); }
.hover$bgc-tertiary-200:hover { background-color: var(--color-tertiary-200); }
.hover$bgc-tertiary-300:hover { background-color: var(--color-tertiary-300); }
.hover$bgc-tertiary-400:hover { background-color: var(--color-tertiary-400); }
.hover$bgc-tertiary-500:hover { background-color: var(--color-tertiary-500); }
.hover$bxsh-neutral-900:hover { box-shadow: var(--color-neutral-900) 0 0 0 1px; }
.hover$c-error-100:hover { color: var(--color-error-100); }
.hover$c-error-200:hover { color: var(--color-error-200); }
.hover$c-error-300:hover { color: var(--color-error-300); }
.hover$c-error-400:hover { color: var(--color-error-400); }
.hover$c-error-500:hover { color: var(--color-error-500); }
.hover$c-neutral-100:hover { color: var(--color-neutral-100); }
.hover$c-neutral-200:hover { color: var(--color-neutral-200); }
.hover$c-neutral-300:hover { color: var(--color-neutral-300); }
.hover$c-neutral-400:hover { color: var(--color-neutral-400); }
.hover$c-neutral-500:hover { color: var(--color-neutral-500); }
.hover$c-neutral-600:hover { color: var(--color-neutral-600); }
.hover$c-neutral-700:hover { color: var(--color-neutral-700); }
.hover$c-neutral-800:hover { color: var(--color-neutral-800); }
.hover$c-neutral-900:hover { color: var(--color-neutral-900); }
.hover$c-neutral:hover { color: var(--color-neutral); }
.hover$c-primary-100:hover { color: var(--color-primary-100); }
.hover$c-primary-200:hover { color: var(--color-primary-200); }
.hover$c-primary-300:hover { color: var(--color-primary-300); }
.hover$c-primary-400:hover { color: var(--color-primary-400); }
.hover$c-primary-500:hover { color: var(--color-primary-500); }
.hover$cur:pointer:hover { cursor: pointer; }
.hover$cur:text:hover { cursor: text; }
.hover$td:underline:hover { text-decoration: underline; }
.jc:center { justify-content: center; }
.jc:end { justify-content: end; }
.jc:flex-end { justify-content: flex-end; }
.jc:flex-start { justify-content: flex-start; }
.jc:space-around { justify-content: space-around; }
.jc:space-between { justify-content: space-between; }
.jc:start { justify-content: start; }
.l-2xl { left: var(--size-2xl); }
.l-3xl { left: var(--size-3xl); }
.l-4xl { left: var(--size-4xl); }
.l-5xl { left: var(--size-5xl); }
.l-full-viewport { left: var(--size-w-full-viewport); }
.l-full-viewport-negative { left: var(--size-w-full-viewport-negative); }
.l-l { left: var(--size-l); }
.l-m { left: var(--size-m); }
.l-s { left: var(--size-s); }
.l-xl { left: var(--size-xl); }
.l-xs { left: var(--size-xs); }
.l-xxs { left: var(--size-xxs); }
.l-xxs-negative { left: var(--size-xxs-negative); }
.l-xxxs { left: var(--size-xxxs); }
.l:none { left: var(--size-none); }
.lc-1 { -webkit-line-clamp: var(--level-s); }
.lc-2 { -webkit-line-clamp: var(--level-m); }
.lc-3 { -webkit-line-clamp: var(--level-l); }
.lh-2xl { line-height: var(--font-line-height-2xl); }
.lh-3xl { line-height: var(--font-line-height-3xl); }
.lh-4xl { line-height: var(--font-line-height-4xl); }
.lh-5xl { line-height: var(--font-line-height-5xl); }
.lh-6xl { line-height: var(--font-line-height-6xl); }
.lh-l { line-height: var(--font-line-height-l); }
.lh-m { line-height: var(--font-line-height-m); }
.lh-xl { line-height: var(--font-line-height-xl); }
.lh-xs { line-height: var(--font-line-height-xs); }
.lh-xxs { line-height: var(--font-line-height-xxs); }
.link$c-error-100:link { color: var(--color-error-100); }
.link$c-error-200:link { color: var(--color-error-200); }
.link$c-error-300:link { color: var(--color-error-300); }
.link$c-error-400:link { color: var(--color-error-400); }
.link$c-error-500:link { color: var(--color-error-500); }
.link$c-neutral-100:link { color: var(--color-neutral-100); }
.link$c-neutral-200:link { color: var(--color-neutral-200); }
.link$c-neutral-300:link { color: var(--color-neutral-300); }
.link$c-neutral-400:link { color: var(--color-neutral-400); }
.link$c-neutral-500:link { color: var(--color-neutral-500); }
.link$c-neutral-600:link { color: var(--color-neutral-600); }
.link$c-neutral-700:link { color: var(--color-neutral-700); }
.link$c-neutral-800:link { color: var(--color-neutral-800); }
.link$c-neutral-900:link { color: var(--color-neutral-900); }
.link$c-neutral:link { color: var(--color-neutral); }
.link$c-primary-100:link { color: var(--color-primary-100); }
.link$c-primary-200:link { color: var(--color-primary-200); }
.link$c-primary-300:link { color: var(--color-primary-300); }
.link$c-primary-400:link { color: var(--color-primary-400); }
.link$c-primary-500:link { color: var(--color-primary-500); }
.link$c-success-100:link { color: var(--color-success-100); }
.link$c-success-200:link { color: var(--color-success-200); }
.link$c-success-300:link { color: var(--color-success-300); }
.link$c-success-400:link { color: var(--color-success-400); }
.link$c-success-500:link { color: var(--color-success-500); }
.list:none { list-style-type: none; }
.m-2xl { margin: var(--size-2xl); }
.m-3xl { margin: var(--size-3xl); }
.m-4xl { margin: var(--size-4xl); }
.m-5xl { margin: var(--size-5xl); }
.m-l { margin: var(--size-l); }
.m-m { margin: var(--size-m); }
.m-s { margin: var(--size-s); }
.m-xl { margin: var(--size-xl); }
.m-xs { margin: var(--size-xs); }
.m-xxs { margin: var(--size-xxs); }
.m-xxxs { margin: var(--size-xxxs); }
.m:none { margin: 0; }
.maw-8xl { max-width: var(--size-8xl); }
.maw-full { max-width: var(--size-full); }
.maw-half { max-width: var(--size-half); }
.maw-lg { max-width: var(--screen-size-lg); }
.maw-quarter { max-width: var(--size-quarter); }
.maw-third { max-width: var(--size-third); }
.maw:min-content { max-width: min-content; }
.mb-2xl { margin-bottom: var(--size-2xl); }
.mb-3xl { margin-bottom: var(--size-3xl); }
.mb-4xl { margin-bottom: var(--size-4xl); }
.mb-5xl { margin-bottom: var(--size-5xl); }
.mb-l { margin-bottom: var(--size-l); }
.mb-m { margin-bottom: var(--size-m); }
.mb-s { margin-bottom: var(--size-s); }
.mb-xl { margin-bottom: var(--size-xl); }
.mb-xs { margin-bottom: var(--size-xs); }
.mb-xxs { margin-bottom: var(--size-xxs); }
.mb-xxxs { margin-bottom: var(--size-xxxs); }
.mb:none { margin-bottom: 0; }
.mih-xs { min-height: var(--size-xs); }
.mih-xxs { min-height: var(--size-xxs); }
.miw-3xl { min-width: var(--size-3xl); }
.miw-full { min-width: var(--size-full); }
.miw-half { min-width: var(--size-half); }
.miw-quarter { min-width: var(--size-quarter); }
.miw-s { min-width: var(--size-s); }
.miw-third { min-width: var(--size-third); }
.miw-xxs { min-width: var(--size-xxs); }
.ml-2xl { margin-left: var(--size-2xl); }
.ml-3xl { margin-left: var(--size-3xl); }
.ml-4xl { margin-left: var(--size-4xl); }
.ml-5xl { margin-left: var(--size-5xl); }
.ml-l { margin-left: var(--size-l); }
.ml-m { margin-left: var(--size-m); }
.ml-s { margin-left: var(--size-s); }
.ml-xl { margin-left: var(--size-xl); }
.ml-xs { margin-left: var(--size-xs); }
.ml-xxs { margin-left: var(--size-xxs); }
.ml-xxxs { margin-left: var(--size-xxxs); }
.ml:none { margin-left: 0; }
.mr-2xl { margin-right: var(--size-2xl); }
.mr-3xl { margin-right: var(--size-3xl); }
.mr-4xl { margin-right: var(--size-4xl); }
.mr-5xl { margin-right: var(--size-5xl); }
.mr-l { margin-right: var(--size-l); }
.mr-m { margin-right: var(--size-m); }
.mr-s { margin-right: var(--size-s); }
.mr-xl { margin-right: var(--size-xl); }
.mr-xs { margin-right: var(--size-xs); }
.mr-xxs { margin-right: var(--size-xxs); }
.mr-xxxs { margin-right: var(--size-xxxs); }
.mr:none { margin-right: 0; }
.mt-2xl { margin-top: var(--size-2xl); }
.mt-3xl { margin-top: var(--size-3xl); }
.mt-4xl { margin-top: var(--size-4xl); }
.mt-5xl { margin-top: var(--size-5xl); }
.mt-l { margin-top: var(--size-l); }
.mt-m { margin-top: var(--size-m); }
.mt-s { margin-top: var(--size-s); }
.mt-xl { margin-top: var(--size-xl); }
.mt-xs { margin-top: var(--size-xs); }
.mt-xxs { margin-top: var(--size-xxs); }
.mt-xxs-negative { margin-top: var(--size-xxs-negative); }
.mt-xxxs { margin-top: var(--size-xxxs); }
.mt:none { margin-top: 0; }
.ol:none { outline: none; }
.op-2xl { opacity: var(--opacity-2xl); }
.op-l { opacity: var(--opacity-l); }
.op-m { opacity: var(--opacity-m); }
.op-s { opacity: var(--opacity-s); }
.op-xl { opacity: var(--opacity-xl); }
.op-xs { opacity: var(--opacity-xs); }
.ov:hidden { overflow: hidden; }
.ov:visible { overflow: visible; }
.ovy:auto { overflow-y: auto; }
.ovy:hidden { overflow-y: hidden; }
.ovy:scroll { overflow-y: scroll; }
.p-2xl { padding: var(--size-2xl); }
.p-3xl { padding: var(--size-3xl); }
.p-4xl { padding: var(--size-4xl); }
.p-5xl { padding: var(--size-5xl); }
.p-l { padding: var(--size-l); }
.p-m { padding: var(--size-m); }
.p-s { padding: var(--size-s); }
.p-xl { padding: var(--size-xl); }
.p-xs { padding: var(--size-xs); }
.p-xxs { padding: var(--size-xxs); }
.p-xxxs { padding: var(--size-xxxs); }
.p:none { padding: 0; }
.pb-2xl { padding-bottom: var(--size-2xl); }
.pb-3xl { padding-bottom: var(--size-3xl); }
.pb-4xl { padding-bottom: var(--size-4xl); }
.pb-5xl { padding-bottom: var(--size-5xl); }
.pb-6xl { padding-bottom: var(--size-6xl); }
.pb-l { padding-bottom: var(--size-l); }
.pb-m { padding-bottom: var(--size-m); }
.pb-s { padding-bottom: var(--size-s); }
.pb-xl { padding-bottom: var(--size-xl); }
.pb-xs { padding-bottom: var(--size-xs); }
.pb-xxs { padding-bottom: var(--size-xxs); }
.pb-xxxs { padding-bottom: var(--size-xxxs); }
.pb:none { padding-bottom: 0; }
.pe:auto { pointer-events: auto; }
.pe:none { pointer-events: none; }
.pl-2xl { padding-left: var(--size-2xl); }
.pl-3xl { padding-left: var(--size-3xl); }
.pl-4xl { padding-left: var(--size-4xl); }
.pl-5xl { padding-left: var(--size-5xl); }
.pl-l { padding-left: var(--size-l); }
.pl-m { padding-left: var(--size-m); }
.pl-s { padding-left: var(--size-s); }
.pl-xl { padding-left: var(--size-xl); }
.pl-xs { padding-left: var(--size-xs); }
.pl-xxs { padding-left: var(--size-xxs); }
.pl-xxxs { padding-left: var(--size-xxxs); }
.pl:none { padding-left: 0; }
.placeholder$c-neutral-600::placeholder { color: var(--color-neutral-600); }
.pos:absolute { position: absolute; }
.pos:fixed { position: fixed; }
.pos:relative { position: relative; }
.pos:static { position: static; }
.pr-2xl { padding-right: var(--size-2xl); }
.pr-3xl { padding-right: var(--size-3xl); }
.pr-4xl { padding-right: var(--size-4xl); }
.pr-5xl { padding-right: var(--size-5xl); }
.pr-l { padding-right: var(--size-l); }
.pr-m { padding-right: var(--size-m); }
.pr-s { padding-right: var(--size-s); }
.pr-xl { padding-right: var(--size-xl); }
.pr-xs { padding-right: var(--size-xs); }
.pr-xxs { padding-right: var(--size-xxs); }
.pr-xxxs { padding-right: var(--size-xxxs); }
.pr:none { padding-right: 0; }
.pt-2xl { padding-top: var(--size-2xl); }
.pt-3xl { padding-top: var(--size-3xl); }
.pt-4xl { padding-top: var(--size-4xl); }
.pt-5xl { padding-top: var(--size-5xl); }
.pt-6xl { padding-top: var(--size-6xl); }
.pt-l { padding-top: var(--size-l); }
.pt-m { padding-top: var(--size-m); }
.pt-s { padding-top: var(--size-s); }
.pt-xl { padding-top: var(--size-xl); }
.pt-xs { padding-top: var(--size-xs); }
.pt-xxs { padding-top: var(--size-xxs); }
.pt-xxxs { padding-top: var(--size-xxxs); }
.pt:none { padding-top: 0; }
.r-2xl { right: var(--size-2xl); }
.r-3xl { right: var(--size-3xl); }
.r-4xl { right: var(--size-4xl); }
.r-5xl { right: var(--size-5xl); }
.r-l { right: var(--size-l); }
.r-m { right: var(--size-m); }
.r-s { right: var(--size-s); }
.r-xl { right: var(--size-xl); }
.r-xs { right: var(--size-xs); }
.r-xxs { right: var(--size-xxs); }
.r-xxs-negative { right: var(--size-xxs-negative); }
.r-xxxs { right: var(--size-xxxs); }
.r:none { right: var(--size-none); }
.rowg-l { row-gap: var(--size-l); }
.rowg-m { row-gap: var(--size-m); }
.rowg-s { row-gap: var(--size-s); }
.rowg-xl { row-gap: var(--size-xl); }
.rowg:none { row-gap: none; }
.t-2xl { top: var(--size-2xl); }
.t-3xl { top: var(--size-3xl); }
.t-4xl { top: var(--size-4xl); }
.t-5xl { top: var(--size-5xl); }
.t-ellipsis { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.t-full { top: var(--size-full); }
.t-l { top: var(--size-l); }
.t-m { top: var(--size-m); }
.t-s { top: var(--size-s); }
.t-xl { top: var(--size-xl); }
.t-xs { top: var(--size-xs); }
.t-xs-negative { top: var(--size-xs-negative); }
.t-xxs { top: var(--size-xxs); }
.t-xxs-negative { top: var(--size-xxs-negative); }
.t-xxxs { top: var(--size-xxxs); }
.t:none { top: var(--size-none); }
.ta:center { text-align: center; }
.ta:left { text-align: left; }
.td:none { text-decoration: none; }
.td:underline { text-decoration: underline; }
.trf:scaleY-1 { transform: scaleY(-1); }
.trsdu-fast { transition-duration: var(--fast); }
.trsdu-medium { transition-duration: var(--medium); }
.trsdu-slow { transition-duration: var(--slow); }
.trsp:left { transition-property: left; }
.trsp:opacity { transition-property: opacity; }
.trstf-ease-in { transition-timing-function: var(--ease-in); }
.trstf-ease-in-out { transition-timing-function: var(--ease-in-out); }
.trstf-ease-out { transition-timing-function: var(--ease-out); }
.tt:capitalize { text-transform: capitalize; }
.tt:uppercase { text-transform: uppercase; }
.visited$c-error-100:visited { color: var(--color-error-100); }
.visited$c-error-200:visited { color: var(--color-error-200); }
.visited$c-error-300:visited { color: var(--color-error-300); }
.visited$c-error-400:visited { color: var(--color-error-400); }
.visited$c-error-500:visited { color: var(--color-error-500); }
.visited$c-neutral-100:visited { color: var(--color-neutral-100); }
.visited$c-neutral-200:visited { color: var(--color-neutral-200); }
.visited$c-neutral-300:visited { color: var(--color-neutral-300); }
.visited$c-neutral-400:visited { color: var(--color-neutral-400); }
.visited$c-neutral-500:visited { color: var(--color-neutral-500); }
.visited$c-neutral-600:visited { color: var(--color-neutral-600); }
.visited$c-neutral-700:visited { color: var(--color-neutral-700); }
.visited$c-neutral-800:visited { color: var(--color-neutral-800); }
.visited$c-neutral-900:visited { color: var(--color-neutral-900); }
.visited$c-neutral:visited { color: var(--color-neutral); }
.visited$c-primary-100:visited { color: var(--color-primary-100); }
.visited$c-primary-200:visited { color: var(--color-primary-200); }
.visited$c-primary-300:visited { color: var(--color-primary-300); }
.visited$c-primary-400:visited { color: var(--color-primary-400); }
.visited$c-primary-500:visited { color: var(--color-primary-500); }
.visited$c-success-100:visited { color: var(--color-success-100); }
.visited$c-success-200:visited { color: var(--color-success-200); }
.visited$c-success-300:visited { color: var(--color-success-300); }
.visited$c-success-400:visited { color: var(--color-success-400); }
.visited$c-success-500:visited { color: var(--color-success-500); }
.w-1\/4 { width: var(--width-1-4); }
.w-1\/6 { width: var(--width-1-6); }
.w-1\/12 { width: var(--width-1-12); }
.w-2\/4 { width: var(--width-2-4); }
.w-2\/6 { width: var(--width-2-6); }
.w-2\/12 { width: var(--width-2-12); }
.w-2xl { width: var(--size-2xl); }
.w-3\/4 { width: var(--width-3-4); }
.w-3\/6 { width: var(--width-3-6); }
.w-3\/12 { width: var(--width-3-12); }
.w-3xl { width: var(--size-3xl); }
.w-4\/4 { width: var(--width-4-4); }
.w-4\/6 { width: var(--width-4-6); }
.w-4\/12 { width: var(--width-4-12); }
.w-4xl { width: var(--size-4xl); }
.w-5\/6 { width: var(--width-5-6); }
.w-5\/12 { width: var(--width-5-12); }
.w-5xl { width: var(--size-5xl); }
.w-6\/6 { width: var(--width-6-6); }
.w-6\/12 { width: var(--width-6-12); }
.w-6xl { width: var(--size-6xl); }
.w-7\/12 { width: var(--width-7-12); }
.w-7xl { width: var(--size-7xl); }
.w-8\/12 { width: var(--width-8-12); }
.w-8xl { width: var(--size-8xl); }
.w-9\/12 { width: var(--width-9-12); }
.w-10\/12 { width: var(--width-10-12); }
.w-11\/12 { width: var(--width-11-12); }
.w-12\/12 { width: var(--width-12-12); }
.w-12xl { width: var(--size-12xl); }
.w-full { width: var(--size-full); }
.w-full-viewport { width: var(--size-w-full-viewport); }
.w-half { width: var(--size-half); }
.w-l { width: var(--size-l); }
.w-m { width: var(--size-m); }
.w-quarter { width: var(--size-quarter); }
.w-s { width: var(--size-s); }
.w-third { width: var(--size-third); }
.w-xl { width: var(--size-xl); }
.w-xs { width: var(--size-xs); }
.w-xxs { width: var(--size-xxs); }
.w-xxxs { width: var(--size-xxxs); }
.w:auto { width: auto; }
.w:fit-content { width: fit-content; }
.whs:nowrap { white-space: nowrap; }
.wovsc:touch { -webkit-overflow-scrolling: touch; }
.z-l { z-index: var(--level-l); }
.z-m { z-index: var(--level-m); }
.z-s { z-index: var(--level-s); }
/** MARGIN AND PADDING */
`
)