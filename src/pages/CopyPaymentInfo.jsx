import React from 'react'

// Components
import Field from '../components/CopyField'

// Styles
import styles from './index.module.sass';

const data = {
    iban: 'UA923220010000026009340147254',
    ipn: '3649801120',
    pib: 'ФОП Волкова Анна Русланівна',
    for: 'оплата за послуги',
};

const CopyPaymentInfo = () => {
    return (
        <div className={styles['payment-info']}>
            <div className={styles['payment-info__wrapper']}>
                <h2
                    className={`${styles['payment-info__title']} animate__animated animate__fadeIn`}
                    data-wow-delay="0.1s"
                >
                    Дані для оплати по IBAN
                </h2>
                <Field
                    className="animate__animated animate__fadeIn"
                    data-wow-delay="0.2s"
                    label="IBAN" value={data.iban}
                />
                <Field
                    className="animate__animated animate__fadeIn"
                    data-wow-delay="0.25s"
                    label="ІПН" value={data.ipn}
                />
                <Field
                    className="animate__animated animate__fadeIn"
                    data-wow-delay="0.3s"
                    label="Найменування отримувача" value={data.pib}
                />
                <Field
                    className="animate__animated animate__fadeIn"
                    data-wow-delay="0.35s"
                    label="Призначення" value={data.for}
                />
            </div>
        </div >
    )
}

export default CopyPaymentInfo