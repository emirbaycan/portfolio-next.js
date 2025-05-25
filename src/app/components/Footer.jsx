import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <p className="text-slate-600">{t('footer_rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
