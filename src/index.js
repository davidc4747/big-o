import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import Game from './components/Game/game.js';

const App = () => (
    <section><Game /></section>
)

ReactDOM.render(<App />, document.getElementById('app'));