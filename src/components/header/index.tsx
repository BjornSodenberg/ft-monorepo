import * as React from 'react';
import * as Logo from '@assets/Logo.png';
import './styles.less';

function Header() {
  return (
    <div className="header">
      <img src={Logo.default} alt="logo" />

    </div>
  );
}

export default Header;
