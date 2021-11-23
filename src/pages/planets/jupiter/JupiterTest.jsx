import React from 'react';
import classes from './jupiterTest.module.css'
import photo8 from "../../../img/8photo(new).jpg";
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";

const JupiterTest = ({questions, setAnswers, visible}) => {
    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            {/*<img className={classes.image} src={photo7} alt=""/>*/}

            <div className={classes.title}>
                <h1>Диагностика Юпитера</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

        </div>
    );
};

export default JupiterTest;