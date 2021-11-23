import React, {useEffect} from 'react';
import classes from "../sun/sunTest.module.css";
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";
import photo3 from "../../../img/3photo(new).jpg";
import next from "../../../img/next(min).png";
import back from '../../../img/back(min).png'

const SunTest = ({questions, setAnswers, visible, sunNext, sunBack}) => {

    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            <img className={classes.image} src={photo3} alt=""/>

            <div className={classes.title} id={'test2'}>
                <h1>Диагностика Солнца</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

            <div style={{display: 'flex', width: 100, justifyContent: 'space-between'}}>
                <img src={back} alt="" onClick={sunBack} className={classes.btn}/>
                <img src={next} alt="" onClick={sunNext} className={classes.btn}/>
            </div>

        </div>
    );
};

export default SunTest;