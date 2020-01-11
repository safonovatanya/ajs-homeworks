function Character(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name entered incorrectly');
    }
    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    } else {
      throw new Error('Invalid character type specified');
    }
  
    this.health = 100;
    this.level = 1;
    this.name = name;
    this.type = type;
  
    return this;
  }
  
  export default Character;