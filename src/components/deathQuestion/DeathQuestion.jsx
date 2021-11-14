import React from 'react';
import classes from './deathQuestion.module.css'

const DeathQuestion = (props) => {
    return (
        <div className={classes.box}>
            <p>Вопрос </p>
            <hr/>
            <p>{props.question_name}</p>

            <div>
                <input ref={props.ref2} type="text" placeholder="Никто"/>
            </div>
        </div>
    );
};

export default DeathQuestion;