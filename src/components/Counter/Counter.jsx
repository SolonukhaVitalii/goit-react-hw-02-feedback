import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import PropTypes from 'prop-types';
import Section from './Section';
import Notification from './Notification';

class Counter extends React.Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0
    }
    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        total: PropTypes.number,
        positivePercentage: PropTypes.number
    }
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
  
    handleFeedback = feedback => {
        this.setState(prevState => {
          return { [feedback]: prevState[feedback] + 1 };
        });
    }
    
    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, value) => acc + value, 0)
    }

    countPositiveFeedbackPercentage = () => {
        const percentage = Math.round(100 * this.state.good / this.countTotalFeedback());
        return percentage > 0 ? percentage : 0;
    }

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
            <>
                <Section title="Please leave feadback">
                <FeedbackOptions
                    options={this.state}
                    onLeaveFeedback={this.handleFeedback}
                    />
                </Section>
                {total === 0 ? (<Notification message="No feedback given" />)
                    : (
                <Section title="Statistics">
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                    positivePercentage={positivePercentage}
                    />
                    </Section>
                    )}
            </>
        );
    }
};

export default Counter;