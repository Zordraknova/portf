import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';

import styles from '../styles/Home.module.css'

const Header = () => (
    <div style={{
        margin: '1%'
    }}>
        <Head>
            <title>NovelDisign</title>
            <link rel="icon" href="/favicon.ico" />
            <meta httpEquiv="origin-trial" content="Atv2rqwECDfPdkFmVuPiTuqHgpBiTKsMer5d0IUfGyevhuVaHzAeD3CKzERXuRSe0YG7RdN55F1yftFWffhODQsAAAB5eyJvcmlnaW4iOiJodHRwczovL3d3dy55b3V0dWJlLmNvbTo0NDMiLCJmZWF0dXJlIjoiVW5yZXN0cmljdGVkU2hhcmVkQXJyYXlCdWZmZXIiLCJleHBpcnkiOjE2MzM0NzgzOTksImlzU3ViZG9tYWluIjp0cnVlfQ=="/>
        </Head>

        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <span>
             <img src="/atv.svg" alt="ATV Logo" className={styles.logo2} />
            <Navbar.Brand href="/">NovelDisign</Navbar.Brand>
            <NavLink className="navbar-brand" href="/works">Works</NavLink>
            </span>
        </Navbar>
    </div>
);

export default Header;