import Navbar from "../../components/navbar";
import Side from "../../components/side";

const posts = [
  {
    title: "Local Storage vs Cookies",
    href: "https://victorjambo.medium.com/local-storage-vs-cookies-b80cb9d50a40",
    description:
      "One of the popular questions I’ve seen in developer forums is, where do I store the JWT token to manage sessions. There are 2 ways you could store JWT or any other auth tokens, LocalStorage or cookie. Both have their pros & cons but they are vulnerable to XSS attacks.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    title: "Don’t forget content type",
    href: "https://victorjambo.medium.com/dont-forget-content-type-97a1c0ecc5fb",
    description:
      "Giving back JSON responses from the backends directly to the browser is pretty common and simple. However, there are a few things to keep in mind",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
  },
  {
    title: "Dealing with Spam Signups",
    href: "https://victorjambo.medium.com/dealing-with-spam-signups-a08e8f9d2dd1",
    description:
      "Imagine working on a site like Netflix where you provide free user signup and paid subscriptions. The free signup is there to attract more users to use the product and eventually activate them to paying users. The problem is when some users start automating account creation to use for their own “good”.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
  },
  {
    title: "target=“blank” - underrated vulnerability",
    href: "/",
    description:
      "Target attribute is used to specify where the to open a link. The most common usage of target is target=“_blank“ which tells the browser to open a new window or a new tab.",
    date: "Jan 29, 2020",
    datetime: "2020-01-29",
  },
  {
    title: "Blockchain the future of philanthropy",
    href: "/",
    description:
      "Blockchain has a lot of merits when it comes to Donations and the collection of funds. Using blockchain all the donations received are added as transactions in the chain.",
    date: "Jan 29, 2020",
    datetime: "2020-01-29",
  },
];

const BlogView: React.FC = () => {
  return (
    <>
      <Navbar />
      <Side />
      <div className="h-full pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
              <span className="text-red-400">[Work in Progress]</span>
            </h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-gray-500">
                keep learning 📚 learning notes and blogs
              </p>
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
                <div className="mt-3">
                  <a
                    href={post.href}
                    className="text-base font-semibold text-sky-50 dark:text-green"
                  >
                    Read full story
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogView;
