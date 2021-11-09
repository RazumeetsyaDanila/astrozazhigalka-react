import React from 'react';
import classes from './infoCard.module.css'
import {Link} from "react-router-dom";

const InfoCard = ({title, description, path}) => {
    return (
        <Link to={"/"+path} className={classes.container}>

            <div className={classes.title}>
                <h2>{title}</h2>
            </div>

            <div className={classes.description}>
                <p>{description}</p>
            </div>

        </Link>
    );
};

export default InfoCard;