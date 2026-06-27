import { useContext, useState } from "react";
import { ChangeBlogContext } from "./ChangeSectionContext";
import { ARTICLES, type ArticleTemplate } from "./ARTICLES.ts";
import Article from "./Article";
import ArticleCard from "./ArticleCard";

function Blog() {
  const [blogId, setBlogId] = useState(0);
  let changeBlog = useContext(ChangeBlogContext);

  changeBlog = (blog: number) => {
    setBlogId(blog);
  };

  return (
    <ChangeBlogContext value={changeBlog}>
      <main className="flex flex-col items-start flex-1 p-4">
        {blogId === 0 ? (
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
            {ARTICLES.map((post) => (
              <ArticleCard
                title={post.title}
                excerpt={post.excerpt}
                thumbnail={post.thumbnail}
                callback={() => {
                  changeBlog(post.id);
                }}
              />
            ))}
          </div>
        ) : (
          <Article article={ARTICLES.at(blogId - 1) as ArticleTemplate} />
        )}
      </main>
    </ChangeBlogContext>
  );
}

export default Blog;
