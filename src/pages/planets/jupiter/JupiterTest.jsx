import React from 'react';
import classes from './jupiterTest.module.css'
import photo8 from "../../../img/8photo(new).jpg";
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";
import back from "../../../img/back(min).png";
import next from "../../../img/next(min).png";
import Button from "../../../components/UI/button/Button";

const JupiterTest = ({questions, setAnswers, visible, jupiterBack, result}) => {
    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            <img className={classes.image} src={photo8} alt=""/>

            <div className={classes.title}>
                <h1>Диагностика Юпитера</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

            <img src={back} alt="" onClick={jupiterBack} style={{marginBottom: 20}} className={classes.btn}/>
            <Button func={result} text={'Показать результат'}/>

        </div>
    );
};

export default JupiterTest;