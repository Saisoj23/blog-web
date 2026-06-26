import { useContext } from "react";
import type { ArticleTemplate } from "./ARTICLES";
import { ChangeBlogContext } from "./ChangeSectionContext";

function Article(props: { article: ArticleTemplate }) {
  const changeBlog = useContext(ChangeBlogContext);
  return (
    <main className="flex flex-col flex-start flex-1">
      <button
        onClick={() => {
          changeBlog(0);
        }}
      >
        RETURN
      </button>
      <h2>{props.article.title}</h2>
      <h4>{props.article.excerpt}</h4>
      <p>{props.article.content}</p>
    </main>
  );
}

export default Article;
