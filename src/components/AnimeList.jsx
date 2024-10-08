import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from '../styles/module.css';

function AnimeList() {
    const [items, setItems] = useState(['Naruto', 'Attack on Titan', 'One Piece']);
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (inputValue.trim()) {
            setItems([...items, inputValue.trim()]);
            setInputValue('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Enter anime name" 
                className={styles.inputField}
            />
            <button onClick={addItem} className={`${styles.animeButton} ${styles.addButton}`}>Add Anime</button>
            <TransitionGroup>
                {items.map((item, index) => (
                    <CSSTransition key={index} timeout={300} classNames={{
                        enter: styles.itemEnter,
                        enterActive: styles.itemEnterActive,
                        exit: styles.itemExit,
                        exitActive: styles.itemExitActive,
                    }}>
                        <div className={styles.listItem}>{item}</div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default AnimeList;
