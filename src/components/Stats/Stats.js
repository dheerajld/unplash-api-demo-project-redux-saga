import React from "react";

import './styles.css';

const Stats = ({ stats }) => {
    
    if(!stats){
        //Loading not yet started
        return <span className="stats">Loading...</span>
    }

    return (
        <span className="stats">
            {stats.error && 'Error'}
            {stats.isLoading && 'Loading...'}
            {stats.downloads  && '{stats.downloads}' }
        </span>
    )
}

export default Stats;