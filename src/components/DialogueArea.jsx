import React from 'react'
//import './DialogueArea.css';
import styles from './DialogueArea.module.css';

function DialogueArea({dialogue}) {
    return (
        <div className={styles.dialogueAreaComponent}>
            <h2 className={styles.dialogue}> {dialogue} </h2>        
        </div>
    )
}

export default DialogueArea
