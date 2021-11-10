import React from 'react'
import InfoCard from "../../components/UI/infoCard/InfoCard";
import TestCard from "../../components/UI/testCard/TestCard";
import classes from './main.module.css'

function Main() {
    return (
        <div className="container">
            <div className={classes.Main}>
                <div className={classes.mainTitle}>
                    <h1>
                        Эксклюзивно от астрозажигалки Юлии Рыж
                    </h1>
                </div>

                <div className={classes.infocards}>
                    <InfoCard
                        title={"Разбор натальной карты:"}
                        description={"Увеличь качество жизни на 200%!"}
                        path={"natal_analysis"}
                    />
                    <InfoCard
                        title={"Соляр:"}
                        description={"Сделайте свой год уникальным - запуск соляра"}
                        path={"solar"}
                    />
                    <InfoCard
                        title={"Код к имиджу:"}
                        description={"Как слышать “ДА” в ответ на все свои предложения"}
                        path={"image_code"}
                    />
                    <InfoCard
                        title={"Натальная карта вашего ребенка:"}
                        description={"Зажигаем жизнь ребенка"}
                        path={"natal_child"}
                    />
                </div>
                <div className={classes.testcards}>
                    <TestCard
                        title={"Уточнение времени рождения"}
                        description={"Для уточнения времени рождения потребуется ответить на следующие вопросы. Будь внимательна, в графе ответ нужно писать сколько тебе было лет на момент произошедшего события. После прохождения теста скопируйте результат с помощью соответсвующей кнопки и отправьте его сообщением в любом удобном вам месседжере. "}
                        path={"rectification"}
                    />
                    <TestCard
                        title={"Диагностика планет"}
                        description={"Для проведения диагностики, необходимо ответить на все вопросы. После прохождения теста скопируйте результат или сделайте скриншот и отправьте его сообщением в любом удобном вам месседжере. "}
                        path={"test"}
                    />
                    <TestCard
                        title={"Заявка на расклад таро"}
                        description={"Для того, чтобы сформировать заявку на расклад таро, ответьте на следующие вопросы, скопируйте результат с помощью соответсвующей кнопки и отправьте его сообщением в любом удобном вам месседжере. "}
                        path={"test"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;
