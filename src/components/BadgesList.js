import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

import './styles/BadgesList.css';

function useSearchBadges(badges){
    const [query, setQuery] = React.useState('');

    const [filterBadges, setFilteredResults] = React.useState(badges);

    React.useMemo(() => {
            const result = badges.filter(badge => {
            return `${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        })

        setFilteredResults(result)
    }, [badges, query]);

    return {query, setQuery, filterBadges}
}

function BadgesList(props){
    const badges = props.badges;
    const {query, setQuery, filterBadges} = useSearchBadges(badges);

    if(filterBadges.length === 0){
        return(
            <div>
                <div className="from-grup pb-4">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </div>
        )
    }
    return (
        <div className="BadgesList">
            <div className="from-grup pb-4">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className="list-unstyled">
                {filterBadges.map((badge) => {
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

export default BadgesList;