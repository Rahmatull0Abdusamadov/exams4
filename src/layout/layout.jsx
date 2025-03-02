import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import DarkModeToggle from "../companents/darkmode/darkmode";

const Layout = () => {
  const {t, i18n} = useTranslation();
  function TranslateClick(lang) {
      i18n.changeLanguage(lang);
  }
  return (
    <div>
      <header className="header">
        <div className="logo">amaz<span>markets</span></div>
        <nav className="nav">
          <NavLink to="/" activeClassName="active">{t("Home.1")}</NavLink>
          <NavLink to="/sell-account" activeClassName="active">{t("Home.2")}</NavLink>
          <NavLink to="/services" activeClassName="active">{t("Home.3")}</NavLink>
          <NavLink to="/blog" activeClassName="active">{t("Home.4")}</NavLink>
          <NavLink to="/search" activeClassName="active">{t("Home.5")}</NavLink>
        </nav>
        <div className="language-switcher">
          <span className="active-lang" onClick={() => TranslateClick("en")}>En</span>
          <span onClick={() => TranslateClick("ru")}>Ru</span>
          <span onClick={() => TranslateClick("tj")}>Tj</span>
          {/* <DarkModeToggle/> */}
        </div>  
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer className="footer">
        <div className="footer-left">
          <div className="logo">amaz<span>markets</span></div>
          <ul>
            <li>Buy Account</li>
            <li>Sell Account</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-center">
          <p>Email:</p>
          <p>support@amaz.markets</p>
          <p>Follow Us:</p>
          <div className="social-icons">
          </div>
        </div>
        <div className="footer-right">
          <p>Contact Us:</p>
          <input type="email" placeholder="Enter your email to stay updated" />
          <button>Submit</button>
          <div className="payment-methods">
          </div>
        </div>
        <div className="footer-bottom">AmazMarket © 2020 - All Rights Reserved</div>
      </footer>
    </div>
  );
};

export default Layout;