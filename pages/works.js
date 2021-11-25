let PLID = "PL_bFnI4QqU3fGD4LOMDmmlbPrXo79pmRU";

import Head from 'next/head';
import Image from 'next/image'
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${PLID}&maxResults=290&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Eco({ data }) {
  return (

    <div
 style={{
                backgroundImage:
                    "url(" + `${require("../public/background.jpg")}` + ")",
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
>


      <div className={styles.container}>
        <Head>
          <title>example</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            VIDEO
          </h1>
          <h2 className={styles.title}>__________</h2>
          <ul className={styles.grid}>
            {data.items.map(({ id, snippet = {} }) => {
              const { title, thumbnails = {}, resourceId = {} } = snippet;
              const { medium = {} } = thumbnails;
              return (
                <li key={id} className={styles.card}>
                  <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                    <p>
                      <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                    </p>
                    <h3>{title}</h3>
                  </a>
                </li>
              )
            })}
          </ul>
        </main>
        <hr />
        <Footer />
      </div>
    </div>
  )
}
