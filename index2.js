const _ = require("lodash");

function recursiveReverse(keyword) {
  let start = 0;
  let end = 0;

  // for (let i = 0; i < keyword.length; i++) {
  for (let i = 0; i < keyword.length; i++) {
    if (keyword.charAt(i) == "(") {
      start = i;
    }
    if (keyword.charAt(i) == ")") {
      end = i;
      let keySlice = _.slice(keyword,start + 1, end);
      _.reverse(keySlice);
      //let keyJoin = _.join(keySlice,"");
      const keyStart =  _.slice(keyword,0,start);
      const keyEnd =  _.slice(keyword,end + 1);
      const keyConcat = _.concat(keyStart,keySlice,keyEnd);
      const keyJoin = _.join(keyConcat,"");
      return recursiveReverse(keyJoin);
    }
  }
  return keyword;
}

const s = "(tavi(h(ia)v)t)";
console.log(recursiveReverse(s));
