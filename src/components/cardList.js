import React from "react";
import Card from "./card";
import { graphql, useStaticQuery } from 'gatsby';
import "./cardList.css";

const CardList = (type) => {

    console.log("in CardList : ", type);

    const { allMarkdownRemark } = useStaticQuery (
        graphql `
            query {
            allMarkdownRemark  {
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
    );  

    const cardList = allMarkdownRemark.edges;

    return (
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
    );
}

export default CardList;