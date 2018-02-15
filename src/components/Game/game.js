import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './game.css';
import ledger from '../../ledger.js';

class Game extends Component {
    constructor(props) {
        super(props);

        const question = ledger[Math.floor(Math.random() * ledger.length)];

        // Init State
        this.state = {
            currentQuestion: question
        };
    }


    render() {
        const curQues = this.state.currentQuestion;

        return (
            <section className="game">
                <p className="game__question">What is the time complexity of this function?</p>
                <img className="game__img" src="./img/carbon-snip-1.png" alt="code image"/>

                <div className="game__body">
                    <ul className="game__answers">
                        <li className="game__btn">1</li>
                        <li className="game__btn">n</li>
                        <li className="game__btn">n^2</li>

                        <li className="game__btn">2^n</li>
                        <li className="game__btn">log(n)</li>
                        <li className="game__btn">n*log(n)</li>
                    </ul>
                </div>
            </section>
        );
    }
}

Game.propTypes = {};

export default Game;