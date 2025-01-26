import blocks from "./mino.js";

// 新しいミノを生成する関数
export function generateMino() {
  // ランダムにblocks配列から1つのミノを選択
  const randomIndex = Math.floor(Math.random() * blocks.length);
  const block = blocks[randomIndex];

  // ミノの初期状態を設定
  return {
    shape: block.shape, // ミノの形
    color: block.color, // ミノの色
    rotation: 0,        // 初期回転状態
    x: 3,               // 初期位置（横方向の中央）
    y: 0                // 初期位置（上部スタート）
  };
}
