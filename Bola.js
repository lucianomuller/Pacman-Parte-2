class Bola extends Phaser.GameObjects.Sprite{

constructor(config){
    super(config.scene, config.texture, config.sprite)
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this)
    this.scene.events.on('update', this.update , this);


    bolag = config.scene.physics.add.group();
    bolag.create(122,88, 'todo', 'bolita').setOrigin(0,0).setScale(1.5).setTint(0xFF8000).setSize(10,10);
    bolag.create(442,88, 'todo', 'bolita').setOrigin(0,0).setScale(1.5).setTint(0xFF8000).setSize(10,10);
    bolag.create(378,472, 'todo', 'bolita').setOrigin(0,0).setScale(1.5).setTint(0xFF8000).setSize(10,10);
    bolag.create(186,472, 'todo', 'bolita').setOrigin(0,0).setScale(1.5).setTint(0xFF8000).setSize(10,10);
    bolag.create(282,344, 'todo', 'bolita').setOrigin(0,0).setScale(1.5).setTint(0xFF8000).setSize(10,10);
}

}

