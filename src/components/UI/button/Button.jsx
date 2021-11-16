import React from 'react';
import classes from './button.module.css'

const Button = ({func, text, style}) => {
    return (
        <div className={classes.container} onClick={func} style={style}>
            <p className={classes.text}>
                {text}
            </p>
        </div>
    );
};

export default Button;