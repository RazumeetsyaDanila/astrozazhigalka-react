import React from 'react';
import classes from './venusTest.module.css'
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";
import photo5 from "../../../img/5photo(new).jpg";

const VenusTest = ({questions, setAnswers, visible}) => {
    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            {/*<img className={classes.image} src={photo5} alt=""/>*/}

            <div className={classes.title}>
                <h1>Диагностика Венеры</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

        </div>
    );
};

export default VenusTest;