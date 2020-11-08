import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map((badge) => {
                        return(
                            <li  key={badge.id}>
                                <div className="BadgesListItem">
                                    <img src={badge.avatarUrl} className="BadgesListItem__avatar"></img>
                                    <div className="BadgesData">
                                        <p className="Name">{badge.firstName} {badge.lastName}</p>
                                        <p className="Twitter">@{badge.twitter}</p>
                                        <p>{badge.jobTitle}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default BadgesList;