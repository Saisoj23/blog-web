import { useContext } from "react";
import type { ArticleTemplate } from "./ARTICLES";
import { ChangeBlogContext } from "./ChangeSectionContext";
import Button from "./Button";

function Article(props: { article: ArticleTemplate }) {
  const changeBlog = useContext(ChangeBlogContext);
  return (
    <main className="">
      <Button
        content={"Volver"}
        callback={() => {
          changeBlog(0);
        }}
      />
      <h2>{props.article.title}</h2>
      <h4>{props.article.excerpt}</h4>
      <p>{props.article.content}</p>
    </main>
  );
}

export default Article;
