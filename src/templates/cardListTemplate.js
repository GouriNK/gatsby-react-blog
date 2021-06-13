import React from "react";
import Layout from "../components/layout";
import Card from "../components/card";
import { graphql } from "gatsby";
import "./cardListTemplate.css";

const CardListTemplate = ({ data }) => {

    const cardList = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <div className="cardlist">
            {
                cardList && cardList.map((item, i)=>{
                    let cardDetails  = item.node;
                    return (
                        <Card cardDetails={cardDetails} key={i} >
                        </Card>
                    )
                })
            }
            </div>
         </Layout>
    );
  };
  
  export default CardListTemplate;

  export const cardListQuery = graphql`
    query ($type: String!) {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: $type}}})  {
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
  `;