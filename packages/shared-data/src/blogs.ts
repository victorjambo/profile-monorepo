/**
 * In future change these blog post to markdown.
 */

import { IBlog } from "models";

export const blogs: IBlog[] = [
  {
    id: 1,
    title: "Local Storage vs Cookies",
    href: "https://victorjambo.medium.com/local-storage-vs-cookies-b80cb9d50a40",
    description:
      "One of the popular questions I’ve seen in developer forums is, where do I store the JWT token to manage sessions. There are 2 ways you could store JWT or any other auth tokens, LocalStorage or cookie. Both have their pros & cons but they are vulnerable to XSS attacks.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "Don’t forget content type",
    href: "https://victorjambo.medium.com/dont-forget-content-type-97a1c0ecc5fb",
    description:
      "Giving back JSON responses from the backends directly to the browser is pretty common and simple. However, there are a few things to keep in mind",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
  },
  {
    id: 3,
    title: "Dealing with Spam Signups",
    href: "https://victorjambo.medium.com/dealing-with-spam-signups-a08e8f9d2dd1",
    description:
      "Imagine working on a site like Netflix where you provide free user signup and paid subscriptions. The free signup is there to attract more users to use the product and eventually activate them to paying users. The problem is when some users start automating account creation to use for their own “good”.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
  },
  // TODO 🌱 This post is in the growth phase. It may still be useful as it grows up.
  // {
  //   id: 4,
  //   title: "target=“blank” - underrated vulnerability",
  //   description:
  //     "Target attribute is used to specify where the to open a link. The most common usage of target is target=“_blank“ which tells the browser to open a new window or a new tab.",
  //   date: "Jan 29, 2020",
  //   datetime: "2020-01-29",
  // },
  // {
  //   id: 5,
  //   title: "Blockchain the future of philanthropy",
  //   description:
  //     "Blockchain has a lot of merits when it comes to Donations and the collection of funds. Using blockchain all the donations received are added as transactions in the chain.",
  //   date: "Jan 29, 2020",
  //   datetime: "2020-01-29",
  // },
];
