import React from 'react';
import classes from './marsTest.module.css'
import photo7 from "../../../img/7photo(new).jpg";
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";
import back from "../../../img/back(min).png";
import next from "../../../img/next(min).png";

const MarsTest = ({questions, setAnswers, visible, marsNext, marsBack}) => {
    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            <img className={classes.image} src={photo7} alt=""/>

            <div className={classes.title}>
                <h1>Диагностика Марса</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

            <div style={{display: 'flex', width: 100, justifyContent: 'space-between'}}>
                <img src={back} alt="" onClick={marsBack}/>
                <img src={next} alt="" onClick={marsNext}/>
            </div>

        </div>
    );
};

export default MarsTest;