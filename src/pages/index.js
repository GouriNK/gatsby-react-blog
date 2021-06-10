import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout";
import CardList from "../components/cardList";
// import Seo from "../components/seo";

import '../styles/index.css'

const IndexPage = () => {

  const { allMarkdownRemark } = useStaticQuery (
    graphql `
      query {
        allMarkdownRemark {
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
                    gatsbyImageData(width: 200)
                  }
                }
                time
                type
              }
              timeToRead
            }
          }
        }
      }
    `
  );  

  console.log('here in index page');
  console.log(allMarkdownRemark);

  return (
    <Layout>
      {/* <Seo title="Home" /> */}
      <div>
        <CardList blogPosts={allMarkdownRemark.edges}/>
      </div>
      
    
    </Layout>
  )
}
  
export default IndexPage;
