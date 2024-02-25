import { InfoPost } from "@/app/lib/definitions";
import "./styles.css";

export const InfoPosts = ({ data }: { data: InfoPost[] }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      {data.map((post: InfoPost) => {
        return (
          <article
            key={post.id}
            className="flex flex-col flex-1 gap-6 overflow-hidden rounded-4xl bg-white p-6 pb-6 dark:bg-gray-950"
          >
            <header className="text-center">
              <h2 className="text-xl text-black font-sans font-semibold dark:text-white">
                {post.title.rendered}
              </h2>
            </header>
            <div
              className="wp-post-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <footer className="mt-auto pt-8">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Publicerad {showDate(post.date)}
              </p>
            </footer>
          </article>
        );
      })}
    </div>
  );
};

const showDate = (timeStr: string) => {
  let date = new Date(timeStr);
  return date.toLocaleDateString();
};
