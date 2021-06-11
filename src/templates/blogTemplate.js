import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogTemplate = ({ data }) => {
  console.log(data);
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  return (
    <Layout>
      <div>{frontmatter.title}</div>
      <div>{frontmatter.slug}</div>
      <div>{frontmatter.author}</div>
      <div>{frontmatter.date}</div>
      <div>{frontmatter.tags}</div>
      <div>{timeToRead}</div>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default BlogTemplate;

export const blogQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      html
      frontmatter {
        author
        date
        slug
        time
        playerCount
        type
        tags
        title
      }
    }
  }
`;