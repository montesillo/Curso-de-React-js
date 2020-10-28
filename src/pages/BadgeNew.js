import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                             firstName="Hiram"
                            lastName="Montesillo"
                            twitter="HMontesillo25" 
                            jobTitle="Frontend Engineer" 
                            avatarUrl="https://www.gravatar.com/avatar?d=identicon" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;