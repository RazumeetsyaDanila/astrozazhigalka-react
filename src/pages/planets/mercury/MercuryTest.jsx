import React from 'react';
import classes from './mercuryTest.module.css'
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";
import photo6 from "../../../img/6photo(new).jpg";
import back from "../../../img/back(min).png";
import next from "../../../img/next(min).png";

const MercuryTest = ({questions, setAnswers, visible, mercuryNext, mercuryBack}) => {
    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            <img className={classes.image} src={photo6} alt=""/>

            <div className={classes.title}>
                <h1>Диагностика Меркурия</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

            <div style={{display: 'flex', width: 100, justifyContent: 'space-between'}}>
                <img src={back} alt="" onClick={mercuryBack}/>
                <img src={next} alt="" onClick={mercuryNext}/>
            </div>

        </div>
    );
};

export default MercuryTest;