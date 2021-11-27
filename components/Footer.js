import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => (
  <div footer className={styles.footer}>

    <p>
      Powered by {' '}
      <img src="/atv.svg" alt="logo" className={styles.logo2} />{(new Date().getFullYear())}
</p>

  </div>

)
export default Footer;