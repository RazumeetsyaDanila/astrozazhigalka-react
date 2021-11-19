import React, {useState} from 'react';
import classes from './tarot.module.css'

const Tarot = () => {
    const [gender, setGender] = useState('Male');

    console.log(gender)

    return (
        <div className={classes.container}>

            <div className={classes.form_radio_btn}>
                <input className={classes.form_radio_btn} type="radio" name="a1" id={'radio-1'}
                       onClick={() => setGender('муж')}/>
                <label htmlFor="radio-1" style={{paddingTop: 0}}>Да</label>
            </div>

            <div className={classes.form_radio_btn}>
                <input className={classes.form_radio_btn} type="radio" name="a1" id={'radio-2'}
                       onClick={() => setGender('жен')}/>
                <label htmlFor="radio-2">Нет</label>
            </div>


        </div>
    );
};

export default Tarot;