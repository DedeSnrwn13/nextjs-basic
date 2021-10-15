import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Header from './../components/Header/index';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>Welcome Dede</h1>
    </div>

  )
}

export default Home
