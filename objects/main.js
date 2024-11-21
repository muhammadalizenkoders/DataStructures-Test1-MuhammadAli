// Write a function to merge two deeply nested objects, where properties from the second object overwrite those in the first if there are conflicts. Ensure arrays are concatenated and not overwritten.
function merge(obj1, obj2) {
    const merged = { ...obj1 };
  
    for (const key in obj2) {if (Array.isArray(obj2[key]) && Array.isArray(merged[key])) {
        merged[key] = [...merged[key], ...obj2[key]];}
        else if (typeof obj2[key] === 'object' && typeof merged[key] === 'object') {
        merged[key] = merge(merged[key], obj2[key]);} 
        else {merged[key] = obj2[key];}}
    return merged;}
  
  const obj1 = { a: 3, b: { c: 9, d: [9, 9] } };
  const obj2 = { b: { d: [10, 11], e: 34 }, f: 90 };
  const mergedObj = merge(obj1, obj2);
  console.log(mergedObj);

// Implement a function that finds all properties in an object whose values are functions and returns their names as an array.
function findfunc(obj) {
    const funcnam = [];
    for (const key in obj) {if (typeof obj[key] === 'function') {funcnam.push(key);}}
    return funcnam;}
const obj = { a: () => {}, b: 3, c: function () {} };
const funcnam = findfunc(obj);
console.log(funcnam);

// Write a function that removes all properties from an object whose values are falsy (null, undefined, false, 0, NaN, or an empty string).
function remove(obj) {
    const Obj2 = {};
    for (const key in obj) {if (obj[key]) {Obj2[key] = obj[key];}}
    return Obj2;}
const obj = { a: 1, b: null, c: false, d: undefined, e: 0, f: NaN, g: '', h: 'Hello' };
const nobj = remove(obj);
console.log(nobj);

Create a function that calculates the deep difference between two objects. For example, given:

// obj1 = { a: 1, b: { c: 2, d: 3 } };,obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } };,The result should be { b: { d: [3, 4], e: [undefined, 5] } }.
function diff(obj1, obj2) {
    const result = {};
    for (const key in obj2) {
      if (typeof obj2[key] === 'object' && obj2[key] !== null) {
        if (typeof obj1[key] === 'object' && obj1[key] !== null) {const sub = diff(obj1[key], obj2[key]);
          if (Object.keys(sub).length > 0) {result[key] = sub;}} 
          else {result[key] = [obj1[key], obj2[key]];}} 
          else if (obj2[key] !== obj1[key]) {result[key] = [obj1[key], obj2[key]];}
    }
    return result;
  }
let obj1 = { a: 1, b: { c: 2, d: 3 } };
let obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } };
let result = diff(obj1, obj2);
console.log(result);

Write a function that converts a flat object to a nested one based on its keys. For example,{ 'a.b.c': 1, 'a.b.d': 2, 'e': 3 }should be converted to:{ a: { b: { c: 1, d: 2 } }, e: 3 }
