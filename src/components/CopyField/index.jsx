import React, { useState } from 'react';

// Components
import Notification from '../Notification';

// Icons
import { CheckCircle } from 'lucide-react';

// Styles
import styles from './index.module.sass';


const Field = ({ label, value, className }) => {
    const [show, setShow] = useState(false);
    const [showIcon, setShowIcon] = useState(false);

    const handleCopy = () => {
        setShow(true);
        setShowIcon(true);
        const timeout = setTimeout(() => {
            setShowIcon(false);
        }, 1000);
        navigator.clipboard.writeText(value);
    };

    return (
        <>
            <div onClick={handleCopy} className={`${className || ''} ${styles.field}`}>
                <span className={styles.field__label}>{label}</span>
                <div className={styles['field__data-row']}>
                    <span className={styles.field__data}>{value}</span>
                    <button className={styles['field__copy-btn']}>
                        {showIcon ?
                            <div className={`${styles['field__copied-wrapper']} animate__animated animate__fadeIn`}>
                                <CheckCircle color="#4CAF50" size={24} />
                                <span className={styles.notification__message}>Скопійовано</span>
                            </div>
                            : 'Скопіювати'}
                    </button>
                </div>
            </div>
            <Notification show={show} text="Скопійовано" setShow={setShow} />
        </>
    );
};

export default Field;
