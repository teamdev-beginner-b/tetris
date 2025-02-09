export class Field {
  constructor(ctx, rows = 20, cols = 10) {
    this.ctx = ctx;
    this.rows = rows;
    this.cols = cols;
    // 2D 配列（グリッド）を初期化。初期値は null
    this.grid = Array.from({ length: rows }, () => Array(cols).fill(null));
  }

  draw(blockSize) {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.grid[y][x] !== null) {
          this.ctx.fillStyle = this.grid[y][x];
          this.ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
        }
      }
    }
  }
}
