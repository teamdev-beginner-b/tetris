import { initializeField } from "./field.js";
import { generateMino } from "./generateMino.js";
import { gameLoop } from "./gameLoop.js";
import { isGameOver } from "./gameOver.js";
import { renderField } from "./ui.js"; // フィールド描画関数をインポート

// フィールドと最初のミノを初期化
const field = initializeField(); // フィールドを初期化
let currentMino = generateMino(); // 最初のミノを生成

// キャンバスの準備
const canvas = document.getElementById("gameCanvas");

// キャンバスが取得できているか確認
if (!canvas) {
  console.error("キャンバス要素が取得できませんでした。HTMLにIDが正しく設定されているか確認してください。");
  throw new Error("キャンバスが取得できませんでした");
} else {
  console.log("キャンバス要素が正常に取得できました。");
}

const canvasContext = canvas.getContext("2d");

// 初期状態のフィールドとミノを描画
renderField(field, currentMino, canvasContext);

// ゲームループを開始
gameLoop(field, currentMino, canvasContext);

// ゲームオーバー判定を定期的に実行
setInterval(() => {
  if (isGameOver(field)) {
    alert("Game Over!"); // ゲームオーバーのメッセージを表示
    location.reload(); // ゲームをリロードして再スタート
  }
}, 500); // 500msごとにチェック
