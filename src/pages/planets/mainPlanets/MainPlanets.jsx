import React, {useEffect, useState} from 'react';
import classes from './mainPlanets.module.css'
import Button from "../../../components/UI/button/Button";
import {question} from '../../../questions/questions'
import MoonTest from "../moon/MoonTest";
import SunTest from "../sun/SunTest";
import SaturnTest from "../saturn/SaturnTest";
import VenusTest from "../venus/VenusTest";
import MercuryTest from "../mercury/MercuryTest";
import MarsTest from "../mars/MarsTest";
import JupiterTest from "../jupiter/JupiterTest";

const MainPlanets = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // let answersArr = new Array(7).fill(2).map(el => new Array(20).fill(2));

    let sumAnswers = [0,0,0,0,0,0,0]
    const [moonTestVisible, setMoonTestVisible] = useState(false)
    const [sunTestVisible, setSunTestVisible] = useState(false)
    const [saturnTestVisible, setSaturnTestVisible] = useState(false)
    const [venusTestVisible, setVenusTestVisible] = useState(false)
    const [mercuryTestVisible, setMercuryTestVisible] = useState(false)
    const [marsTestVisible, setMarsTestVisible] = useState(false)
    const [jupiterTestVisible, setJupiterTestVisible] = useState(false)

    const [moonState, setMoonState] = useState(new Array(20).fill(2))
    const [sunState, setSunState] = useState(new Array(20).fill(2))
    const [saturnState, setSaturnState] = useState(new Array(20).fill(2))
    const [venusState, setVenusState] = useState(new Array(20).fill(2))
    const [mercuryState, setMercuryState] = useState(new Array(20).fill(2))
    const [marsState, setMarsState] = useState(new Array(20).fill(2))
    const [jupiterState, setJupiterState] = useState(new Array(20).fill(2))



    const sumResult = () => {
        for (let i = 0; i < 20; i++){
            sumAnswers[0] += moonState[i]
            sumAnswers[1] += sunState[i]
            sumAnswers[2] += saturnState[i]
            sumAnswers[3] += venusState[i]
            sumAnswers[4] += mercuryState[i]
            sumAnswers[5] += marsState[i]
            sumAnswers[6] += jupiterState[i]
        }
        console.log(moonState)
        console.log(sunState)
        console.log(saturnState)
        console.log(venusState)
        console.log(mercuryState)
        console.log(marsState)
        console.log(jupiterState)
        console.log(sumAnswers)
    }

    const setMoonAnswers = (index, value) => {
        setMoonState([...moonState.slice(0, index), value, ...moonState.slice(index+1, 20)])
    }

    const setSunAnswers = (index, value) => {
        setSunState([...sunState.slice(0, index), value, ...sunState.slice(index+1, 20)])
    }

    const setSaturnAnswers = (index, value) => {
        setSaturnState([...saturnState.slice(0, index), value, ...saturnState.slice(index+1, 20)])
    }

    const setVenusAnswers = (index, value) => {
        setVenusState([...venusState.slice(0, index), value, ...venusState.slice(index+1, 20)])
    }

    const setMercuryAnswers = (index, value) => {
        setMercuryState([...mercuryState.slice(0, index), value, ...mercuryState.slice(index+1, 20)])
    }

    const setMarsAnswers = (index, value) => {
        setMarsState([...marsState.slice(0, index), value, ...marsState.slice(index+1, 20)])
    }

    const setJupiterAnswers = (index, value) => {
        setJupiterState([...jupiterState.slice(0, index), value, ...jupiterState.slice(index+1, 20)])
    }



    return (
        <div className={classes.container}>
            <Button text={'Moon'} func={() => setMoonTestVisible(!moonTestVisible)} style={{marginTop: 10}}/>
            <Button text={'Sun'} func={() => setSunTestVisible(!sunTestVisible)} style={{marginTop: 10}}/>
            <Button text={'Saturn'} func={() => setSaturnTestVisible(!saturnTestVisible)} style={{marginTop: 10}}/>
            <Button text={'Venus'} func={() => setVenusTestVisible(!venusTestVisible)} style={{marginTop: 10}}/>
            <Button text={'Mercury'} func={() => setMercuryTestVisible(!mercuryTestVisible)} style={{marginTop: 10}}/>
            <Button text={'Mars'} func={() => setMarsTestVisible(!marsTestVisible)} style={{marginTop: 10}}/>
            <Button text={'Jupiter'} func={() => setJupiterTestVisible(!jupiterTestVisible)} style={{marginTop: 10}}/>

            <MoonTest questions={question.slice(0, 20)} visible={moonTestVisible} setAnswers={setMoonAnswers}/>
            <SunTest questions={question.slice(20, 40)} visible={sunTestVisible} setAnswers={setSunAnswers}/>
            <SaturnTest questions={question.slice(40, 60)} visible={saturnTestVisible} setAnswers={setSaturnAnswers}/>
            <VenusTest questions={question.slice(60, 80)} visible={venusTestVisible} setAnswers={setVenusAnswers}/>
            <MercuryTest questions={question.slice(80, 100)} visible={mercuryTestVisible} setAnswers={setMercuryAnswers}/>
            <MarsTest questions={question.slice(100, 120)} visible={marsTestVisible} setAnswers={setMarsAnswers}/>
            <JupiterTest questions={question.slice(120, 140)} visible={jupiterTestVisible} setAnswers={setJupiterAnswers}/>

            <Button text={'Посчитать результат'} func={sumResult} style={{marginTop: 10}}/>
        </div>
    );
};

export default MainPlanets;