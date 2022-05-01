import { Link } from 'gatsby';
import React from 'react';

import * as styles from './index.module.less';

function Header() {
  return (
    <div className={styles.pageHeader} style={{position: 'fixed', width: '100%', top: 0}}>
      <Link to="/">
        Index
      </Link>
      <Link to="/archives">
        Archives
      </Link>
      <Link to="/links">
        Links
      </Link>
    </div>
  );
}

export default Header;
