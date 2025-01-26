import { initializeField } from "./field.js";
import { gameLoop } from "./gameLoop.js";

const field = initializeField(); // フィールドを初期化
gameLoop(field); // ゲームループを開始
