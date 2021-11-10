import React, {useRef, useState} from 'react';
import classes from './rectification.module.css'
import photo1 from '../../img/1photo(new).jpg'

const Rectification = () => {

    // let [answer1, setAnswer1] = useState('')
    // let r1 = useRef()
    // setAnswer1(r1.current.value())


    // function getCheckedRadio(radio_group) {
    //     //Обходим весь список радиокнопок
    //     for (var i = 0; i < radio_group.length; i++) {
    //         var button = radio_group[i];
    //         //Нашли отмеченную
    //         if (button.checked) {
    //             return button;
    //         }
    //     }
    //     //Ни одна не отмечена
    //     return undefined;
    // }
    //
    // let input_answer_arr = [];
    // input_answer_arr[1] = getCheckedRadio(document.getElementsByName('age_answer_1')).value;


    return (
        <div className={classes.container}>
            <img className={classes.image} src={photo1} alt=""/>

            <div className={classes.title}>
                <h1>
                    Уточнение времени рождения (Ректификация)
                </h1>
            </div>
            <div className={classes.box}>
                <p>Вопрос 1</p><hr/>
                <p><span id="age_q_1"></span></p>
                <div>
                    <input  type={"radio"} name={"age_answer_1"} value={"младший"}/>Да
                    <input type={"radio"} name={"age_answer_1"} value={"не младший"}/>Нет
                    <input type={"radio"} name={"age_answer_1"} value={"единственный"}/>Я единственный ребенок в семье
                    <input type={"radio"} name={"age_answer_1"} value={"единственный"} style={{display: "none"}} />
                </div>


            </div>

        </div>
    );
};

export default Rectification;