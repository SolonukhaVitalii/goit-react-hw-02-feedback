import React from 'react';
import s from './Statistics.module.css';
//import PropTypes from 'prop-types';

class Statistics extends React.Component {
    handleIncrement = () => {

    }
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
                    <li>Good:</li>
                    <li>Neutral:</li>
                    <li>Bad:</li>
                </ul>
            </div>
        );
    }
};



export default Statistics;