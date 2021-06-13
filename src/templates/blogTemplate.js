import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ScheduleIcon from '@material-ui/icons/Schedule';
import GroupIcon from '@material-ui/icons/Group';
import "./blogTemplate.css";

const BlogTemplate = ({ data }) => {
  console.log(data);
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <div className="blog">
        <ul className="blog-tags">
          {frontmatter.tags.map((value, index) => {
            return <li key={index}>
              <Link className="blog-tag" to={`/tags/${value}`}>{`#${value}`}</Link>
            </li>
          })}
        </ul>
        <div className="blog-heading">
            <h1>{frontmatter.title}</h1>
        </div>
        <div className="blog-meta">
          <span className="blog-meta-author">{frontmatter.author}</span>
          <span className="blog-meta-date">{frontmatter.date}</span>
          <span className="blog-meta-timetoread">{timeToRead} min read</span>
        </div>
        <GatsbyImage 
            className="blog-landscape-image"
            image={getImage(frontmatter.landingImage)} 
            alt={frontmatter.title}
        />
        <div className="blog-item-meta">
          <div className="blog-item-time">
            <div><ScheduleIcon/></div>
            <div>{frontmatter.time}</div>
          </div>
          <div className="blog-item-count">
            <div><GroupIcon/></div>
            <div>{frontmatter.playerCount}</div>
          </div>
        </div>
        <div className="blog-data" dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      </div>
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
        landingImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;