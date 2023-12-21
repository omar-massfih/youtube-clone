import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image height={20} width={90}
                    className={styles.logo}
                    src="/youtube-logo.svg" alt="Youtube logo" />
            </Link>
        </nav>
    );
}