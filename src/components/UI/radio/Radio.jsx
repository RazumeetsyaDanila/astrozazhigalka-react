import React from 'react';
import classes from './radio.module.css'

const Radio = ({group, onClick, label, id, blockStyle, labelStyle}) => {
    return (
        <div className={classes.form_radio_btn} style={blockStyle}>
            <input className={classes.form_radio_btn} type="radio" name={group} id={id}
                   onClick={onClick}/>
            <label htmlFor={id} style={labelStyle}>{label}</label>
        </div>
    );
};

export default Radio;