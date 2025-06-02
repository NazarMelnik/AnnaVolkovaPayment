import React, { useState } from 'react';

// Components
import Notification from '../Notification';

// Styles
import styles from './index.module.sass';

const Field = ({ label, value, className }) => {
    const [show, setShow] = useState(false);

    const handleCopy = () => {
        setShow(true);
        navigator.clipboard.writeText(value);
    };

    return (
        <>
            <div onClick={handleCopy} className={`${className || ''} ${styles.field}`}>
                <span className={styles.field__label}>{label}</span>
                <div className={styles['field__data-row']}>
                    <span className={styles.field__data}>{value}</span>
                    <button className={styles['field__copy-btn']}>Скопіювати</button>
                </div>
            </div>
            <Notification show={show} text="Скопійовано" setShow={setShow} />
        </>
    );
};

export default Field;
