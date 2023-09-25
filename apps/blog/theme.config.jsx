export default {
  footer: (
    <div className="flex justify-between px-6 md:px-11 py-5 border-t items-center">
      <div className="text-xs">Built by Victor Mutai</div>
    </div>
  ),
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "More →",
  postFooter: null,
  darkMode: true,
  navs: [
    {
      url: "https://github.com/shuding/nextra",
      name: "Nextra",
    },
  ],
};
