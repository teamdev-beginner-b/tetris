// block.js
export class ColoredBlock {
  constructor(x, y, color) {
    this.x = x; // ブロックの横位置（列番号）
    this.y = y; // ブロックの縦位置（行番号）
    this.color = color; // ブロックの色
  }

  draw(ctx, blockSize) {
    ctx.fillStyle = this.color; // ブロックの色を設定
    ctx.fillRect(this.x * blockSize, this.y * blockSize, blockSize, blockSize); // ブロックを描画
  }
}
