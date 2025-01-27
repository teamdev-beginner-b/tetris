import { gameLoop } from './gameLoop.js';
import { generateMino } from './generateMino.js';
import { Field } from './field.js';
import { handleKeyPress } from './handleKeyPress.js';
import { is_RowFull, updateScoreDisplay } from './line_clear.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const field = new Field(ctx);
let currentMino = generateMino();

document.addEventListener('keydown', (event) => {
    currentMino = handleKeyPress(event, currentMino, field);
});

// スコアを更新する関数
function updateScore(score) {
    updateScoreDisplay(); // line_clear.jsのupdateScoreDisplayを呼び出す
}

// UIを更新する関数
function updateUI(score) {
    updateScore(score); // スコアを更新
}

// ゲームループを開始
gameLoop(field, currentMino, ctx);
