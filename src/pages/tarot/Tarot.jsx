import React, {useEffect, useState} from 'react';
import classes from './tarot.module.css'
import {characteristic_of_a_man, self_characteristic} from '../../questions/tarot_questions'
import Radio from "../../components/UI/radio/Radio";
import Button from "../../components/UI/button/Button";
import closeImg from "../../img/close.png";
import instaImg from "../../img/instagram(min).png";
import Modal from "../../components/UI/modal/Modal";
import $ from "jquery";

const Tarot = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState(false)
    const [answer4, setAnswer4] = useState('')

    const [modal, setModal] = useState(false)

    const [copyBtnText, setCopyBtnText] = useState('Копировать результат')

    const [state, setState] = useState([])

    const getAnswers = () => {
        const doneAnswers = []
        if (answer1) doneAnswers.push(answer1)
        if (answer2) doneAnswers.push(answer2)
        if (answer3) doneAnswers.push('Расклад без участия мужчины')
        if (answer4) doneAnswers.push(answer4)

        setState(doneAnswers)
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
            <div className={classes.title} id={'test2'}>
                <h1>
                    Заявка на расклад таро
                </h1>
            </div>

            <div className={classes.questionBox}>
                <p style={{fontSize: 20, textAlign: 'center'}}>Как бы вы охарактеризовали себя?</p>
                <hr/>
                <div>
                    <Radio label={self_characteristic[1]} id={'r1-1'} group={'a1'}
                           onClick={() => setAnswer1('Я — Королева дисков')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={self_characteristic[2]} id={'r1-2'} group={'a1'}
                           onClick={() => setAnswer1('Я — Принцесса дисков')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={self_characteristic[3]} id={'r1-3'} group={'a1'}
                           onClick={() => setAnswer1('Я — Принцесса мечей')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={self_characteristic[4]} id={'r1-4'} group={'a1'}
                           onClick={() => setAnswer1('Я — Королева мечей')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={self_characteristic[5]} id={'r1-5'} group={'a1'}
                           onClick={() => setAnswer1('Я — Принцесса чаш')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={self_characteristic[6]} id={'r1-6'} group={'a1'}
                           onClick={() => setAnswer1('Я — Королева чаш')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={self_characteristic[7]} id={'r1-7'} group={'a1'}
                           onClick={() => setAnswer1('Я — Принцесса жезлов')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={self_characteristic[8]} id={'r1-8'} group={'a1'}
                           onClick={() => setAnswer1('Я — Королева жезлов')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>
                </div>
            </div>

            <div className={classes.questionBox}>
                <p style={{fontSize: 20, textAlign: 'center'}}>Как бы вы охарактеризовали своего мужчину?</p>
                <hr/>
                <div>
                    <Radio label={characteristic_of_a_man[1]} id={'r2-1'} group={'a2'}
                           onClick={() => setAnswer2('Мой мужчина — Принц дисков')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={characteristic_of_a_man[2]} id={'r2-2'} group={'a2'}
                           onClick={() => setAnswer2('Мой мужчина — Рыцарь дисков')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={characteristic_of_a_man[3]} id={'r2-3'} group={'a2'}
                           onClick={() => setAnswer2('Мой мужчина — Принц мечей')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={characteristic_of_a_man[4]} id={'r2-4'} group={'a2'}
                           onClick={() => setAnswer2('Мой мужчина — Рыцарь мечей')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={characteristic_of_a_man[5]} id={'r2-5'} group={'a2'}
                           onClick={() => setAnswer2('Мой мужчина — Принц чаш')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={characteristic_of_a_man[6]} id={'r2-6'} group={'a2'}
                           onClick={() => setAnswer2('Мой мужчина — Рыцарь чаш')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={characteristic_of_a_man[7]} id={'r2-7'} group={'a2'}
                           onClick={() => setAnswer2('Мой мужчина — Принц жезлов')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <Radio label={characteristic_of_a_man[8]} id={'r2-8'} group={'a2'}
                           onClick={() => setAnswer2('Мой мужчина — Рыцарь жезлов')}
                           blockStyle={{marginBottom: 10}} labelStyle={{lineHeight: 1.3, textAlign: 'justify'}}/>

                    <div className={classes.checkBoxContainer} >
                        <input className={classes.checkBox} type="checkbox" checked={answer3} onChange={() => setAnswer3(!answer3)} id={'r3'} />
                        <label htmlFor="r3" style={{padding: '14px 0 14px 0'}}> Хочу сделать расклад без участия мужчины </label>
                    </div>

                </div>
            </div>

            <div className={classes.questionBox}>
                <p style={{fontSize: 20, textAlign: 'center'}}>На какую тему вы бы хотели сделать расклад?</p>
                <hr/>
                <div style={{display: "flex"}}>
                    <Radio label={'Бизнес'} id={'r4-1'} group={'a4'} onClick={() => setAnswer4('Расклад на тему: бизнес')}
                           blockStyle={{marginRight: 10}}/>
                    <Radio label={'Инвестиции'} id={'r4-2'} group={'a4'} onClick={() => setAnswer4('Расклад на тему: инвестиции')}
                           blockStyle={{marginRight: 10}}/>
                    <Radio label={'Любовь'} id={'r4-3'} group={'a4'} onClick={() => setAnswer4('Расклад на тему: любовь')}/>
                </div>
            </div>

            <Button func={getAnswers} text={'Показать результат'}/>

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
                                fontSize: 26,
                                marginBottom: 4
                            }}>Заявка на расклад таро: {'\n'}</p>
                            {
                                state.map(item => (
                                    <p style={{
                                        textAlign: 'center',
                                        fontFamily: "'Scada', sans-serif",
                                        paddingBottom: 4,
                                        fontSize: 18
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

export default Tarot;