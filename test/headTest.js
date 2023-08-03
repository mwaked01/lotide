const head = require ('../head');
const assertEqual = require ('../assertEqual');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Labs", "Lighthouse", "Labs"]), "Labs");
console.log(head([]));
console.log(head(['you',6,'hi']));