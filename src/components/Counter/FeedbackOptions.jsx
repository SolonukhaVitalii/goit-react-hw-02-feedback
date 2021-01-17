import React from 'react';
import s from './Counter.module.css';
//import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const { good, neutral, bad } = options;
    return (
        <>
            <h1>Please leave feadback</h1>
            <button className={s.button}
                type="button"
                name={good}
                onClick={onLeaveFeedback}
                >
                Good
            </button>
                <button className={s.button}
                type="button"
                name={neutral}
                onClick={onLeaveFeedback}
                >
                Neutral
            </button>
            <button className={s.button}
                type="button"
                name={bad}
                onClick={onLeaveFeedback}
                >
                Bad
            </button>
        </>
    );
};

FeedbackOptions.propTypes = {
    
};

export default FeedbackOptions;