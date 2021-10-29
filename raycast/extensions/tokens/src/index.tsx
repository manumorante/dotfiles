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
      {state.utilities.map((article) => (
        <UtilityListItem key={article.id} article={article} />
      ))}
    </List>
  );
}

function UtilityListItem(props: { article: Utility }) {
  const article = props.article;

  return (
    <List.Item
      id={article.id}
      key={article.id}
      title={article.title}
      subtitle={article.subtitle}
      icon="🔹"
      accessoryTitle={article.accessory}
      actions={
        <ActionPanel>
          <CopyToClipboardAction title="Copy utility name" content={article.title} />
          <CopyToClipboardAction title="Copy CSS" content={article.subtitle} />
          <CopyToClipboardAction title="Copy complete selector" content={`.${article.title} { ${article.subtitle} }`} />
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
