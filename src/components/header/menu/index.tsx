import * as React from 'react';
import MenuItem from '../menu-item';

import './styles.less';

function Menu() {
  const menuLabels = ['Специалисты', 'Клиники', 'Партнерам'];

  return (
    <ul className="nav">
      {
        menuLabels.map((item: string) => (
          <MenuItem label={item} key={item} />
        ))
      }
    </ul>
  );
}

export default Menu;
