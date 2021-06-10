import React from "react";
import ScheduleIcon from '@material-ui/icons/Schedule';
import GroupIcon from '@material-ui/icons/Group';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./card.css";

const Card = ({cardDetails}) => {

    console.log(cardDetails);

    const cardHeader = cardDetails.frontmatter;
    const thumbnail = getImage(cardHeader.thumbnailImage);

    let tagString = "";

    for (const [index, value] of cardHeader.tags.entries()) {
        tagString = tagString + `#${value} `;
    }

    return (
        <div className="card">
            <GatsbyImage 
                className="card-image"
                image={thumbnail} 
                alt={cardHeader.title}
            />
            <div className="card-type-time">
                <span className="card-type">{cardHeader.type}</span>
                <span className="card-time">
                    <ScheduleIcon className="card-time-icon"/>
                    <p>{cardHeader.time}</p>
                </span>
            </div>
            <div className="card-heading">
                <h1>
                    <Link to={cardHeader.slug}>
                    {cardHeader.title}
                    </Link>
                </h1>
            </div>
            <div className="card-content">
                <p>{cardHeader.previewText}</p>
                <Link to={cardHeader.slug}>
                    Read More...
                </Link>
            </div>
            <div className="card-footer">
                <div className="card-footer-wrapper">
                    <div className="card-footer-left">
                        <div>
                            <p className="card-tags"><b>{tagString}</b></p>
                            <p className="card-time-to-read">{cardDetails.timeToRead} min read</p>
                        </div>
                    </div>
                    <div className="card-footer-right">
                        <div>
                            <GroupIcon className="card-user-icon"/>
                            <p className="card-number-of-users">{cardHeader.playerCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;