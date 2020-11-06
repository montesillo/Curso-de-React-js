import React from 'react';

import confLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';
import './styles/Home.css';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Home">
                    <div className="Home__col">
                        <img src={confLogo} alt="Conf Logo" />
                    </div>
                    <div className="Home__col">
                        <img src={astronauts} alt="Conf Logo" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;