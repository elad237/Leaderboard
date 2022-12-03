import './style.css';
import { postScore, displayScores } from './modules/game.js';

document.querySelector('#add-score').addEventListener('click', (e) => {
  e.preventDefault();
  postScore();
});

document.querySelector('#refresh').addEventListener('click', () => {
  displayScores();
});

document.addEventListener('DOMContentLoaded', displayScores());
