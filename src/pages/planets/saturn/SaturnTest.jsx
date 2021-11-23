import React from 'react';
import classes from './saturnTest.module.css'
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";
import photo4 from "../../../img/4photo(new).jpg";

const SaturnTest = ({questions, setAnswers, visible}) => {

    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            {/*<img className={classes.image} src={photo4} alt=""/>*/}

            <div className={classes.title} id={'test3'}>
                <h1>Диагностика Сатурна</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

        </div>
    );
};

export default SaturnTest;