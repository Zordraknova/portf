import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import '../styles/head.css';
import'../styles/about.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
   <Header />
  <Component {...pageProps} />
  </>
  )}

export default MyApp
