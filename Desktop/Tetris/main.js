// ゲームのエントリーポイント
// 各モジュールを読み込み、ゲームを起動する
import { initializeField } from "./field.js";
import { generateMino } from "./generateMino.js";
import { gameLoop } from "./gameLoop.js";
import { isGameOver } from "./gameOver.js";

const field = initializeField(); // フィールドを初期化
let currentMino = generateMino(); // 最初のミノを生成

gameLoop(field, currentMino); // ゲームループを開始

// ゲームオーバー判定
if (isGameOver(field)) {
  alert("Game Over!"); // ゲームオーバーのメッセージを表示
  location.reload(); // ゲームをリロードして再スタート
}
