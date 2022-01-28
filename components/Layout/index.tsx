import { ReactNode } from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import styles from './Layout.module.css';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Index(props: LayoutProps) {
    const { children, pageTitle } = props;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Website nextjs basic" />
            </Head>

            <div className={styles.container}>
                <Header />

                <div className={styles.content}>{children}</div>

                <Footer />
            </div>
        </>
    )
}
