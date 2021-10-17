import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles['title-homepage']}>Welcome Dede</h1>
    </Layout>
  )
}
