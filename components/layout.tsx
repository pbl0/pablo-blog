// import Alert from './alert'
import Bio from './bio'
import Container from './container'
import Footer from './footer'
import Intro from './intro'
import Meta from './meta'
import '@fortawesome/fontawesome-svg-core/styles.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>
          <Container>
            <div className="columns is-mobile">
              <Intro />
              <Bio/>
            </div>
            
          </Container>
          <hr />
          {children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
