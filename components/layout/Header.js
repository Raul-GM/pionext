import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/login">Login</Link>
                <Link href="/register">Regístrate</Link>
            </nav>
        </header>
    );
}

export default Header;