import faker from "faker";

/**
 * Generates fake data
 * @param fields
 * @param amount
 * @returns {[]}
 */
export const generateFakeData = (fields, amount = 10) => {

  const res = [];

  for (let i = 0; i < amount; i++) {
    const randomCard = faker.helpers.createCard(); // random contact card containing many properties
    res.push(randomCard)
  }

  return res;
}