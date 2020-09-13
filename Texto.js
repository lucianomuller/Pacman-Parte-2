class Texto extends Phaser.GameObjects.Text{
    constructor(config){
        super(config.scene)
    
    puntaje = config.scene.add.text(65, 6, 'Puntaje ' + puntos, {fontSize: 20}).setTint(0xFFF000);
    ganar = config.scene.add.text(430, 6, 'Ganadas ' + ganada, {fontSize: 20}).setTint(0xFFF000);
    }
    }