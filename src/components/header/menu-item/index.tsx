import * as React from 'react';

import './styles.less';

type Props = {
    label: string;
}

function MenuItem({ label }: Props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="/">{label}</a>
    </li>
  );
}

export default MenuItem;
