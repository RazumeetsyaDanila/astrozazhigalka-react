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
import closeImg from "../../../img/close.png";
import instaImg from "../../../img/instagram(min).png";
import Modal from "../../../components/UI/modal/Modal";
import $ from "jquery";

const MainPlanets = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // let answersArr = new Array(7).fill(2).map(el => new Array(20).fill(2));

    let sumAnswers = [0, 0, 0, 0, 0, 0, 0]
    const [moonTestVisible, setMoonTestVisible] = useState(true)
    const [sunTestVisible, setSunTestVisible] = useState(false)
    const [saturnTestVisible, setSaturnTestVisible] = useState(false)
    const [venusTestVisible, setVenusTestVisible] = useState(false)
    const [mercuryTestVisible, setMercuryTestVisible] = useState(false)
    const [marsTestVisible, setMarsTestVisible] = useState(false)
    const [jupiterTestVisible, setJupiterTestVisible] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [moonTestVisible, sunTestVisible, saturnTestVisible, venusTestVisible, mercuryTestVisible, marsTestVisible, jupiterTestVisible])

    const [moonState, setMoonState] = useState(new Array(20).fill(2))
    const [sunState, setSunState] = useState(new Array(20).fill(2))
    const [saturnState, setSaturnState] = useState(new Array(20).fill(2))
    const [venusState, setVenusState] = useState(new Array(20).fill(2))
    const [mercuryState, setMercuryState] = useState(new Array(20).fill(2))
    const [marsState, setMarsState] = useState(new Array(20).fill(2))
    const [jupiterState, setJupiterState] = useState(new Array(20).fill(2))

    const [modal, setModal] = useState(false)
    const [copyBtnText, setCopyBtnText] = useState('Копировать результат')

    const result = () => {
        setCopyBtnText('Копировать результат')
        setModal(true)
    }

    const sum = (arr) => {
        let output = 0
        for (let i = 0; i < arr.length; i++) output += arr[i]
        return output
    }

    const setMoonAnswers = (index, value) => {
        setMoonState([...moonState.slice(0, index), value, ...moonState.slice(index + 1, 20)])
    }

    const setSunAnswers = (index, value) => {
        setSunState([...sunState.slice(0, index), value, ...sunState.slice(index + 1, 20)])
    }

    const setSaturnAnswers = (index, value) => {
        setSaturnState([...saturnState.slice(0, index), value, ...saturnState.slice(index + 1, 20)])
    }

    const setVenusAnswers = (index, value) => {
        setVenusState([...venusState.slice(0, index), value, ...venusState.slice(index + 1, 20)])
    }

    const setMercuryAnswers = (index, value) => {
        setMercuryState([...mercuryState.slice(0, index), value, ...mercuryState.slice(index + 1, 20)])
    }

    const setMarsAnswers = (index, value) => {
        setMarsState([...marsState.slice(0, index), value, ...marsState.slice(index + 1, 20)])
    }

    const setJupiterAnswers = (index, value) => {
        setJupiterState([...jupiterState.slice(0, index), value, ...jupiterState.slice(index + 1, 20)])
    }


    const copy_in_buffer = (el) => {
        let $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(el).text()).select();
        document.execCommand("copy");
        $tmp.remove();
    }

    const copy = () => {
        copy_in_buffer('#result')
        setCopyBtnText('Результат скопирован!')
    }

    const moonNext = () => {
        setMoonTestVisible(false)
        setSunTestVisible(true)
    }

    const sunNext = () => {
        setSunTestVisible(false)
        setSaturnTestVisible(true)
    }

    const sunBack = () => {
        setSunTestVisible(false)
        setMoonTestVisible(true)
    }

    const saturnNext = () => {
        setSaturnTestVisible(false)
        setVenusTestVisible(true)
    }

    const saturnBack = () => {
        setSaturnTestVisible(false)
        setSunTestVisible(true)
    }

    const venusNext = () => {
        setVenusTestVisible(false)
        setMercuryTestVisible(true)
    }

    const venusBack = () => {
        setVenusTestVisible(false)
        setSaturnTestVisible(true)
    }

    const mercuryNext = () => {
        setMercuryTestVisible(false)
        setMarsTestVisible(true)
    }

    const mercuryBack = () => {
        setMercuryTestVisible(false)
        setVenusTestVisible(true)
    }

    const marsNext = () => {
        setMarsTestVisible(false)
        setJupiterTestVisible(true)
    }

    const marsBack = () => {
        setMarsTestVisible(false)
        setMercuryTestVisible(true)
    }

    const jupiterBack = () => {
        setJupiterTestVisible(false)
        setMarsTestVisible(true)
    }

    return (
        <div className={classes.container}>
            {/*<Button text={'Moon'} func={() => setMoonTestVisible(!moonTestVisible)} style={{marginTop: 10}}/>*/}
            {/*<Button text={'Sun'} func={() => setSunTestVisible(!sunTestVisible)} style={{marginTop: 10}}/>*/}
            {/*<Button text={'Saturn'} func={() => setSaturnTestVisible(!saturnTestVisible)} style={{marginTop: 10}}/>*/}
            {/*<Button text={'Venus'} func={() => setVenusTestVisible(!venusTestVisible)} style={{marginTop: 10}}/>*/}
            {/*<Button text={'Mercury'} func={() => setMercuryTestVisible(!mercuryTestVisible)} style={{marginTop: 10}}/>*/}
            {/*<Button text={'Mars'} func={() => setMarsTestVisible(!marsTestVisible)} style={{marginTop: 10}}/>*/}
            {/*<Button text={'Jupiter'} func={() => setJupiterTestVisible(!jupiterTestVisible)} style={{marginTop: 10}}/>*/}

            <MoonTest questions={question.slice(0, 20)} visible={moonTestVisible} setAnswers={setMoonAnswers} moonNext={moonNext}/>
            <SunTest questions={question.slice(20, 40)} visible={sunTestVisible} setAnswers={setSunAnswers} sunNext={sunNext} sunBack={sunBack}/>
            <SaturnTest questions={question.slice(40, 60)} visible={saturnTestVisible} setAnswers={setSaturnAnswers} saturnNext={saturnNext} saturnBack={saturnBack}/>
            <VenusTest questions={question.slice(60, 80)} visible={venusTestVisible} setAnswers={setVenusAnswers} venusNext={venusNext} venusBack={venusBack}/>
            <MercuryTest questions={question.slice(80, 100)} visible={mercuryTestVisible}
                         setAnswers={setMercuryAnswers} mercuryNext={mercuryNext} mercuryBack={mercuryBack}/>
            <MarsTest questions={question.slice(100, 120)} visible={marsTestVisible} setAnswers={setMarsAnswers} marsNext={marsNext} marsBack={marsBack}/>
            <JupiterTest questions={question.slice(120, 140)} visible={jupiterTestVisible}
                         setAnswers={setJupiterAnswers} jupiterBack={jupiterBack} result={result}/>

            {/*<Button text={'Посчитать результат'} func={result} />*/}

            <Modal visible={modal} setVisible={setModal}>
                <div>
                    <div className={classes.closeBtn}>
                        <img src={closeImg} alt="" onClick={() => {
                            setModal(false)
                        }}/>
                    </div>

                    <div className={classes.copyArea}>

                        <div id={'result'}>
                            <p style={{
                                textAlign: 'center',
                                fontFamily: "'Neucha', cursive",
                                fontSize: 28,
                                marginBottom: 4
                            }}>Результат: {'\n'}</p>

                            <div style={{
                                textAlign: 'center',
                                fontFamily: "'Scada', sans-serif",
                                fontSize: 20,
                                lineHeight: 1.7
                            }}>
                                Луна: {sum(moonState)}<br/> {'\n'}
                                Солнце: {sum(sunState)}<br/> {'\n'}
                                Сатурн: {sum(saturnState)}<br/> {'\n'}
                                Венера: {sum(venusState)}<br/> {'\n'}
                                Меркурий: {sum(mercuryState)}<br/> {'\n'}
                                Марс: {sum(marsState)}<br/> {'\n'}
                                Юпитер: {sum(jupiterState)}<br/>
                            </div>

                        </div>
                        <Button func={copy} text={copyBtnText}/>
                    </div>


                    <div className={classes.insta}>
                        <a href="https://www.instagram.com/mat_rizg/">
                            <img src={instaImg} alt="Перейти в инстаграм"/>
                        </a>
                        <p>Перейти в инстаграм, чтобы отправить результат</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default MainPlanets;
