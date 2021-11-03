import { ActionPanel, PasteAction, Icon, List, showToast, ToastStyle } from "@raycast/api";
import { useState, useEffect } from "react";

import fs from "fs";

const CSS_FILE = '/Users/manu/projects/frontend/packages/styles/src/grid/base.css'


const DEFAULT_NOT_CAT = {
  "name": "Not category",
  "icon": "⬜️"
}

const PROPS_CATEGORIES = [
  {
    "name": "Text",
    "icon": "🔠",
    "props": ["font-family", "font-size", "font-weight", "list-style-type", "text-decoration", "line-height", "text-align", "text-transform", "white-space", "outline"]
  },
  {
    "name": "Box model",
    "icon": "📦",
    "props": ["display", "flex-direction", "flex-wrap", "flex-flow", "flex", "flex-basis", "column-gap", "row-gap", "box-sizing", "align-items", "align-self", "justify-content", "-webkit-box-orient"]
  },
  {
    "name": "Position",
    "icon": "📍",
    "props": ["position", "top", "right", "bottom", "left"]
  },
  {
    "name": "Visibility",
    "icon": "👀",
    "props": ["overflow", "overflow-y", "z-index", "opacity"]
  },
  {
    "name": "Background",
    "icon": "🖼",
    "props": ["background-color", "background", "background-image", "background-repeat", "background-position-x", "background-position-y", "background-size"]
  },
  {
    "name": "Color",
    "icon": "🖍",
    "props": ["color"]
  },
  {
    "name": "Manipulation",
    "icon": "🔧",
    "props": ["transform", "transition-property", "transition-timing-function", "transition-duration"]
  },
  {
    "name": "FX",
    "icon": "✨",
    "props": ["cursor", "box-shadow", "border", "border-width", "border-top", "border-bottom", "border-left", "border-right", "border-bottom-right-radius", "border-bottom-left-radius", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-style", "border-color", "border-radius", "outline-color", "appearance", "pointer-events"]
  },
  {
    "name": "Dimensions",
    "icon": "📐",
    "props": ["max-width", "min-width", "min-height", "height", "width", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left"]
  },
]

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
    <List isLoading={state.utilities.length === 0} searchBarPlaceholder="Search by name or prop ...">
      {state.utilities.map((utility) => (
        <UtilityListItem key={utility.id} utility={utility} />
      ))}
    </List>
  );
}

// Search prop in our categories list
// - if found, return the category
// - if not found, return the default category
function getPropCategory(prop: string ) {
  const filterCat = PROPS_CATEGORIES.filter((category) => {
    return category.props.includes(prop)
  })
  return (filterCat.length > 0) ? filterCat[0] : DEFAULT_NOT_CAT
}

function UtilityListItem(props: { utility: Utility }) {
  const utility = props.utility;
  const cat = getPropCategory(utility.accessory)

  return (
    <List.Item
      id={utility.id}
      key={utility.id}
      title={utility.title}
      subtitle={utility.subtitle}
      icon={cat.icon}
      accessoryTitle={`${utility.accessory} ${cat.name}`}
      keywords={[utility.accessory, cat.name]}
      actions={
        <ActionPanel>
          <PasteAction icon={Icon.Hammer} title="Paste utility" content={utility.title} />
          <PasteAction icon={Icon.Gear} title="Paste CSS" content={utility.subtitle} />
          <PasteAction title="Paste category name" content={cat.name} />
          <PasteAction title="Paste category icon" content={cat.icon} />
        </ActionPanel>
      }
    />
  );
}

// Load file, parse and return as JSON
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

      // Remove `var()`
      subtitle = subtitle.replace(/var\(/g, '')
      subtitle = subtitle.replace(/\)/g, '')
  
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
