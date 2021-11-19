import React from 'react';
import classes from './natalChild.module.css'
import LinkBtn from "../../components/UI/linkBtn/LinkBtn";
import instaImg from "../../img/instagram(min).png"
import {BrowserRouter, Route, Routes ,Link} from "react-router-dom";

const NatalChild = () => {
    window.scrollTo(0, 0)
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>
                    Зажигаем жизнь ваешго ребенка:
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    Я занимаюсь разбором натальной карты вашего ребёнка + даю ответы на ваши вопросы.<br/><br/>
                    Всю информацию предоставляю в записи, чтобы вы могли переслушать или предложить послушать дочери/сыну.<br/><br/>
                    Основная задача услуги - помочь родителям раскрыть сильные стороны и таланты любимого чада,
                    найти грамотный подход к воспитанию и обучению, сохранить баланс свободы и ограничений.<br/><br/>
                </p>
            </div>
            <div className={classes.title}>
                <h1>
                    В итоге вы получаете:
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    <ul>
                        <li>анализ совместимости родителей и ребёнка;</li>
                        <li>сильные и слабые стороны личности малыша;</li>
                        <li>предпочтительный способ обучения и развития;</li>
                        <li>наиболее подходящий вид спорта;</li>
                        <li>способы мотивации для ребёнка;</li>
                        <li>баланс свободы и ограничений: что запрещать, а что разрешать;</li>
                        <li>врождённые таланты ребёнка;</li>
                        <li>инструкцию о том, как построить гармоничные отношения;</li>
                        <li>ответы на текущие вопросы.</li>
                    </ul>
                </p>
            </div>
            <div className={classes.title}>
                <h1>
                    Результат:
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    Ваше дитя растёт полноценным человеком, чей сосуд души полон.
                    Он точно знает чего хочет и как добиться желаемого.
                    Ценит, любит и уважает родителей, воспитавших его примером для подражания.<br/><br/>
                    Его жизнь - увлекательное путешествие, которое он проходит с удовольствием.
                    Несмотря на жизненные трудности, из любой ситуации он выходит победителем, потому что обладает сокровенными знаниями законов Вселенной.
                </p>
            </div>

            <h2 style={{fontFamily: 'Scada, sansSerif', margin: 24, textAlign: 'center'}}>
                Написать мне в ЛС дату, время и место рождения ребёнка, и мамы.
            </h2>

            <div className={classes.insta}>
                <a href="https://www.instagram.com/mat_rizg/">
                    <img src={instaImg} alt="Перейти в инстаграм"/>
                </a>
                <p>Инстаграм</p>
            </div>

            {/*<LinkBtn text={"Назад"} path={""}/>*/}

        </div>
    );
};

export default NatalChild;