import { initializeField } from "./field.js";
import { generateMino } from "./generateMino.js";
import { gameLoop } from "./gameLoop.js";
import { isGameOver } from "./gameOver.js";

const field = initializeField(); // フィールドを初期化
let currentMino = generateMino(); // 最初のミノを生成

// キャンバスの準備
const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");

// ゲームループを開始
gameLoop(field, currentMino, canvasContext);

// ゲームオーバー判定
if (isGameOver(field)) {
    alert("Game Over!"); // ゲームオーバーのメッセージを表示
    location.reload(); // ゲームをリロードして再スタート
}

const canvas = document.getElementById("gameCanvas");
console.log(canvas); // キャンバス要素をコンソールに出力

if (!canvas) {
  console.error("キャンバスが取得できませんでした。HTMLにIDが正しく設定されているか確認してください。");
} else {
  console.log("キャンバス要素が正常に取得できました。");
}
