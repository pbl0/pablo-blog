import Link from "next/link";
import { CMS_NAME } from "../lib/constants";
import { useRouter } from 'next/router'
const Intro = () => {
  const router = useRouter()
  const url = router.asPath

  return (
    <section className="column my-6 my-link">
      <div className="columns">
        <div className="column">
          <Link href="/">
            <h1 className="title">pablo blog.</h1>
          </Link>
        </div>
        <div className="column">
          <div className="tabs is-centered">
            <ul>
              <li className={url=='/' || url.includes('posts') && url!='/posts/me' ?"is-active":""}>
                <Link href="/">
                  <a>blog</a>
                </Link>
              </li>
              <li className={url=='/posts/me'?"is-active":""}>
                <Link href='/posts/me'>
                  <a>me</a>
                </Link>
              </li>
              <li className={url=='/music'?"is-active":""}>
                <Link href="/music">
                  <a>music</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
