import React, {useEffect} from 'react';
import classes from "../sun/sunTest.module.css";
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";

const SunTest = ({questions, setAnswers, visible}) => {

    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            {/*<img className={classes.image} src={photo3} alt=""/>*/}

            <div className={classes.title} id={'test2'}>
                <h1>Диагностика Солнца</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

        </div>
    );
};

export default SunTest;