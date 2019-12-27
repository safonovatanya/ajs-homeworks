export default function Person(name, type) {
  if (name.length < 2 || name.length > 10) {
    throw new Error('Имя персонажа должно быть больше 1, но меньше 10 символов');
  }

  switch (type) {
    case 'Bowman':
      this.type = type;
      this.attack = 25;
      this.defence = 25;
      break;
    case 'Swordsman':
      this.type = type;
      this.attack = 40;
      this.defence = 10;
      break;
    case 'Magician':
      this.type = type;
      this.attack = 10;
      this.defence = 40;
      break;
    case 'Undead':
      this.type = type;
      this.attack = 25;
      this.defence = 25;
      break;
    case 'Zombie':
      this.type = type;
      this.attack = 40;
      this.defence = 10;
      break;
    case 'Daemon':
      this.type = type;
      this.attack = 10;
      this.defence = 40;
      break;
    default:
      throw new Error('Неизвестный тип персонажа');
  }

  this.name = name;
  this.health = 100;
  this.level = 1;
}