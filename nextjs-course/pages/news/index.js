import Link from "next/link";
import { Fragment } from "react";

// our-domain.com/news
function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">
            NextJS is a great framework!
          </Link>
        </li>
        <li>NextJS is a framework!</li>
        <li>NextJS is great!</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
