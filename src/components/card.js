import React from "react";
import ScheduleIcon from '@material-ui/icons/Schedule';
import GroupIcon from '@material-ui/icons/Group';
import "./card.css";

const Card = () => {
    return (
        <div className="card">
            <img 
                className="card-image"
                src="http://www.3forty.media/ruki/wp-content/uploads/2020/06/meditation-yoga-1024x682.jpg" 
                alt="thumbnail" 
                loading="lazy"
            ></img>
            <div className="card-type-time">
                <span className="card-type">Type Name</span>
                <span className="card-time">
                    <ScheduleIcon className="card-time-icon"/>
                    <p>Time</p>
                </span>
            </div>
            <div className="card-heading">
                <h1>
                    <a href="#"> JIT Mode - A faster, more powerful</a>
                </h1>
            </div>
            <div className="card-content">
                <p>
                    Tailwind CSS v2.1 introduces a new just-in-time compiler for Tailwind CSS that generates your styles on-demand...
                </p>
                <a href="#">
                    Read More...
                </a>
            </div>
            <div className="card-footer">
                <div className="card-footer-wrapper">
                    <div className="card-footer-left">
                        <div>
                            <p className="card-tags">#tag1 #tag2 #tag3</p>
                            <p className="card-time-to-read">2 min read</p>
                        </div>
                    </div>
                    <div className="card-footer-right">
                        <div>
                            <GroupIcon className="card-user-icon"/>
                            <p className="card-number-of-users">10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;