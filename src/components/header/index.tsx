import * as React from 'react';
import * as Logo from '@assets/Logo.png';
import Menu from './menu';
import './styles.less';

function Header() {
  return (
    <div className="header">
      <img src={Logo.default} alt="logo" />
      <Menu />
    </div>
  );
}

export default Header;
