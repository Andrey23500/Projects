const weekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthArray = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

let log = console.log.bind(console);
const logger = {
   show: function (str) {
      let currentData = new Date();
      log(
         weekArray[currentData.getDay()] +
         " " +
         monthArray[currentData.getMonth()] +
         " " +
         currentData.getDate() +
         " " +
         currentData.getHours() +
         ":" +
         currentData.getMinutes() +
         ":" +
         currentData.getSeconds() +
         " GMT+" +
         (currentData.getHours() - currentData.getUTCHours()) +
         " | " +
         str
      );
   },
};

console.log = logger.show.bind(console);
console.log("error");
