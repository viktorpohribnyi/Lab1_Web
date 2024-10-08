import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../styles/module.css';

function AnimeDialog() {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div>
            <button onClick={() => setShowDialog(!showDialog)} className={`${styles.animeButton} ${styles.showDialogButton}`}>
                {showDialog ? 'Hide Dialog' : 'Show Dialog'}
            </button>
            <CSSTransition
                in={showDialog}
                timeout={300}
                classNames={{
                    enter: styles.dialogEnter,
                    enterActive: styles.dialogEnterActive,
                    exit: styles.dialogExit,
                    exitActive: styles.dialogExitActive,
                }}
                unmountOnExit
            >
                <div className={styles.dialogBox}>
                    <h2 className={styles.dialogTitle}>Welcome to the Anime World!</h2>
                    <p className={styles.dialogText}>Enjoy your adventure!</p>
                </div>
            </CSSTransition>
        </div>
    );
}

export default AnimeDialog;

