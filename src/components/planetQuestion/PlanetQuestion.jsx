import React from 'react';
import classes from './planetQuestion.module.css'
import Radio from "../UI/radio/Radio";

const PlanetQuestion = ({questionText, questionId, radioGroup, setAnswers}) => {

    const setYes = () => setAnswers(questionId, 3)
    const setNo = () => setAnswers(questionId, 1)
    const setSometimes = () => setAnswers(questionId, 2)


    return (
        <div className={classes.questionBox}>
            <p style={{margin: '2px 0 6px 0'}} >Вопрос {questionId+1}</p>
            <hr/>
            <p style={{margin: '6px 0 6px 0', textAlign: 'center'}}>{questionText}</p>
            <div style={{display: "flex", margin: '6px 0 6px 0'}}>
                <Radio label={'Да'} id={radioGroup+'1'} group={radioGroup} blockStyle={{marginRight: 10}} onClick={setYes}/>
                <Radio label={'Нет'} id={radioGroup+'2'} group={radioGroup} blockStyle={{marginRight: 10}} onClick={setNo}/>
                <Radio label={'Иногда'} id={radioGroup+'3'} group={radioGroup} onClick={setSometimes}/>
            </div>
        </div>
    );
};

export default PlanetQuestion;