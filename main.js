/*
 * runstant
 */

phina.globalize();

var ASSETS = {
  image: {
    'tomapiko': 'http://cdn.rawgit.com/phi-jp/phina.js/v0.1.1/assets/images/tomapiko.png',
  },
};

phina.define('MainScene', {
  superClass: 'DisplayScene',
  
  init: function() {
    this.superInit();
    
    var tomapiko = Sprite('tomapiko').addChildTo(this);
    
    tomapiko.x = this.gridX.center();
    tomapiko.y = this.gridY.center();
    tomapiko.width = 128;
    tomapiko.height = 128;
  },
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
    assets: ASSETS,
  });
  
  app.run();
});
