import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="title my-6">
      <Link href="/">
        <a className="has-text-white">pablo blog.</a>
      </Link>
    </h2>
  )
}

export default Header
