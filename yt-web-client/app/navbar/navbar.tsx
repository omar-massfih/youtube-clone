'use client';

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import Signin from "./sign-in";
import { useEffect, useState } from "react";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";
import Upload from "./upload";

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    });

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image height={20} width={90}
                    className={styles.logo}
                    src="/youtube-logo.svg" alt="Youtube logo" />
            </Link>
            {
                user && <Upload />
            }
            <Signin user={user} />
        </nav>
    );
}