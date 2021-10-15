import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Header from './../components/Header/index';
import Footer from './../components/Footer/index';

const Home: NextPage = () => {
  return (
    <div>
      <Header />

      <h1 className={styles['title-homepage']}>Welcome Dede</h1>

      <Footer />
    </div>

  )
}

export default Home
