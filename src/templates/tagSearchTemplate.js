import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import "./blogTemplate.css";

const TagSearchTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } found tagged with "${tag}"`

  return (
    <Layout>
      <h1>{tagHeader}</h1>
        <div className="cardlist">
        {
            edges && edges.map((item, i)=>{
                let cardDetails  = item.node;
                return (
                    <Card cardDetails={cardDetails} key={i} >
                    </Card>
                )
            })
        }
        </div>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      {/* <Link to="/tags">All tags</Link> */}
    </Layout>
  );
};

export default TagSearchTemplate;

export const tagSearchQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date
            author
            playerCount
            tags
            thumbnailImage {
                childImageSharp {
                gatsbyImageData(height: 250)
                }
            }
            time
            type
            previewText
            isLightThemeCard
          }
          timeToRead
        }
      }
    }
  }
`