import { allBlogs } from "../../../.contentlayer/generated";
import Tag from "../tag";

export default function Tags(): JSX.Element {
  const tags = allBlogs.map((blog) => blog.tags).flat();
  const allTags = tags.filter((item, pos) => {
    return tags.indexOf(item) === pos;
  });

  return (
    <div className="flex flex-wrap">
      {allTags.map((tag, i) => (
        <div key={tag}>{tag ? <Tag idx={i} tag={tag} /> : null}</div>
      ))}
    </div>
  );
}
