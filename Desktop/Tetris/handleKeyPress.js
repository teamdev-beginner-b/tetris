import { moveMino, rotateMino } from "./movement.js";

// キーボード入力を処理する関数
// 引数:
// - event: キーボードイベントオブジェクト
// - mino: 現在のミノオブジェクト（位置と回転情報を保持）
// - field: 現在のフィールド情報（衝突判定などで利用）
export function handleKeyPress(event, mino, field) {
  const key = event.key; // 押されたキーを取得

  // ユーザーのキー入力に応じて、ミノの操作を実行
  switch (key) {
    case "ArrowLeft": // 左矢印キー
      return moveMino(mino, "left"); // 左に移動
    case "ArrowRight": // 右矢印キー
      return moveMino(mino, "right"); // 右に移動
    case "ArrowDown": // 下矢印キー
      return moveMino(mino, "down"); // 下に移動
    case "ArrowUp": // 上矢印キー
      return rotateMino(mino); // ミノを回転
    default:
      console.log("未対応のキー: " + key);
      return mino; // 変更なし
  }
}
