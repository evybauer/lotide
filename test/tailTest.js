const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(parseInt(tail([])));
assertEqual(parseInt(tail([])), 0);
assertEqual(parseInt(tail([0])), 5);
assertEqual(parseInt(tail([0])), 0);
assertEqual(parseInt(tail([5,6,7])), 5);
assertEqual(parseInt(tail([5,5])), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), "Hello");
assertEqual(tail(["Lighthouse", "Labs"]).toString(), "Hello");
assertEqual(tail([]).toString(), "Hello");
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());
assertEqual(tail(["Hello", "Lighthouse"]).toString(), "Lighthouse");
