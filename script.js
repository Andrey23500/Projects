function Helper() {
   Object.defineProperty(this, "isEmpty", {
      value: function (obj) {
         if (this.isObject(obj)) {
            if (Object.getOwnPropertyNames(obj).length === 0) return true;
            else return false;
         } else console.log("Error type");
      },
      writable: false,
      configurable: false,
   });

   Object.defineProperty(this, "isObject", {
      value: function (obj) {
         if (typeof obj === "object") return true;
         else return false;
      },
      writable: false,
      configurable: false,
   });

   Object.defineProperty(this, "deepClone", {
      value: function (obj) {
         if (this.isObject(obj)) {
            return Object.assign(obj);
         } else console.log("Error type");
      },
      writable: false,
      configurable: false,
   });

   Object.defineProperty(this, "isEqual", {
      value: function (obj1, obj2) {
         if (this.isObject(obj1) && this.isObject(obj2)) {
            let keys1 = Object.keys(obj1);
            let keys2 = Object.keys(obj2);
            keys1.sort();
            keys2.sort();

            let ob1 = {},
               ob2 = {};
            for (let i = 0; i < keys1.length; i++) {
               let key = keys1[i];
               ob1[key] = obj1[key];
            }
            for (let i = 0; i < keys2.length; i++) {
               let key = keys2[i];
               ob2[key] = obj2[key];
            }
            return JSON.stringify(ob1) === JSON.stringify(ob2);
         } else console.log("Error type");
      },
      writable: false,
      configurable: false,
   });

   Object.defineProperty(this, "findValue", {
      value: function (obj, key) {
         if (this.isObject(obj)) {
            let res = getProps(obj, key);

            function getProps(obj, key) {
               for (let prop in obj) {
                  if (prop === key) {
                     if (typeof obj[prop] === "object") {
                        let str = "";
                        str += prop + " ";
                        for (p in obj[prop]) {
                           str += p + " ";
                        }
                        return str;
                     } else return prop + "   " + obj[prop];
                  } else if (typeof obj[prop] === "object") {
                     return getProps(obj[prop], key);
                  }
               }
            }

            return res;
         } else console.log("Error type");
      },
      writable: false,
      configurable: false,
   });

   Object.defineProperty(this, "hasKey", {
      value: function (obj, key) {
         if (this.isObject(obj)) {
            let res = false;
            getKeys(obj, key);

            function getKeys(obj, key) {
               for (let prop in obj) {
                  if (prop === key) {
                     res = true;
                  } else if (typeof obj[prop] === "object") {
                     getKeys(obj[prop], key);
                  }
               }
            }
            return res;
         } else console.log("Error type");
      },
      writable: false,
      configurable: false,
   });
}

const helper = new Helper();
const obj1 = { property: "value" };
const obj2 = {
   property: "value",
   nextLevel: {
      secondProperty: "secondValue",
      thirdLevel: {
         thirdProperty: "thirdValue",
      },
   },
};

const ab = { a: 7, b: 9, c: { d: 4, r: 8 } };
const ba = { c: { d: 4, r: 8 }, b: 9, a: 7 };
const isEqual = helper.isEqual(ab, ba);
// console.log(isEqual);

const findValue = helper.findValue(obj2, "thirdLevel");
// console.log(findValue);

const key = helper.hasKey(obj2, "thirdProperty");
// console.log(key);
