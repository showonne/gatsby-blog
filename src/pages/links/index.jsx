import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../../layout';
import * as styles from './index.module.less';

const dataSource = {
  '工具': [
    ['正则', 'https://regexper.com/#'],
    ['历史版本Chrome下载', 'https://chromium.cypress.io/'],
    ['生成border-radius', 'https://9elements.github.io/fancy-border-radius/full-control.html'],
    ['画图用', 'https://excalidraw.com/'],
    ['hex-rgb', 'https://www.webfx.com/web-design/hex-to-rgb/'],
    ['渐变色', 'https://uigradients.com/']
  ],
  '电子书': [
    ['ES6 入门教程', 'https://es6.ruanyifeng.com/'],
    ['JavaScript Promise迷你书', 'http://liubin.org/promises-book/#introduction']
  ],
  '文章': [
    ['build-your-own-react', 'https://pomb.us/build-your-own-react/']
  ]
}

function Links() {
  const [source, setSource] = useState({})

  const tabs = useMemo(() => {
    return Object.keys(source)
  }, [source])

  useEffect(() => {
    const tags = Object.keys(dataSource)
    const map = {
      全部: []
    }
    for (let tag of tags) {
      const currentList = dataSource[tag]
      map[tag] = currentList
      map['全部'].push(...currentList)
    }
    setSource(map)
    console.log(map)
  }, [])

  return (
    <Layout>
      <div className={styles.linksPage}>
        <div>
          {
            source['全部']?.map((item, index) => (
              <div key={index}>
                <a className={styles.linkItem} href={item[1]} target="_blank">{item[0]}</a>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  );
}

export default Links;
