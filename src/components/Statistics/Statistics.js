import React from 'react';
import s from './Statistics.module.css';
//import PropTypes from 'prop-types';

class Statistics extends React.Component {
    static defaultProps = {

    };
    static propTypes = {

    };
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                good: prevState.good +1,
                neutral: prevState.neutral +1,
                bad: prevState.bad +1,
            }
        });
    };
    render() {
        return (
            <div>
                <h1>Please leave feadback</h1>
                <div>
                    <button className={s.button}
                        type='button'
                        onClick={this.handleIncrement}
                    >
                        Good
                    </button>
                    <button className={s.button}
                        type='button'
                        onClick={this.handleIncrement}
                    >
                        Neutral
                    </button>
                    <button className={s.button}
                        type='button'
                        onClick={this.handleIncrement}
                    >
                        Bad
                    </button>
                </div>
                <h1>Statistics</h1>
                <ul className={s.list}>
                    <li>Good:{this.state.good}</li>
                    <li>Neutral:{this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                </ul>
            </div>
        );
    }
};



export default Statistics;