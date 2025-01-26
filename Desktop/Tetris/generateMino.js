import blocks from "./mino.js";

export function generateMino() {
    const randomIndex = Math.floor(Math.random() * blocks.length);
    const block = blocks[randomIndex];

    return {
        shape: block.shape,
        color: block.color,
        rotation: 0,
        x: 3, // 初期位置（横方向の中央）
        y: 0  // 初期位置（上部スタート）
    };
}
