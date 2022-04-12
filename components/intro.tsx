import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="column my-6 my-link">
      <Link href="/">
        <h1 className="title">
          pablo blog.
        </h1>
      </Link>

    </section>
  )
}

export default Intro
