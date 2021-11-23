import React, {useEffect, useState} from 'react';
import classes from './mainPlanets.module.css'
import Button from "../../../components/UI/button/Button";
import {question} from '../../../questions/questions'
import MoonTest from "../moon/MoonTest";
import SunTest from "../sun/SunTest";

const MainPlanets = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // let answersArr = new Array(7).fill(2).map(el => new Array(20).fill(2));

    let sumAnswers = [0,0,0,0,0,0,0]
    const [moonTestVisible, setMoonTestVisible] = useState(false)
    const [sunTestVisible, setSunTestVisible] = useState(false)

    const [moonState, setMoonState] = useState(new Array(20).fill(2))
    const [sunState, setSunState] = useState(new Array(20).fill(2))



    const sumResult = () => {
        for (let i = 0; i < 20; i++){
            sumAnswers[0] += moonState[i]
            sumAnswers[1] += sunState[i]
        }
        console.log(moonState)
        console.log(sunState)
        console.log(sumAnswers)
    }

    const setMoonAnswers = (index, value) => {
        setMoonState([...moonState.slice(0, index), value, ...moonState.slice(index+1, 20)])
    }

    const setSunAnswers = (index, value) => {
        setSunState([...sunState.slice(0, index), value, ...sunState.slice(index+1, 20)])
    }



    return (
        <div className={classes.container}>
            <Button text={'Moon'} func={() => setMoonTestVisible(!moonTestVisible)} style={{marginTop: 10}}/>
            <Button text={'Sun'} func={() => setSunTestVisible(!sunTestVisible)} style={{marginTop: 10}}/>

            <MoonTest questions={question.slice(0, 20)} visible={moonTestVisible} setAnswers={setMoonAnswers}/>
            <SunTest questions={question.slice(21, 41)} visible={sunTestVisible} setAnswers={setSunAnswers}/>

            <Button text={'Посчитать результат'} func={sumResult}/>


        </div>
    );
};

export default MainPlanets;