import React, {useEffect} from 'react';
import classes from './natalAnalysis.module.css'
import LinkBtn from "../../components/UI/linkBtn/LinkBtn";
import instaImg from "../../img/instagram(min).png";

const NatalAnalysis = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>Зажигаю таланты</h1>
            </div>
            <div className={classes.box}>
                <p>
                    Создание индивидуальной натальной карты + личное сопровождение на протяжении 21 дня от астрозажигалки Юлии Рыж!
                </p>
            </div>
            <div className={classes.box}>
                <p>
                    Ежедневные проработки планет при помощи простых, но эффективных заданий и регулярной отчетности об их выполнении.
                </p>
            </div>
            <div className={classes.box}>
                <p>
                    Моя основная задача - помочь тебе обрести гармонию с внутренним миром и определиться, в какой сфере деятельности стоит развиваться, чтобы не только хорошо зарабатывать, а и ощущать удовольствие от процесса работы.
                </p>
            </div>
            <div className={classes.box} >
                    Благодаря нашему сотрудничеству, ты получишь:
                    <ul>
                        <li>разбор своих сильных и слабых сторон личности;</li>
                        <li>осознание “стопов”, которые блокируют развитие;</li>
                        <li>подробный анализ предназначения и кармических особенностей;</li>
                        <li>рекомендации по проработке планет;</li>
                        <li>ответы на текущие вопросы.</li>
                    </ul>
                    Гарантирую поддержку, благодаря которой наша работа пройдёт эффективно и приятно. Тебе не придётся “ломать” себя, ты будешь обучаться любить своё внутреннее “Я” правильно. А я стану твоим астронаставником.
            </div>

            <h2 style={{fontFamily: 'Scada, sansSerif', margin: 24, textAlign: 'center'}}>
                Время зажигать в душе звезды!
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

export default NatalAnalysis;