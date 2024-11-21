// Write a function that takes two sets and returns their symmetric difference (elements in either set but not both).
function symmdiff(set1, set2) {
    const diff = new Set();
    for (const i of set1) {if (!set2.has(i)) {diff.add(i);}}
    for (const i of set2) {if (!set1.has(i)) {diff.add(i);}}
    return diff;}
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const sy = symmdiff(set1, set2);
console.log(sy);


// Given a Map, implement a function to group its values based on a callback function. For example, given:map = new Map([['a', 1], ['b', 2], ['c', 3]]);callback = (val) => val % 2 === 0;The result should be { true: ['b'], false: ['a', 'c'] }.
function groupBy(map, back) {
    const result = {};
    for (const [key, value] of map) {
      const groupKey = back(value);
      if (!result[groupKey]) {result[groupKey] = [];}
      result[groupKey].push(key);}
    return result;}
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
const back = (val) => val % 2 === 0;
const res = groupBy(map, back);
console.log(res);


// Write a function to flatten a deeply nested Map into an object with dot notation. For example, given:,map = new Map([['a', new Map([['b', new Map([['c', 1]])]])]]);The result should be { 'a.b.c': 1 }.

function flat(map) {
  let result = {};
  map.forEach((v, k) => v instanceof Map ? Object.entries(flat(v)).forEach(([sk, sv]) => result[k + '.' + sk] = sv): result[k] = v
  );
  return result;
}

let map = new Map([['a', new Map([['b', new Map([['c', 1]])]])]]);
console.log(flat(map));
