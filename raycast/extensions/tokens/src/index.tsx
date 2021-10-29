import { ActionPanel, CopyToClipboardAction, List, showToast, ToastStyle } from "@raycast/api";
import { useState, useEffect } from "react";
import fs from "fs";

const LOCAL_JSON = "/Users/manu/projects/dotfiles/raycast/scripts/tokens.json"

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

async function fetchUtilities(): Promise<Utility[]> {
  if (fs.existsSync(LOCAL_JSON)) {
    try {
      const response = fs.readFileSync(LOCAL_JSON, {encoding:'utf8', flag:'r'});
      const json = JSON.parse(response);
      return (json as Record<string, unknown>).items as Utility[];
    } catch (error) {
      console.error(error);
      showToast(ToastStyle.Failure, "Could not load items");
      return Promise.resolve([]);
    }
  } else {
    showToast(ToastStyle.Failure, `Error loading file(${LOCAL_JSON})`);
    return Promise.resolve([]);
  }
}

type Utility = {
  id: string;
  title: string;
  subtitle: string;
  accessory: string;
};
