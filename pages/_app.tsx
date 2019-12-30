import App from "next/app";
import React from "react";
import Amplify from "aws-amplify";
import config from "./aws-exports";

if (typeof window !== "undefined") Amplify.configure(config);

export default class WrapperApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}
