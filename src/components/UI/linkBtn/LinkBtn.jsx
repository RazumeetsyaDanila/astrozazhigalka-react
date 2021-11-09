import React from 'react';
import {Link} from "react-router-dom";
import classes from './linkBtn.module.css'

const LinkBtn = ({text, path}) => {
    return (
        <Link to={"/"+path} className={classes.container}>
            <p className={classes.text}>
                {text}
            </p>
        </Link>
    );
};

export default LinkBtn;