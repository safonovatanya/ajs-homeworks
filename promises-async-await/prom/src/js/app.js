// TODO: write your code here
import readGameSaving from './game';

class GameSavingData {
  constructor(data) {
    this.data = data;
  }

  json() {
    return new Promise((resolve) => {
      // эмуляция обработки ArrayBuffer
      setTimeout(() => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(this.data)));
      }, 1000);
    });
  }
}

export default class GameSavingLoader {
  load() {
    return async function gameSaving() {
      try {
        const data = await readGameSaving();
        const gameSavingData = new GameSavingData(data);
        const str = await gameSavingData.json();
        const result = await JSON.parse(str);
        return result;
      } catch (e) {
        return 'Ошибка';
      }
    };
  }
}