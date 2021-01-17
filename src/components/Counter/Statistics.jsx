import React from 'react';
import s from './Counter.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
            <ul className={s.list}>
                <li>Good:{good}</li>
                <li>Neutral:{neutral}</li>
                <li>Bad:{bad}</li>
                <li>Total:{total}</li>
                <li>Positive feadback:{positivePercentage}%</li>
            </ul>
        </>
    );
};
    
export default Statistics;