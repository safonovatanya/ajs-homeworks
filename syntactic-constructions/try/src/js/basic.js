export default function NumberNot(quantity) {
  try {
    if (Number.isNaN(Number(quantity))) {
      throw new Error(`Error ${quantity}`);
    }
    return Number(quantity);
  } catch (e) {
    return (`${error}`);
  }
}