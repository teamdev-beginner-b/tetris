import { GameLoop } from './gameLoop.js';
import { generateMino } from './generateMino.js';
import { Field } from './field.js';
import { handleKeyPress } from './handleKeyPress.js';
import { is_RowFull, updateScoreDisplay } from './line_clear.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const field = new Field(ctx);
const gameLoop = new GameLoop(field, ctx);
const minoGenerator = generateMino();

document.addEventListener('keydown', (event) => {
    handleKeyPress(event, field, minoGenerator);
});

// ログレベルを定義
const e = {
    Info: 1,
    Warning: 2,
    Error: 4,
    Debug: 8
};

const loglevel = e.Info | e.Warning | e.Error | e.Debug; // すべてのログレベルを有効にする

// ログ出力用のオブジェクト
const st = {
    info(...t) {
        if (loglevel & e.Info) console.info(...t);
    },
    warning(...t) {
        if (loglevel & e.Warning) console.warn(...t);
    },
    error(...t) {
        if (loglevel & e.Error) console.error(...t);
    },
    assert(t, ...n) {
        if (loglevel & e.Debug) {
            n.unshift(t);
            console.assert(t, ...n);
        }
    },
    debug(...t) {
        if (loglevel & e.Debug) console.debug(...t);
    }
};

// スコアを更新する関数
function updateScore(score) {
    updateScoreDisplay(); // line_clear.jsのupdateScoreDisplayを呼び出す
}

// UIを更新する関数
function updateUI(score) {
    updateScore(score); // スコアを更新
}

// ゲームループを開始
gameLoop.start(updateUI);

// フィールドの更新時にline_clear.jsのis_RowFullを呼び出す
function updateField(stage) {
    is_RowFull(stage); // 横一列が揃ったら消去し、スコアを更新
}

// ゲームループ内でupdateFieldを呼び出す
gameLoop.onUpdate(() => {
    updateField(field.stage);
});
