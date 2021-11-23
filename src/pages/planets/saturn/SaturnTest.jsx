import React from 'react';
import classes from './saturnTest.module.css'
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";
import photo4 from "../../../img/4photo(new).jpg";
import back from "../../../img/back(min).png";
import next from "../../../img/next(min).png";

const SaturnTest = ({questions, setAnswers, visible, saturnNext, saturnBack}) => {

    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            <img className={classes.image} src={photo4} alt=""/>

            <div className={classes.title} id={'test3'}>
                <h1>Диагностика Сатурна</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

            <div style={{display: 'flex', width: 100, justifyContent: 'space-between'}}>
                <img src={back} alt="" onClick={saturnBack} className={classes.btn}/>
                <img src={next} alt="" onClick={saturnNext} className={classes.btn}/>
            </div>

        </div>
    );
};

export default SaturnTest;