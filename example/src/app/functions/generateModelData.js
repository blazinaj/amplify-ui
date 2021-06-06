import faker from "faker";

export const generateModelData = (fields, amount = 100) => {
  const res = [];

  for (let i = 0; i < amount; i++) {

    const item = {};

    for (const field of fields) {
      item[field.name] = faker[field.category][field.type]
    }

    res.push(item)
  }

  return res;
}