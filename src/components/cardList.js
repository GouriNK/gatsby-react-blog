import React from "react";
import Card from "./card";

const CardList = ({blogPosts}) => {
    console.log('Here in CardList');
    console.log(blogPosts);
    return (
        <div>
        {
            blogPosts && blogPosts.map((item, i)=>{
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