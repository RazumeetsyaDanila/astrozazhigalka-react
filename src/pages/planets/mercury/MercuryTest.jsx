import React from 'react';
import classes from './mercuryTest.module.css'
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";
import photo6 from "../../../img/6photo(new).jpg";

const MercuryTest = ({questions, setAnswers, visible}) => {
    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            {/*<img className={classes.image} src={photo6} alt=""/>*/}

            <div className={classes.title}>
                <h1>Диагностика Меркурия</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

        </div>
    );
};

export default MercuryTest;