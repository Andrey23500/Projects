Array.prototype.unique = foo;

function foo() {
   if (typeof this[0] === "object") {
      return foo.OBJ.apply(this);
   } else if (this[0] !== Object(this[0])) {
      return foo.Arr.apply(this);
   } else {
      console.log("there no params was applied =(");
   }
}

foo.OBJ = function () {
   let seen = {};
   let uniqArray = [];
   let j = 0;
   for (let i = 0; i < this.length; i++) {
      let item = this[i];
      if (seen[item.id] !== 1) {
         seen[item.id] = 1;
         uniqArray[j++] = item;
      }
   }

   return uniqArray;
};

foo.Arr = function () {
   let seen = {};
   let uniqArray = [];
   let j = 0;
   for (let i = 0; i < this.length; i++) {
      let item = this[i];
      if (seen[item] !== 1) {
         seen[item] = 1;
         uniqArray[j++] = item;
      }
   }

   return uniqArray;
};

let obj = [
   { id: 2, value: 42 },
   { id: 1, value: 41 },
   { id: 2, value: 40 },
   { id: 3, value: 39 },
   { id: 3, value: 38 },
   { id: 4, value: 37 },
   { id: 5, value: 36 },
];
console.log(obj.unique());
let arr = [12, 35, 2, 2, 3, 5, 8, 9, 9];
console.log(arr.unique());