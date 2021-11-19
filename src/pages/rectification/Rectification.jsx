import React, {useRef, useState} from 'react';
import classes from './rectification.module.css'
import photo1 from '../../img/1photo(new).jpg'
import getCheckedRadio from '../../functions/functions'
import {rectification_questions} from '../../questions/rectification_questions'
import AgeQuestion from "../../components/ageQuestion/AgeQuestion";
import DeathQuestion from "../../components/deathQuestion/DeathQuestion";
import Button from "../../components/UI/button/Button";
import Modal from "../../components/UI/modal/Modal";
import $ from "jquery";
import instaImg from "../../img/instagram(min).png";
import closeImg from "../../img/close.png";
import LinkBtn from "../../components/UI/linkBtn/LinkBtn";
import Radio from "../../components/UI/radio/Radio";

const Rectification = () => {
    let radioRefs = useRef([])
    let refs = useRef([])
    let answers = []
    let doneFullAnswers = []
    const [modal, setModal] = useState(false)

    const [state, setState] = useState([])

    const [copyBtnText, setCopyBtnText] = useState('Копировать результат')

    const [answer1, setAnswer1] = useState('единственный')


    let questions_2_7 = []
    for (let i = 2; i <= 7; i++) {
        questions_2_7.push({question: rectification_questions[i]})
    }
    let questions_8_11 = []
    for (let i = 8; i <= 11; i++) {
        questions_8_11.push({question: rectification_questions[i]})
    }
    let questions_12_21 = []
    for (let i = 12; i <= 21; i++) {
        questions_12_21.push({question: rectification_questions[i]})
    }

    let getAnswers = () => {
        answers = []
        doneFullAnswers = []
        // answers.push(getCheckedRadio(radioRefs.current.filter(e => e !== null)) ? getCheckedRadio(radioRefs.current).value : 'единственный')
        answers.push(answer1)

        for (let i = 0; i < 20; i++) {
            if (refs.current[i].value) answers.push(refs.current[i].value)
            else answers.push('')
        }
        let fullAnswers = [];
        fullAnswers.push("Я " + answers[0] + " ребенок в семье.");
        fullAnswers.push("Мне было " + answers[1] + ", когда умерла бабушка по папе.");
        fullAnswers.push("Мне было " + answers[2] + ", когда умерла бабушка по маме.");
        fullAnswers.push("Мне было " + answers[3] + ", когда умер дедушка по папе.");
        fullAnswers.push("Мне было " + answers[4] + ", когда умер дедушка по маме.");
        fullAnswers.push("Мне было " + answers[5] + ", когда умерла мама.");
        fullAnswers.push("Мне было " + answers[6] + ", когда умер папа.");
        fullAnswers.push("От рака умер/ла " + answers[7] + ".");
        fullAnswers.push("Внезапно умер/ла " + answers[8] + ".");
        fullAnswers.push("В чрезвычайной ситуации умер/ла " + answers[9] + ".");
        fullAnswers.push("От инсульта умер/ла " + answers[10] + ".");
        fullAnswers.push("Мне было " + answers[11] + ", когда я тонул/а.");
        fullAnswers.push("Мне было " + answers[12] + ", когда у меня были переломы.");
        fullAnswers.push("Мне было " + answers[13] + ", когда случилась авария.");
        fullAnswers.push("Мне было " + answers[14] + ", когда у меня были переезды.");
        fullAnswers.push("Мне было " + answers[15] + ", когда у меня случались пожары.");
        fullAnswers.push("Мне было " + answers[16] + ", когда у меня были нападения.");
        fullAnswers.push("Мне было " + answers[17] + ", когда у меня были операции.");
        fullAnswers.push("Мне было " + answers[18] + ", когда у меня были разводы.");
        fullAnswers.push("Мне было " + answers[19] + ", когда купили квартиру.");
        fullAnswers.push("Мне было " + answers[20] + ", когда я потерял/а крупную сумму денег.");

        for (let i = 0; i < 21; i++) {
            if (answers[i]) doneFullAnswers.push(fullAnswers[i])
        }

        setState(doneFullAnswers)
        setModal(true)
        setCopyBtnText('Копировать результат')
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


    return (
        <div className={classes.container}>

            <img className={classes.image} src={photo1} alt=""/>

            <div className={classes.title} id={'test2'}>
                <h1>
                    Уточнение времени рождения (Ректификация)
                </h1>
            </div>

            <div className={classes.questionBox}>
                <p>Вопрос 1</p>
                <hr/>
                <p>{rectification_questions[1]}</p>
                <div style={{display: "flex"}}>
                    <Radio label={'Да'} id={'r1'} group={'a1'} onClick={() => setAnswer1('младший')}/>
                    <Radio label={'Нет'} id={'r2'} group={'a1'} onClick={() => setAnswer1('не младший')}/>
                    <Radio label={'Единственный'} id={'r3'} group={'a1'} onClick={() => setAnswer1('единственный')}/>
                </div>
            </div>

            {/*{questions_2_7.map(item => (*/}
            {/*    <AgeQuestion key={item.question} ref={refs} question_name={item.question} />*/}
            {/*))}*/}

            {questions_2_7.map(item => (
                <div className={classes.ageQuestionBox}>
                    <p>Вопрос {questions_2_7.indexOf(item) + 2}</p>
                    <hr/>
                    <p>{item.question}</p>

                    <div>
                        <p>Когда мне было <input ref={(e) => refs.current.push(e)} type="text" placeholder="?"/> лет.
                        </p>
                    </div>
                </div>
            ))}

            {questions_8_11.map(item => (
                <div className={classes.deathQuestionBox}>
                    <p>Вопрос {questions_8_11.indexOf(item) + 8}</p>
                    <hr/>
                    <p>{item.question}</p>

                    <div>
                        <input ref={(e) => refs.current.push(e)} type="text" placeholder="Никто"/>
                    </div>
                </div>
            ))}

            {questions_12_21.map(item => (
                <div className={classes.ageQuestionBox}>
                    <p>Вопрос {questions_12_21.indexOf(item) + 12}</p>
                    <hr/>
                    <p>{item.question}</p>

                    <div>
                        <p>Когда мне было <input ref={(e) => refs.current.push(e)} type="text" placeholder="?"/> лет.
                        </p>
                    </div>
                </div>
            ))}

            {/*<div style={{display: 'flex'}}>*/}
            {/*    <Button func={getAnswers} text={'Показать результат'} />*/}
            {/*    <Button func={() => document.location.href = '/'} text={'Назад'} style={{marginLeft: 4}}/>*/}
            {/*</div>*/}

            <Button func={getAnswers} text={'Показать результат'} />
            {/*<LinkBtn text={'Назад'} path={''} style={{marginTop: 10, borderRadius: 2}}/>*/}

            <div className={classes.backLine}>

            </div>

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
                                fontSize: 24,
                                marginBottom: 4
                            }}>Результат: {'\n'}</p>
                            {
                                state.map(item => (
                                    <p style={{
                                        textAlign: 'center',
                                        fontFamily: "'Scada', sans-serif",
                                        paddingBottom: 4
                                    }}>
                                        {item + '\n'}
                                    </p>
                                ))
                            }
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

export default Rectification;


