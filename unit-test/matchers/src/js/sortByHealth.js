export default function sortByHealth(heroes) {
  if (heroes.length === 0) {
    return false;
  }

  const compare = (a, b) => {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }
    return 0;
  };

  return heroes.sort(compare);
}