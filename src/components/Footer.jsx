import React from "react";

const Footer = () => (
  <footer className="bg-slate-950 py-8 border-t border-slate-900">
    <p className="text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} DevPortfolio
    </p>
  </footer>
);

export default Footer;