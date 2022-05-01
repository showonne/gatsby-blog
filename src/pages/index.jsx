import React from "react"
import Icon from "../components/Icon"
import Layout from "../layout"

import * as styles from './index.module.less'

export default function Home () {

  return (
    <Layout>
      <div className={styles.pageIndex}>
        <div>
          <p className={styles.title}>Showo^^e</p>
          <div className={styles.icons}>
          <Icon type="github"></Icon>
          <Icon type="weibo"></Icon>
          <Icon type="zhihu"></Icon>
          </div>
        </div>
      </div>
    </Layout>
  )
}