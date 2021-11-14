import React from 'react';
import classes from './button.module.css'

const Button = ({func, text}) => {
    return (
        <div className={classes.container} onClick={func}>
            <p className={classes.text}>
                {text}
            </p>
        </div>
    );
};

export default Button;