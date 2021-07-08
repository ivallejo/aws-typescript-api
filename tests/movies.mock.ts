export const findOne = {
    "id": "19e9e850-dfb0-11eb-aebf-e3cc74ae0eb8",
    "name": "Wonder Woman",
    "createdAt": 1625723300693
};
export const castError = new Error('Cast to number failed for value "undefined" at path "id" for model "Movies"');

export const find = [
  {
      "id": "19e9e850-dfb0-11eb-aebf-e3cc74ae0eb8",
      "name": "Wonder Woman",
      "createdAt": 1625723300693
  },
  {
      "id": "36485c60-dfa2-11eb-bbe5-11b63c930722",
      "name": "Wonder Woman 2",
      "createdAt": 1625723300693
  }
];

export const findError = new Error('test find error');

export const create = {
  "id": "36485c60-dfa2-11eb-bbe5-11b63c930722",
  "name": "Wonder Woman 2",
  "createdAt": 1625723300693
}

export const createError = new Error('E11000 duplicate key error collection: movies index: id dup key: { id: 36485c60-dfa2-11eb-bbe5-11b63c930722 }');
