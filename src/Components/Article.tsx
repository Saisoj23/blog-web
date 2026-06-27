import { useContext } from "react";
import type { ArticleTemplate } from "./ARTICLES.ts";
import { ChangeBlogContext } from "./ChangeSectionContext";
import Button from "./Button";
import Image from "./Image";

function Article(props: { article: ArticleTemplate }) {
  const changeBlog = useContext(ChangeBlogContext);
  return (
    <>
      <Button
        content={"Volver"}
        callback={() => {
          changeBlog(0);
        }}
      />
      <h2 className="text-3xl mb-2">{props.article.title}</h2>
      <h4 className="text-lg font-bold mb-2">{props.article.excerpt}</h4>
      <Image
        fileName={"IMAGES/SCREENSHOTS/" + props.article.images[0]}
        alt=""
        className="bg-cover md:w-80 lg:w-100 max-w-11/12 m-2 inline-block self-center"
      />
      <p
        className="mt-3 mb-3"
        dangerouslySetInnerHTML={{ __html: props.article.content }}
      />
      <div className="self-center">
        <Image
          fileName={"IMAGES/SCREENSHOTS/" + props.article.images[1]}
          alt=""
          className="bg-cover md:w-80 lg:w-100 max-w-11/12 m-2 inline-block self-center"
        />
        <Image
          fileName={"IMAGES/SCREENSHOTS/" + props.article.images[2]}
          alt=""
          className="bg-cover md:w-80 lg:w-100 max-w-11/12 m-2 inline-block self-center"
        />
      </div>

      <div className="mt-10 mb-10 flex flex-col items-center self-center">
        <Image
          fileName={"IMAGES/LOGOS/" + props.article.logo}
          alt=""
          className="bg-cover w-11/12 md:w-70 lg:w-80"
        />
        <Button
          content="Descargar Gratis"
          callback={() => {
            window.open(props.article.gamelink, "_blank");
          }}
        />
      </div>
    </>
  );
}

export default Article;
