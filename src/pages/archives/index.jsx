import React, { useEffect } from 'react';
import { graphql } from "gatsby"
import { Link } from 'gatsby';
import slugify from '@sindresorhus/slugify';

import * as styles from './index.module.less';
import Layout from '../../layout';

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          date,
          title
        },
        slug
      }
    }
  }
`

function Archives({data}) {
  console.log(data)
  const { allMdx } = data
  const { nodes } = allMdx

  return (
    <Layout>
      <div className={styles.pageArchive}>
        <div className={styles.archiveList}>
          {
            nodes.map((item, index) => (
              <Link className={styles.listItem} key={index} to={`/post/${slugify(item.slug)}`}>
                <span className={styles.itemTitle}>{item.frontmatter.title}</span>
                <span className={styles.itemDate}>{item.frontmatter.date}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  );
}

export default Archives;
