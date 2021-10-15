import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li><Link href="/users"><a>Users</a></Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Home
