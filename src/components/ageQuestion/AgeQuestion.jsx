import React from 'react';
import classes from "./ageQuestion.module.css";

const AgeQuestion = (props) => {

    return (
        <div className={classes.box}>
            <p>Вопрос </p>
            <hr/>
            <p>{props.question_name}</p>

            <div>
                <p>Когда мне было <input ref={(e) => props.refs.current.push(e)} type="text" placeholder="?"/> лет. </p>
            </div>
        </div>
    );
};

export default AgeQuestion;