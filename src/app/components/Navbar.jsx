"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import LanguageSwitchLink from './LanguageSwitchLink'
import i18nextConfig from '../../../next-i18next.config'
import { useRouter } from 'next/router'
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const router = useRouter()
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t } = useTranslation();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

  const navLinks = [
    {
      title: t('about'),
      path: "#about",
    },
    {
      title: t('projects'),
      path: "#projects",
    },
    {
      title: t('contact'),
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <img className="h-10" src="/logo.png"></img>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            {i18nextConfig.i18n.locales.map((locale) => {
              if (locale === currentLocale) return null
              return (
                <LanguageSwitchLink
                  locale={locale}
                  key={locale}
                />
              )
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
