class Escena3 extends Phaser.Scene {
    constructor() {
      super('menu');
    }

    preload(){
        this.load.image('titulo', 'assets/titulopacman.jpg');
        this.load.image('Etapa1', 'assets/etapa1.png');
        this.load.image('Etapa2', 'assets/etapa2.png');
        this.load.audio('pacmanmusica', 'assets/pacmanmusica.mp3');
    };

    create(){
        
      this.musicapacman=this.sound.add('pacmanmusica');
      this.musicapacman.loop = true;
      this.musicapacman.play();


        this.add.image(300, 200, 'titulo');
        this.add.image(300, 420, 'Etapa1').setInteractive().on('pointerdown', () => this.Etapa1() );
        this.add.image(300,500, 'Etapa2').setInteractive().on('pointerdown', () => this.Etapa2() );
    };

    Etapa1(){
       
        this.scene.start('Etapa1');
      }
    

    Etapa2(){
       
          this.scene.start('Etapa2');
        }
      }