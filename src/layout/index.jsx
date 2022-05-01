import React from 'react';
import Header from "../components/Header"
import './index.css'

function Layout({children}) {
  return (
    <div>
      <Header />
      <div className="layout-content">
      {children}
      </div>
    </div>
  );
}

export default Layout;
