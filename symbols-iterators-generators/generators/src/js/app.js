import Team from './Team';
import Person from './Person';

const team = new Team();
const lora = new Person('Lora', 'Magician');
const ursam = new Person('Ursam', 'Daemon');
const mankal = new Person('Mankal', 'Swordsman');
team.add(mankal);
team.addAll(lora, ursam, mankal);
for (const hero of team) {
  console.log(hero);
}