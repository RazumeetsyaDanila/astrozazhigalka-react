import React from 'react';
import classes from './Card.module.css'

const Card = ({title, description}) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <p>{title}</p>
            </div>

            <div className={classes.description}>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Card;