import Head from "next/head";
import CONSTANTS from "../constants";

const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta charset="utf-8" />
      {/*<link rel="shortcut icon" href="/static/favicon.png" />*/}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <title>{CONSTANTS.APP_NAME}</title>
    </Head>
  );
};

export default Meta;