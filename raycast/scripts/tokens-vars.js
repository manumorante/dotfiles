#!/usr/bin/env node

// @raycast.schemaVersion 1
// @raycast.title Tokens: Vars
// @raycast.mode fullOutput
// @raycast.refreshTime 24h
// @raycast.packageName Raycast Scripts
//
// Optional parameters
// @raycast.icon 🧽


// SIZES
console.log(
`
/** Z-INDEX */
--level-s: 1;
--level-m: 2;
--level-l: 3;

/** FLEX */
--flex-0: 0;
--flex-1: 1;
--flex-2: 2;
--flex-3: 3;
--flex-4: 4;

/** SIZES */
--size-12xl: 272px;
--size-11xl: 248px;
--size-10xl: 224px;
--size-9xl: 200px;
--size-8xl: 176px;
--size-7xl: 152px;
--size-6xl: 128px;
--size-5xl: 104px;
--size-4xl: 80px;
--size-3xl: 64px;
--size-2xl: 48px;
--size-xl: 32px;
--size-l: 24px;
--size-m: 16px;
--size-s: 12px;
--size-xs: 8px;
--size-xxs: 4px;
--size-xxxs: 2px;
--size-xxxxs: 1px;
--size-full: 100%;
--size-h-full-viewport: 100vh;
--size-w-full-viewport: 100vw;
--size-w-full-viewport-negative: -100vw;
--size-half: 50%;
--size-third: 33%;
--size-quarter: 25%;
--size-none: 0;
--size-xxs-negative: -4px;

--viewport-height: 100vh;

--screen-size-sm: 768px;
--screen-size-md: 1024px;
--screen-size-lg: 1440px;

--display-grid-amount-lg: 12;
--display-grid-amount-md: 12;
--display-grid-amount-sm: 6;
--display-grid-amount-xs: 4;

--display-grid-column-lg: 78px;
--display-grid-column-md: 56px;
--display-grid-column-sm: 92px;
--display-grid-column-xs: 56px;

--display-grid-gutter-lg: 32px;
--display-grid-gutter-md: 24px;
--display-grid-gutter-sm: 24px;
--display-grid-gutter-xs: 16px;

--display-grid-column: var(--display-grid-column-xs);
--display-grid-gutter: var(--display-grid-gutter-xs);
--display-grid-amount: var(--display-grid-amount-xs);

--display-full: calc( var(--display-grid-amount) * var(--display-grid-column) + calc(calc(var(--display-grid-amount) - 1) * var(--display-grid-gutter)));
--display-half: calc( var(--display-full) * 0.5);
--display-third: calc( var(--display-full) * 0.33);
--display-quarter: calc( var(--display-full) * 0.25);

/** COLORS */
--color-black: black;
--color-white: white;
--color-transparent: transparent;
--color-primary-500: #d02700;
--color-primary-400: #f02d00;
--color-primary-300: #ff5129;
--color-primary-200: #ff7a5c;
--color-primary-100: #fde5e0;
--color-secondary-500: var(--color-blue-500);
--color-secondary-400: var(--color-blue-400);
--color-secondary-300: var(--color-blue-300);
--color-secondary-200: var(--color-blue-200);
--color-secondary-100: var(--color-blue-100);
--color-tertiary-500: var(--color-neutral-500);
--color-tertiary-400: var(--color-neutral-400);
--color-tertiary-300: var(--color-neutral-300);
--color-tertiary-200: var(--color-neutral-200);
--color-tertiary-100: var(--color-neutral-100);
--color-blue-500: #02808b;
--color-blue-400: #0399a6;
--color-blue-300: #05bbc7;
--color-blue-200: #08d9e7;
--color-blue-100: #e6fafc;
--color-neutral: #161616;
--color-neutral-op-80: #161616cc;
--color-neutral-op-16: #16161628;
--color-neutral-op-12: #1616161e;
--color-neutral-op-08: #16161614;
--color-neutral-900: #484848;
--color-neutral-800: #757575;
--color-neutral-700: #989898;
--color-neutral-600: #cbcbcb;
--color-neutral-500: #e1e1e1;
--color-neutral-400: #f1f1f1;
--color-neutral-300: #f8f8f8;
--color-neutral-200: #fbfbfb;
--color-neutral-100: #fff;
--color-neutral-100-op-08: #ffffff14;
--color-success-500: #16832E;
--color-success-400: #339D4A;
--color-success-300: #62C878;
--color-success-200: #75E78E;
--color-success-100: #E5FDE3;
--color-error-500: var(--color-primary-500);
--color-error-400: var(--color-primary-400);
--color-error-300: var(--color-primary-300);
--color-error-200: var(--color-primary-200);
--color-error-100: var(--color-primary-100);

/** FONTS */
--font-family: SFProDisplay, System, sans-serif;

--font-size-5xl: 88px;
--font-size-4xl: 64px;
--font-size-3xl: 48px;
--font-size-2xl: 32px;
--font-size-xl: 24px;
--font-size-l: 18px;
--font-size-m: 16px;
--font-size-s: 14px;
--font-size-xs: 12px;
--font-size-xxs: 10px;

--font-weight-semibold: 600;
--font-weight-regular: 400;

--font-line-height-6xl: 1.4;
--font-line-height-5xl: 1.1818181818181819;
--font-line-height-4xl: 1.25;
--font-line-height-3xl: 1.3333333333333333;
--font-line-height-2xl: 1.5;
--font-line-height-xl: 1.3333333333333333;
--font-line-height-l: 1.5555555555555556;
--font-line-height-m: 1.5;
--font-line-height-s: 1.5714285714285714;
--font-line-height-xs: 1.6666666666666667;
--font-line-height-xxs: 1;

/** WIDTHS */
--width-1-4: 25%; 
--width-2-4: 50%;
--width-3-4: 75%;
--width-4-4: 100%;

--width-1-6: 16.6666667%;
--width-2-6: 33%;
--width-3-6: 50%;
--width-4-6: 66%;
--width-5-6: 83%;
--width-6-6: 100%;

--width-1-12: 8.3%;
--width-2-12: 16.6666667%;
--width-3-12: 25%;
--width-4-12: 33%;
--width-5-12: 41.6%;
--width-6-12: 50%;
--width-7-12: 58.3%;
--width-8-12: 66%;
--width-9-12: 75%;
--width-10-12: 83%;
--width-11-12: 91.6%;
--width-12-12: 100%;

/** OPACITY */
--opacity-2xl: 0.80;
--opacity-xl: 0.64;
--opacity-l: 0.48;
--opacity-m: 0.24;
--opacity-s: 0.12;
--opacity-xs: 0.08;

/** ANIMATION */
--fast: .2s;
--medium: .5s;
--slow: .8s;

--ease-in-out: ease-in-out;
--ease-in: ease-in;
--ease-out: ease-out;
`
)