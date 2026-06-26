import { useContext, useState } from "react";
import { ChangeBlogContext } from "./ChangeSectionContext";
import { ARTICLES, type ArticleTemplate } from "./ARTICLES";
import Article from "./Article";

function Blog() {
  const [blogId, setBlogId] = useState(0);
  let changeBlog = useContext(ChangeBlogContext);

  changeBlog = (blog: number) => {
    setBlogId(blog);
  };

  return (
    <ChangeBlogContext value={changeBlog}>
      <main className="flex flex-col flex-start flex-1">
        {blogId === 0 ? (
          <ul>
            {" "}
            {ARTICLES.map((post) => (
              <li
                key={post.id}
                onClick={() => {
                  console.log(post.id);
                  changeBlog(post.id);
                }}
              >
                {post.title}
              </li>
            ))}{" "}
          </ul>
        ) : (
          <Article article={ARTICLES.at(blogId - 1) as ArticleTemplate} />
        )}
      </main>
    </ChangeBlogContext>
  );
}

export default Blog;
