import { ReactNode } from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

export default function Index(props: LayoutProps) {
    const { children } = props;

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.content}>{children}</div>

            <Footer />
        </div>
    )
}
