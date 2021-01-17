import React from 'react';
import s from './Counter.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const { good, neutral, bad } = options;
    return (
        <>
            <button className={s.button}
                type="button"
                name={good}
                onClick={() => onLeaveFeedback('good')}
                >
                Good
            </button>
                <button className={s.button}
                type="button"
                name={neutral}
                onClick={() => onLeaveFeedback('neutral')}
                >
                Neutral
            </button>
            <button className={s.button}
                type="button"
                name={bad}
                onClick={() => onLeaveFeedback('bad')}
                >
                Bad
            </button>
        </>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;