import Link from 'next/link'

const Header = () => {
  return (
    <h1 className="title my-6">
      <Link href="/">
        <a>pablo blog.</a>
      </Link>
      
    </h1>
  )
}

export default Header
