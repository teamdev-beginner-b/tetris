import { gameLoop } from './gameLoop.js';
import { generateMino } from './generateMino.js';
import { Field } from './field.js';
import { handleKeyPress } from './handleKeyPress.js';
import { is_RowFull, updateScoreDisplay } from './line_clear.js';
// main.js
import { blocks } from './mino.js';

blocks.forEach((block, index) => {
  console.log(`テトリミノ ${index + 1}:`);
  console.log('形状:', block.shape);
  console.log('色:', block.color);
});

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const field = new Field(ctx);
window.currentMino = generateMino(); // グローバル変数

document.addEventListener('keydown', (event) => {
  console.log(event.key);
  const newMino = handleKeyPress(event, window.currentMino, field);
  if (newMino) {
    window.currentMino = newMino;
  }
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
gameLoop(field,ctx);
