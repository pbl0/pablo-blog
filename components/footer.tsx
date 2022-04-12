import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    
    <footer className="">
      <hr />
      <Container>
        <div className="">
          <p className="has-text-centered">
          © 2021 <Link href="https://github.com/pbl0">Pablo</Link> 
          </p>
          <div className="has-text-centered">
            <p className='has-text-grey'>
              Source code at <Link href="https://github.com/pbl0/pablo-blog">github</Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
