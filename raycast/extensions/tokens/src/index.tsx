import { ActionPanel, CopyToClipboardAction, List, showToast, ToastStyle } from "@raycast/api";
import { useState, useEffect } from "react";
import fetch from "node-fetch";
import fs from "fs";

const SERVER_JSON = "http://localhost:2222/tokens.json"
const LOCAL_JSON = "/Users/manu/projects/dotfiles/raycast/scripts/tokens.json"
// const PASSWORDS = `${os.homedir()}/Library/Containers/com.agilebits.onepassword7/Data/Library/Caches/Metadata/1Password`;

export default function ArticleList() {
  const [state, setState] = useState<{ articles: Article[] }>({ articles: [] });

  useEffect(() => {
    async function fetch() {
      const articles = await fetchArticles();
      setState((oldState) => ({
        ...oldState,
        articles: articles,
      }));
    }
    fetch();
  }, []);

  return (
    <List isLoading={state.articles.length === 0} searchBarPlaceholder="Filter ...">
      {state.articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </List>
  );
}

function ArticleListItem(props: { article: Article }) {
  const article = props.article;

  return (
    <List.Item
      id={article.id}
      key={article.id}
      title={article.title}
      subtitle={article.subtitle}
      icon="list-icon.png"
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

async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await fetch(SERVER_JSON);
    const json = await response.json();
    return (json as Record<string, unknown>).items as Article[];
  } catch (error) {
    console.error(error);
    showToast(ToastStyle.Failure, "Could not load items");
    return Promise.resolve([]);
  }
}

type Article = {
  id: string;
  title: string;
  subtitle: string;
  accessory: string;
};
