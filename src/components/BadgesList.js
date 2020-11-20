import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

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
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <div className="BadgesListItem">
                                        <Gravatar email={badge.email} className="BadgesListItem__avatar"/>
                                        <div className="BadgesData">
                                            <p className="Name">{badge.firstName} {badge.lastName}</p>
                                            <p className="Twitter">@{badge.twitter}</p>
                                            <p>{badge.jobTitle}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default BadgesList;