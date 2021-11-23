import React, {useEffect} from 'react';
import classes from './moonTest.module.css'
import photo2 from "../../../img/2photo(new).jpg";
import PlanetQuestion from "../../../components/planetQuestion/PlanetQuestion";
import next from '../../../img/next(min).png'
import closeImg from "../../../img/close.png";

const MoonTest = ({questions, setAnswers, visible, moonNext}) => {

    const rootClasses = [classes.container]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            <img className={classes.image} src={photo2} alt=""/>

            <div className={classes.title} id={'test2'}>
                <h1>Диагностика Луны</h1>
            </div>

            {
                questions.map(item => (
                    <PlanetQuestion questionText={item} questionId={questions.indexOf(item)} radioGroup={item} setAnswers={setAnswers} key={questions.indexOf(item)}/>
                ))
            }

            <img src={next} alt="" onClick={moonNext} className={classes.btn}/>

        </div>
    );
};

export default MoonTest;