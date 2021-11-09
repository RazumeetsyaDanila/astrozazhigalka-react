import React from 'react';
import classes from './imageCode.module.css'
import LinkBtn from "../../components/UI/linkBtn/LinkBtn";
import instaImg from "../../img/instagram(min).png";

const ImageCode = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>
                    Как слышать “ДА” в ответ на все свои предложения?
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    Не задумывались ли вы над тем, почему у одних получается добиваться желаемых высот, а у других - нет? Всё
                    достаточно просто.
                    Некоторые люди живут в гармонии со своим истинным Я.<br/><br/>
                    А другие нет. Так получается, что их внутренние ощущения и то, как их чувствуют окружающие, слишком разнится.
                    Именно это влияет на осуществление желаемого.
                    Чтобы люди тянулись к нам, нужно соответствовать своему “космическому” имиджу.<br/><br/>
                    Как и прочие аспекты жизни, он заложен в натальной карте.<br/><br/>
                    Возможно, вы обожаете каблуки. Но Вселенная приготовила для вас кеды. Значит, вы далеки от того облика, который
                    способен принести успех. Поэтому и дела не ладятся.
                    Да, это крошка от всего имиджа. И всё же вместе с другими крошками, она существенна.<br/><br/>
                    Удивительно, однако когда мы выглядим так, какими должны быть на самом деле, всегда получаем отличный результат.
                    “Картинка” соответствует действительности, поэтому не вызывает негатива. Люди становятся расположенными к нам.
                    И мы двигаемся по лестнице успеха на небывалой скорости.
                </p>
            </div>
            <div className={classes.title}>
                <h1>
                    Как узнать свой звёздный имидж?
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    Астрология в помощь. Используя лишь дату, время и место рождения, можно определить, как правильно подобрать
                    одежду, обувь, аксессуары, украшения, духи, манеру общения и многое другое, из чего строится целостный образ
                    сильной личности.
                    Всё это поможет получать желанное “ДА” в ответ на все предложения.<br/><br/>
                    Выглядеть правильно невероятно важно на:
                    <ul>
                        <li>Свидании</li>
                        <li>Деловом ужине</li>
                        <li>Подписании договора</li>
                        <li>Знакомстве с влиятельными людьми или родителями второй половинки</li>
                        <li>Мероприятии, где могут случиться судьбоносные встречи</li>
                        <li>Особенных торжествах и т.д.</li>
                    </ul>
                    Каждый человек, желающий достигнуть поставленных целей, должен заботиться о внешнем виде и соответствовать своей натальной карте!<br/><br/>
                    Есть очень хорошая новость. Имидж - одна из тематик, в которой я веду наставничество. И не просто делюсь информацией, а даю задания на проработку Венеры, Луны, Солнца. Под моим личным руководством вы приходите к образу, который на 100% подходит именно вам.
                </p>
            </div>
            <div className={classes.title}>
                <h1>
                    Вы получаете:
                </h1>
            </div>
            <div className={classes.box}>
                <p>
                    Письменные рекомендации по имиджу;<br/>
                    Личное сопровождение до желаемого результата;<br/>
                    В случае необходимости - уточнение времени рождения.<br/><br/>
                    Всего за 21 день вы кардинально меняете жизнь.
                    Всё, что требуется - ежедневно получать и выполнять простые задачи, направленные на работу с самыми важными планетами натальной карты.<br/><br/>
                    Учтите: я всегда довожу до конечной цели. Иначе к чему начинать?
                </p>
            </div>

            <h2 style={{fontFamily: 'Scada, sansSerif', margin: 24, textAlign: 'center'}}>
                Ну, что? Поехали? Чтобы узнать стоимость напиши мне в личку.
            </h2>

            <div className={classes.insta}>
                <a href="https://www.instagram.com/mat_rizg/">
                    <img src={instaImg} alt="Перейти в инстаграм"/>
                </a>
                <p>Инстаграм</p>
            </div>

            <LinkBtn text={"Назад"} path={""}/>

        </div>
    );
};

export default ImageCode;