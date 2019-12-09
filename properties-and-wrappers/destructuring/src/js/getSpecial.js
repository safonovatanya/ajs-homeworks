export default function getSpecial({ special }) {
  const array = [...special];

  for (const item of array) {
    if (!item.description) {
      item.description = 'Описание недоступно';
    }
  }

  return array;
}
