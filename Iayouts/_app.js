import '../styles/globals.css';
import Layout from '../layouts/layout';  // Assure-toi que le chemin est correct

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
