const _ = require("lodash");

function anagram(array) {
  let organized = {};

  _.forEach(array, (value, index) => {
    let keywordSplit = _.split(value, "");
    keywordSplit = _.sortBy(keywordSplit);
    const resultKeyword = _.join(keywordSplit, "");
    const boolKeyword = _.has(organized, [resultKeyword]);
    if (!boolKeyword) {
      organized[resultKeyword] = [];
    }
    organized[resultKeyword].push(value);
  });
  return organized;
}

const result = anagram([
  "AMOR",
  "XISELA",
  "JAMON",
  "ROMA",
  "OMAR",
  "MORA",
  "ESPONJA",
  "RAMO",
  "JAPONES",
  "ARMO",
  "MOJAN",
  "MARO",
  "ORAM",
  "MONJA",
  "ALEXIS"
]); // Example

console.log(result);
