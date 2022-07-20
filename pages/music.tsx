import Container from "../components/container";
import Layout from "../components/layout";

import Head from "next/head";

import { config, dom } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <style>{dom.css()}</style>
          <title>Music | pablo blog.</title>
        </Head>
        <Container>
          <div className="columns is-mobile is-centered">
            <div className=" column is-half">
              The playlists I enjoy listening:
            </div>
          </div>

          <div className="principal">
            <iframe
              title="deezer-widget"
              src="https://widget.deezer.com/widget/dark/playlist/9985957262"
              width="100%"
              height="300"
              allow="encrypted-media; clipboard-write"
            ></iframe>
            <iframe
              title="deezer-widget"
              src="https://widget.deezer.com/widget/dark/playlist/10362466642"
              width="100%"
              height="300"
              allow="encrypted-media; clipboard-write"
            ></iframe>
            <iframe
              title="deezer-widget"
              src="https://widget.deezer.com/widget/dark/playlist/8024939502"
              width="100%"
              height="300"
              allow="encrypted-media; clipboard-write"
            ></iframe>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
