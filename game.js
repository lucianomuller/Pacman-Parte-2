var config = {
    type: Phaser.AUTO,
     scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 608,
        height: 608,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }

    },
    
    //la importante es la primera, que es la que arranca
    scene: [Escena3,Escena2,Escena1]
};

var game = new Phaser.Game(config);
var mapa;
var mapaimagen;
var pacman;
var bolagrande;
var bolag;
var fantasma;
var fantasma2;
var fantasma3;
var fantasma4;
var fantasma5;
var fantasma6;
var cursor_izq;
var cursor_der;
var cursor_arr;
var cursor_aba;
var puntos = -10;
var puntaje;
var ganada = 0;
var ganar;
var text;
var musicapacman;
var traga;
