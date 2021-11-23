import React from 'react';
import classes from './marsTest.module.css'
import photo7 from "../../../img/7photo(new).jpg";
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";

const MarsTest = ({questions, setAnswers, visible}) => {
    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            {/*<img className={classes.image} src={photo7} alt=""/>*/}

            <div className={classes.title}>
                <h1>Диагностика Марса</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

        </div>
    );
};

export default MarsTest;