import React from 'react';
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout';
import './index.less';

function Post({data}) {
  return (
    <Layout>
      <div className="page-article">
        <p className="article-title">{data.mdx.frontmatter.title}</p>
        <p style={{margin: '10px 0'}}>{data.mdx.frontmatter.date}</p>
        <div className="article-content">
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
    </Layout>
  );
}

export default Post;

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`