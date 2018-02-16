import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './game.css';
import { ledger, bigOAnswers } from '../../ledger.js';

class Game extends Component {
    constructor(props) {
        super(props);

        // Init State
        this.state = {
            currentQuestion: {},
            answerFound: false,
            correctAnswerIndex: -1,
            answersClicked: bigOAnswers.map(() => false)
        };
    }
    
    componentDidMount = () => {
        this.newQuestion();
    }

    newQuestion = () => {
        const question = ledger[Math.floor(Math.random() * ledger.length)];
        this.setState({ currentQuestion: question });
    }

    checkAnswer = (value, answerIndex) => {
        // if Answer was correct
        if (value === this.state.currentQuestion.answer) {
            // TODO: change button styles.. green
            // this.newQuestion();
            this.setState(prevState => ({
                answerFound: true,
                correctAnswerIndex: answerIndex,
                answersClicked: prevState.answersClicked.map(() => true)
            }));
        }
        else {
            // TODO: change button style.. grey   
            this.setState(prevState => ({
                answersClicked: prevState.answersClicked.map((answer, index, arr) => answerIndex === index ? true : arr[index])
            }));  
        }
    }


    render() {
        const curQues = this.state.currentQuestion;

        return (
            <section className="game">
                <p className="game__question">What is the time complexity of this function?</p>
                <img className="game__img" src={curQues.img} alt="code image"/>

                <div className="game__body">
                    <ul className="game__answers">
                        {bigOAnswers.map((answer, index) => (
                            <li className={classnames(
                                    "game__btn",
                                    { "game__btn--clicked": this.state.answersClicked[index] && index !== this.state.correctAnswerIndex },
                                    { "game__btn--correct": index === this.state.correctAnswerIndex }
                                )} 
                                key={index} 
                                onClick={this.checkAnswer.bind(this, answer, index)}>{answer}</li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}

Game.propTypes = {};

export default Game;