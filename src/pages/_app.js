import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
