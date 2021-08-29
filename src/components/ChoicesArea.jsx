import React from 'react'
import styles from './ChoicesArea.module.css'

export default function ChoicesArea({dataObj, storyString, change, button_text}) {
    var choice = "";
    const eventHandler = (e) => {
        choice = e.target.value;
        console.log(storyString + choice);
    }

    var items = []
    for (let tempObj in dataObj)
    {
        console.log(dataObj[tempObj]);
        for (let key in dataObj[tempObj]) {
            items.push(
                <div key={storyString + key}>
                    <input type="radio" name={"choices"} value={key} onChange={eventHandler}></input> <label> {dataObj[tempObj][key]} </label>
                </div>
            );
        }
    }

    const nextChoice = () => {
        //stroyString = stroyString + choice;
        //console.log(stroyString);
        //setStoryString(stroyString + choice);
        console.log(storyString + choice);
        change(storyString + choice);
    }     

    return (
        <div className={styles.choicesAreaComponent}>
            {items}
            <button className={styles.choicesButton} onClick={nextChoice}> {button_text} </button>
        </div>
    )
}
