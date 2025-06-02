import React, { useEffect } from 'react';

// Icons
import { CheckCircle } from 'lucide-react';

// Styles
import styles from './index.module.sass';

const Notification = ({ show, setShow, text }) => {
    useEffect(() => {
        if (show) {
            const timeout = setTimeout(() => {
                setShow(false);
            }, 3000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [show, setShow]);

    return (
        show ? (
            <div
                className={`${styles.notification} animate__animated animate__fadeInRight`}
                data-wow-duration="0.4s"
            >
                <CheckCircle color="#4CAF50" size={24} />
                <span className={styles.notification__message}>{text}</span>
            </div>
        ) : null
    );
};

export default Notification;
