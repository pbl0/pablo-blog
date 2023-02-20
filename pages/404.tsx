import Container from "../components/container";
import Layout from "../components/layout";

import Head from "next/head";

import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

config.autoAddCss = false;

const NotFoundPage = () => {
  return (
    <>
      <div className="has-text-centered mt-6">
        <h1 className="title is-1">
          404 | This page could not be found.{" "}
          <Link href="/">Bring me back</Link>
        </h1>
      </div>
    </>
  );
};

export default NotFoundPage;
