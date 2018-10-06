/* Dominant writing direction
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them.
The characterScript and countBy functions defined earlier in the chapter are probably useful here.

You again have to count characters by a criterion based on characterScript and then filter out the part of the result that refers
to uninteresting (script-less) characters.

Finding the direction with the highest character count can be done with reduce.
function dominantDirection(text) {
   Your code here.
}

console.log(dominantDirection("Hello!"));
 → ltr
console.log(dominantDirection("Hey, مساء الخير"));
 → rtl
 */

 function characterScript(code) {
   for (let script of SCRIPTS) {
     if (script.ranges.some(([from, to]) => {
       return code >= from && code < to;
     })) {
       return script;
     }
   }
   return null;
 }

 function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

dominantDirection = (text) => {
  //Para el conjunto de palabras, se recoge la direccion que corresponde
  let direcciones = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (direcciones.length == 0) return "ltr";
  //console.log(direcciones);
  return direcciones.reduce((a, b) => a.count > b.count ? a : b).name;
};

//console.log(dominantDirection("Hola Mundo"));
