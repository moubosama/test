// グローバルに展開
phina.globalize();
// 定数
var SCREEN_WIDTH = 640;            // 画面横サイズ
var SCREEN_HEIGHT = 960;           // 画面縦サイズ
var GRID_SIZE = SCREEN_WIDTH / 4;  // グリッドのサイズ
var PIECE_SIZE = GRID_SIZE * 0.95; // ピースの大きさ
var PIECE_NUM_XY = 4;              // 縦横のピース数
var PIECE_OFFSET = GRID_SIZE / 2;  // オフセット値
/*
 * メインシーン
 */
phina.define('MainScene', {
  superClass: 'DisplayScene',
  // コンストラクタ
  init: function() {
    // 親クラス初期化
    this.superInit();
    // 背景色
    this.backgroundColor = 'gray';
    // グリッド
    var grid = Grid(SCREEN_WIDTH, PIECE_NUM_XY);
    // ピースグループ
    var pieceGroup = DisplayElement().addChildTo(this);
    // ピース配置
    PIECE_NUM_XY.times(function(spanX) {
      PIECE_NUM_XY.times(function(spanY) {
        // ピース作成
        var piece = Piece().addChildTo(pieceGroup);
        // Gridを利用して配置
        piece.x = grid.span(spanX) + PIECE_OFFSET;
        piece.y = grid.span(spanY) + PIECE_OFFSET;
      });
    });
  },
});
/*
 * ピースクラス
 */
phina.define('Piece', {
  // RectangleShapeを継承
  superClass: 'RectangleShape',
    // コンストラクタ
    init: function() {
      // 親クラス初期化
      this.superInit({
        width: PIECE_SIZE,
        height: PIECE_SIZE,
        cornerRadius: 10,
        fill: 'silver',
        stroke: 'white',
      });
    },
});
/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    // MainScene から開始
    startLabel: 'main',
  });
  // fps表示
  //app.enableStats();
  // 実行
  app.run();
});