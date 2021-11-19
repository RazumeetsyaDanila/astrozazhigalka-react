import React from 'react';
import classes from './solar.module.css'
import LinkBtn from "../../components/UI/linkBtn/LinkBtn";
import instaImg from "../../img/instagram(min).png";

const Solar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>
                    Что такое Соляр?
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    Соляр - солнечный день рождения. Он не всегда сходится с классическим днём рождения, может происходить на день-два позже или раньше. В это время Ваше динамичное Солнце становится в ту же позицию, что и Солнце на Вашей натальной карте (которое было при Вашем рождении).<br/><br/>
                    Оба Солнца взаимодействуют с Луной, и происходит некое чудо - Вселенная делает Вам подарок в виде полного заряда энергии, а также успехов во всех начинаниях.<br/><br/>
                    Поэтому так важно использовать блага космоса! Другого такого шанса в году не будет.
                </p>
            </div>
            <div className={classes.title}>
                <h1>
                    Дни Соляра
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    Но Соляр - это не конкретно один день. Это 12 дней до и после солнечного дня рождения. Если пропустить данное время, не используя его максимально, весь последующий год будете страдать от собственной несостоятельности. Вы останетесь без энергии, станете напоминать выжатый лимон.<br/><br/>
                    Первые 12 дней Соляра отвечают за прошлые события, вторые 12 дней - за будущие. У каждого из дней имеется своя тематика, на которую он влияет. В целом охватываются все сферы деятельности, чтобы наладить каждую из них.
                </p>
            </div>
            <div className={classes.title}>
                <h1>
                    Личное сопровождение
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    В моё личное сопровождение входят все 24 дня. Я буду смотреть Вашу натальную карту и ежедневно давать проработки планет, которые запускают Ваш личный год.<br/><br/>
                    Благодаря проработкам Вы:
                    <ul>
                        <li>Обратите внимание на те акценты в жизни, которые сделают Вас счастливым человеком</li>
                        <li>Займётесь самосовершенствованием, избавитесь от внутренних демонов</li>
                        <li>Закроете “дыры”, куда улетает позитивная энергия</li>
                    </ul>
                    Важно, в какой местности Вы встречаете Соляр. Так как в разных координатах Луна и Солнце располагаются под разными углами, то попадают, соответственно, в разные поля гороскопа. Узнать точное место можно только по своей натальной карте.
                </p>
            </div>
            <div className={classes.title}>
                <h1>
                    Виды Соляра
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    В мои услуги входит два вида Соляра: под задачу и обычный.<br/><br/>
                    <strong>Обычный Соляр</strong> предполагает встречу дня рождения в городе своего проживания.<br/><br/>
                    Главная задача этого Соляра - наполнить себя мощной энергией Солнца, чтобы запрограммировать тело и разум на успех во всех сферах жизни.<br/><br/>
                    Он подойдёт, если вы недовольны своей жизнью или отдельными её сферами. Да и в целом станет важным инструментом для осуществления желаемого.<br/><br/>
                    <strong>Соляр под задачу</strong> позволяет выбрать, в каком городе или стране провести день рождения. От места зависит, какая сфера жизни активируется. Вы узнаете, что нужно сделать, чтобы воплотить свою мечту.<br/><br/>
                    Это может быть повышение по карьерной лестнице, успех в бизнесе, удачный брак, лечение болезни и т.д.
                </p>
            </div>
            <div className={classes.title}>
                <h1>
                    Важные детали
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    Иногда натальная карта показывает, что вас ожидает нечто плохое. Тогда без Соляра под задачу не обойтись. Рассчитывается он за год. Изменения появятся в течение 12 месяцев, но не сразу. Учитывайте это!<br/><br/>
                    <strong>Что вы получите: </strong>Письменные рекомендации о том, как подготовиться к Соляру, встретить его, провести 12 дней после. А также личное сопровождение на протяжении всех дней.<br/><br/>
                    <strong>Что от вас нужно: </strong>Обратиться ко мне хотя бы за 4-2 недели до дня рождения. Оптимально сделать это заранее, чтобы подготовиться. Затем важно следовать инструкциям и личным проработкам.
                </p>
            </div>
            <h2 style={{fontFamily: 'Scada, sansSerif', margin: 24, textAlign: 'center'}}>
                Чтобы узнать цену, обращайтесь ко мне в личных сообщениях.
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

export default Solar;