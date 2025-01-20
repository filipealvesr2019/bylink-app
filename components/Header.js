// components/Header.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/" className="navbar-item">
          <strong className="has-text-white is-size-4">LinkTree Pro</strong>
        </Link>

        <a
          role="button"
          className={`navbar-burger has-text-white ${isMenuOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link href="/dashboard" className="navbar-item has-text-white">
            Dashboard
          </Link>
          <Link href="/about" className="navbar-item has-text-white">
            Sobre
          </Link>
          <Link href="/contact" className="navbar-item has-text-white">
            Contato
          </Link>
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light is-outlined">
                <strong>Compartilhar Página</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
