import { ActionPanel, CopyToClipboardAction, List, showToast, ToastStyle } from "@raycast/api";
import { useState, useEffect } from "react";
import fs from "fs";

const CSS_FILE = '/Users/manu/projects/frontend/packages/styles/src/grid/base.css'

export default function UtilityList() {
  const [state, setState] = useState<{ utilities: Utility[] }>({ utilities: [] });

  useEffect(() => {
    async function fetch() {
      const utilities = await fetchUtilities();
      setState((oldState) => ({
        ...oldState,
        utilities: utilities,
      }));
    }
    fetch();
  }, []);

  return (
    <List isLoading={state.utilities.length === 0} searchBarPlaceholder="Filter ...">
      {state.utilities.map((utility) => (
        <UtilityListItem key={utility.id} utility={utility} />
      ))}
    </List>
  );
}

function getIcon(key: string ) {
  const ICON_TYPES = {
    "font-family": "🔠",
    "font-size": "🔠",
    "font-weight": "🔠",
    "display": "📦",
    "-webkit-box-orient": "📦",
    "flex-direction": "📦",
    "flex-wrap": "📦",
    "flex-flow": "📦",
    "flex": "📦",
    "flex-basis": "📦",
    "column-gap": "📦",
    "row-gap": "📦",
    "position": "📍",
    "top": "📍",
    "right": "📍",
    "bottom": "📍",
    "left": "📍",
    "overflow": "👀",
    "overflow-y": "👀",
    "-webkit-overflow-scrolling": "👀",
    "-webkit-line-clamp": "👀",
    "background-color": "🖼",
    "background": "🖼",
    "background-image": "🖼",
    "background-repeat": "🖼",
    "background-position-x": "🖼",
    "background-position-y": "🖼",
    "background-size": "🖼",
    "color": "🖍",
    "cursor": "🐭",
    "max-width": "📐",
    "min-width": "📐",
    "min-height": "📐",
    "height": "📐",
    "width": "📐",
    "margin": "📐",
    "margin-top": "📐",
    "margin-right": "📐",
    "margin-bottom": "📐",
    "margin-left": "📐",
    "padding": "📐",
    "padding-top": "📐",
    "padding-right": "📐",
    "padding-bottom": "📐",
    "padding-left": "📐",
    "border": "🔳",
    "border-width": "🔳",
    "border-top": "🔳",
    "border-bottom": "🔳",
    "border-left": "🔳",
    "border-right": "🔳",
    "border-bottom-right-radius": "🔳",
    "border-bottom-left-radius": "🔳",
    "border-bottom-color": "🔳",
    "border-bottom-style": "🔳",
    "border-bottom-width": "🔳",
    "border-style": "🔳",
    "border-color": "🔳",
    "border-radius": "🔳",
    "box-shadow": "⬜️",
    "box-sizing": "📦",
    "list-style-type": "🔠",
    "text-decoration": "🔠",
    "line-height": "🔠",
    "text-align": "🔠",
    "text-transform": "🔠",
    "white-space": "🔠",
    "outline": "🔠",
    "outline-color": "🔳",
    "z-index": "👀",
    "align-items": "📦",
    "align-self": "📦",
    "justify-content": "📦",
    "appearance": "🔳",
    "pointer-events": "🐭",
    "transform": "📐",
    "opacity": "👀",
    "transition-property": "🏃🏻‍♂️",
    "transition-timing-function": "🏃🏻‍♂️",
    "transition-duration": "🏃🏻‍♂️",
  }

  return ICON_TYPES[key] || "🔹";
}

function UtilityListItem(props: { utility: Utility }) {
  const utility = props.utility;

  return (
    <List.Item
      id={utility.id}
      key={utility.id}
      title={utility.title}
      subtitle={utility.subtitle}
      icon={getIcon(utility.accessory)}
      accessoryTitle={utility.accessory}
      actions={
        <ActionPanel>
          {/* <CopyToClipboardAction title="Copy utility name" content={utility.title} />
          <CopyToClipboardAction title="Copy CSS" content={utility.subtitle} /> */}
          <CopyToClipboardAction title="Copy type" content={utility.accessory} />
        </ActionPanel>
      }
    />
  );
}

// Load CSS file, parse and return as JSON
function parseCSS() {
  const data = fs.readFileSync(CSS_FILE, {encoding:'utf8', flag:'r'});
  let JSONasString = ''
  let total = 0

  data.split('\n').forEach(line => {
    if (line.includes('{ ')) {
      total += 1
      line = line.replace(/^\./, '')
      line = line.replace(/\\/g, '')
      line = line.replace('{ ', '')
      line = line.replace(' }', '')
  
      const title = line.split(' ')[0]
      let subtitle = line.split(' ').slice(1).join(' ')
      const accessory = subtitle.split(':')[0]
  
      subtitle = subtitle.replace(/"/g, '\'')
      subtitle = subtitle.replace(/;$/, '')
  
      JSONasString = JSONasString + `{
        "id": "${total}::${accessory}",
        "title": "${title}",
        "subtitle": "${subtitle}",
        "accessory": "${accessory}"\r
      },`
    }
  })

  JSONasString = `{
    "items": [
      ${JSONasString}
      { "title": "end" }
    ]
  }`

  return JSON.parse(JSONasString)
}

async function fetchUtilities(): Promise<Utility[]> {  
  try {
    const json = parseCSS()
    return (json as Record<string, unknown>).items as Utility[];  
  } catch (error) {
    console.error(error)
    showToast(ToastStyle.Failure, `Error loading CSS_FILE(${CSS_FILE})`);
    return Promise.resolve([]);
  }
}

type Utility = {
  id: string;
  title: string;
  subtitle: string;
  accessory: string;
};
