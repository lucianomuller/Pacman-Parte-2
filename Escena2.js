class Escena2 extends Phaser.Scene {
    constructor() {
      super('Etapa2');
    }

    preload ()
    {
    this.load.image('atlas', 'assets/atlas.png');
    this.load.tilemapTiledJSON('mapa', 'assets/mapapacman2.json');
    this.load.atlas('todo', 'assets/atlas.png', 'assets/atlas_atlas.json');
    this.load.audio('tragar', 'assets/tragar.mp3');

    };

    create ()
    {
     
      var mapa = this.add.tilemap('mapa');
      mapaimagen = mapa.addTilesetImage('atlas', 'atlas');
      var layer2 = mapa.createStaticLayer('piso', [mapaimagen], 0, 0);
      var layer = mapa.createStaticLayer('paredes', [mapaimagen], 0, 0);
      pacman = this.physics.add.sprite(376, 224, 'todo', 'pacman_boca_abierta').setOrigin(0, 0).setSize(31, 31);
      fantasma = this.physics.add.sprite(64, 64, 'todo', 'fantasma').setOrigin(0, 0).setSize(31, 31);
      fantasma2 = this.physics.add.sprite(512, 64, 'todo', 'fantasma').setOrigin(0, 0).setSize(31, 31).setTint(0xFFF0);
      fantasma3 = this.physics.add.sprite(384, 512, 'todo', 'fantasma').setOrigin(0, 0).setSize(31, 31).setTint(0xFF5733);
      fantasma4 = this.physics.add.sprite(192, 512, 'todo', 'fantasma').setOrigin(0, 0).setSize(31, 31).setTint(0xFFF);
      fantasma5 = this.physics.add.sprite(192, 160, 'todo', 'fantasma').setOrigin(0, 0).setSize(31, 31).setTint(0x00FF00);
      fantasma6 = this.physics.add.sprite(384, 160, 'todo', 'fantasma').setOrigin(0, 0).setSize(31, 31).setTint(0xFF00FF);
      var bolitas = mapa.getObjectLayer('bolitas')['objects'];
      var bol = this.physics.add.staticGroup();
      bolitas.forEach(object => {
        let obj = bol.create(object.x, object.y, 'todo', 'bolita');
        obj.setOrigin(0,1);
        obj.setSize(10,10).setOffset(27,-5);
      });
      this.traga=this.sound.add('tragar');
      bolagrande = new Bola ({scene: this})



    //colisiones
   
    this.physics.add.collider(pacman, layer); 
    this.physics.add.overlap(pacman, bol, this.comer, null, this);
    this.physics.add.collider(pacman, fantasma, this.perder, null, this);
    this.physics.add.collider(layer, fantasma);
    this.physics.add.collider(pacman, fantasma2, this.perder, null, this);
    this.physics.add.collider(layer, fantasma2);
    this.physics.add.collider(pacman, fantasma3, this.perder, null, this);
    this.physics.add.collider(layer, fantasma3);
    this.physics.add.collider(pacman, fantasma4, this.perder, null, this);
    this.physics.add.collider(layer, fantasma4);
    this.physics.add.collider(pacman, fantasma5, this.perder, null, this);
    this.physics.add.collider(layer, fantasma5);
    this.physics.add.collider(pacman, fantasma6, this.perder, null, this);
    this.physics.add.collider(layer, fantasma6);
    this.physics.add.overlap(pacman, bolag, this.comer1, null, this);
    
    layer.setCollision([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 6, 6, 0, 6, 0, 6, 6, 6, 0, 6, 0, 6, 6, 0, 6, 6, 6, 6, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 6, 6, 6, 0, 0, 6, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 6, 0, 0, 6, 6, 6, 0, 0, 0, 6, 0, 6, 6, 6, 6, 6, 0, 6, 0, 0, 0, 6, 6, 6, 0, 0, 6, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 6, 0, 0, 6, 6, 6, 0, 6, 0, 6, 6, 6, 0, 6, 0, 6, 6, 6, 0, 6, 0, 6, 6, 6, 6, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 6, 0, 6, 6, 6, 6, 0, 6, 0, 0, 0, 6, 6, 0, 6, 6, 0, 0, 0, 6, 0, 6, 6, 6, 6, 0, 6, 0, 6, 0, 6, 0, 0, 0, 6, 0, 6, 0, 6, 0, 6, 6, 6, 6, 0, 6, 0, 6, 0, 6, 6, 6, 6, 6, 0, 6, 0, 6, 0, 6, 6, 6, 6, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 6, 0, 6, 6, 6, 6, 0, 0, 0, 6, 0, 6, 6, 6, 6, 6, 0, 6, 0, 0, 0, 6, 6, 6, 0, 0, 6, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 6, 0, 0, 6, 6, 6, 0, 6, 0, 6, 0, 6, 6, 6, 6, 6, 0, 6, 0, 6, 0, 6, 6, 6, 0, 0, 6, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 6, 0, 0, 6, 6, 6, 0, 6, 0, 6, 0, 6, 0, 6, 0, 6, 0, 6, 0, 6, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
   

  //Teclas de movimiento
  cursor_izq = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  cursor_der = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  cursor_arr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  cursor_aba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

  pacman.setVelocityX(150);
  pacman.setVelocityY(150);
  puntaje = this.add.text(65, 6, 'Puntaje ' + puntos, {fontSize: 20}).setTint(0xFFF000);
  ganar = this.add.text(430, 6, 'Ganadas ' + ganada, {fontSize: 20}).setTint(0xFFF000);
    

  }
  update (){

    if(puntos === 2060){
      this.scene.start('Etapa2')
      puntos = -10;
      ganada = ganada + 1
    }
    if(cursor_izq.isDown){
      pacman.setVelocityX(-150);
      }else if(cursor_der.isDown){
          pacman.setVelocityX(150);
      }else if(cursor_arr.isDown){
             pacman.setVelocityY(-150); 
          }
          else if(cursor_aba.isDown){
              pacman.setVelocityY(150);
            }
            if(cursor_izq.isDown){
                  fantasma.setVelocityX(-110);
                  }else if(cursor_der.isDown){
                    fantasma.setVelocityX(110);
                  }else if(cursor_arr.isDown){
                    fantasma.setVelocityY(-110); 
                      }
                      else if(cursor_aba.isDown){
                        fantasma.setVelocityY(110);

                      }
                      if(cursor_izq.isDown){
                            fantasma2.setVelocityX(-110);
                            }else if(cursor_der.isDown){
                              fantasma2.setVelocityX(110);
                            }else if(cursor_arr.isDown){
                              fantasma2.setVelocityY(-110); 
                                }
                                else if(cursor_aba.isDown){
                                  fantasma2.setVelocityY(110);
                                }
                                if(cursor_izq.isDown){
                                      fantasma3.setVelocityX(90);
                                      }else if(cursor_der.isDown){
                                        fantasma3.setVelocityX(-90);
                                      }else if(cursor_arr.isDown){
                                        fantasma3.setVelocityY(90); 
                                          }
                                          else if(cursor_aba.isDown){
                                            fantasma3.setVelocityY(-90);
                                          }
                                          if(cursor_izq.isDown){
                                                fantasma4.setVelocityX(90);
                                                }else if(cursor_der.isDown){
                                                  fantasma4.setVelocityX(-90);
                                                }else if(cursor_arr.isDown){
                                                  fantasma4.setVelocityY(90); 
                                                    }
                                                    else if(cursor_aba.isDown){
                                                      fantasma4.setVelocityY(-90);
                                                    }
                                                    if(cursor_izq.isDown){
                                                          fantasma5.setVelocityX(150);
                                                          }else if(cursor_der.isDown){
                                                            fantasma5.setVelocityX(-150);
                                                          }else if(cursor_arr.isDown){
                                                            fantasma5.setVelocityY(150); 
                                                              }
                                                              else if(cursor_aba.isDown){
                                                                fantasma5.setVelocityY(-150);
                                                              }
                                                              if(cursor_izq.isDown){
                                                                    fantasma6.setVelocityX(150);
                                                                    }else if(cursor_der.isDown){
                                                                      fantasma6.setVelocityX(-150);
                                                                    }else if(cursor_arr.isDown){
                                                                      fantasma6.setVelocityY(150); 
                                                                        }
                                                                        else if(cursor_aba.isDown){
                                                                          fantasma6.setVelocityY(-150);
  }  
  }
  perder(){
    this.gameOver();
  }

  gameOver(){
    this.scene.start('Etapa2')
    puntos = -10;
    ganada = 0;

  };

  comer(pacman, bol){
    bol.destroy(bol.x, bol.y);
    puntos = puntos + 10;
    this.traga.play()
    puntaje.setText('Puntaje ' + puntos);
    ganar.setText('Ganadas ' + ganada)
    }

    comer1(pacman, bolag){
      bolag.destroy(bolag.x, bolag.y);
      puntos = puntos + 90;
      puntaje.setText('Puntaje ' + puntos);
      ganar.setText('Ganadas ' + ganada)
      }
  };