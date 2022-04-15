'use strict'
let table = document.getElementById('table');
 let hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']
//let citySales = document.getElementById('citySales');

let storeArray = [];
//let table = document.getElementById('table');
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.avgCookiesSoldHoulyArray = [];
  storeArray.push(this)
}
 

Store.prototype.getRandomCustomer = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);// <--- generating random customer. "this" is to access the object.
};

Store.prototype.calculateCookiesPerHour = function () {
  for (let i = 0; i < hour.length; i++) { //<--- we need all three lines of code to run, which is why we want this first.
    let randomCustomersThisHour = this.getRandomCustomer();//<-- randomcustomers equals the .getrandom
    let cookiesSoldThisHour = Math.ceil(randomCustomersThisHour * this.avg);//<--
    this.dailyTotal = (this.dailyTotal + cookiesSoldThisHour); // or you could += this would add the two together
    this.avgCookiesSoldHoulyArray.push(cookiesSoldThisHour);
  }
};

Store.prototype.render = function(){
  this.calculateCookiesPerHour();
  let storeRow = document.createElement('tr');//<-- creating a row
  table.appendChild(storeRow);//<----this is passing the table to store row??
  let storeName = document.createElement('td'); //<-- this is creating a Table with data
  storeName.textContent = this.name;//<--inputting the names of the store in table
  storeRow.appendChild(storeName);//<--- this is displaying the city names on page
  for(let i = 0; i < hour.length; i++){//<-- this is my for loop
    let hourlyCookiesSales = document.createElement('td');//<---naming this table data as hourlycookie sales to then input data.
    hourlyCookiesSales.textContent = this.avgCookiesSoldHoulyArray[i];//<--- this is actually inputting the data from the array
    storeRow.appendChild(hourlyCookiesSales);//<-- this is displaying the numbers in the rows
  }
 
let hourlyCookiesSalesTotal = document.createElement('td');//<--- naming this table data hourly cookiessales total 
hourlyCookiesSalesTotal.textContent = this.dailyTotal;//<-- this is inputing the daily totals
storeRow.appendChild(hourlyCookiesSalesTotal);//<--- this is displaying the totals for each city on the page in the table created.(boxes)
};

 function makeHeader(){
  let tableRow = document.createElement('tr');//<--- creating a Table Row
  let tableHeader = document.createElement('th');//<--- this is creating a table header
  tableHeader.textContent = 'location name';//<-- putting city name text in table header
  tableRow.appendChild(tableHeader);//<--- this is displaying the names
  for (let i = 0; i < hour.length; i++){//<--- this for loop inputing the hours to the table header.
    tableHeader = document.createElement('th');//<-- this is creting the header for hours
    tableHeader.textContent = hour[i];//<---- this is adding the hours text to the table
    tableRow.appendChild(tableHeader);//<--- this is displaying the hours on the table.
  }

  tableHeader = document.createElement('th'); //<-- creating the totals header/label
  tableHeader.textContent = 'total';//<-- nameing it total in
  tableRow.appendChild(tableHeader);//<--- this is displaying total on table header on the table row
  table.appendChild(tableRow);//<--- this is displaying the row to the table displayed on browser.
}

 function makeFooter(){
  let tableRow = document.createElement('tr');//<--- creating a new row
  let tableHeader = document.createElement('td');//<--- creating a table header
  tableHeader.textContent = 'hourly Total';//<-- this is adding 
  tableRow.appendChild(tableHeader);
  let grandTotal = 0;
  for (let i = 0; i < hour.length; i++){
    let hourlyTotal = 0;
    for (let j = 0; j < storeArray.length; j++){
    hourlyTotal += storeArray[j].avgCookiesSoldHoulyArray[i];//<---cookies sold every hour at every location within in the store array equalling hourly total.
    grandTotal += storeArray[j].avgCookiesSoldHoulyArray[i];
    }
    let tableHour = document.createElement('td')
    tableHour.textContent = hourlyTotal;//<--- this is adding text to the hourly total
    tableRow.appendChild(tableHour);//<--- this passing the tablerow info into the table header
  }
  let tableTotal = document.createElement('td');
  tableTotal.textContent = grandTotal;
  tableRow.appendChild(tableTotal);
  table.appendChild(tableRow);
}

new Store('Seattle',23,65,6.3);
new Store('Tokyo',3,24,1.2);
new Store('Dubai',11,38,3.7);
new Store('Paris',23,65,6.3);
new Store('Lima',2,16,4.6);



makeHeader();
for(let i = 0; i < storeArray.length; i++){
  storeArray[i].render();
  
}
makeFooter();
 ////////////////////////////////////////////////////
 // this is the notes from Saturday to help understand and work off of:
//  ‘use strict’
//             //0         1         2           3         4         5
// let hour = [‘6 a.m.’, ‘7 a.m.’, ‘8 a.m.’, ‘9 a.m.’, ’10 a.m.’, ‘11 a.m.’, ‘12 p.m.’, ‘1 p.m.’, ‘2 p.m.’, ‘3 p.m.’, ‘4 p.m.’, ‘5 p.m.’, ‘6 p.m.’, ‘7 p.m.’]
// let seattleSales = document.getElementById(‘SeattleSales’);
// let seattle = {
//   name: ‘Seattle’,
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   avgCookiesSoldHoulyArray: [],//<-- push a value into the array
//   getRandomCustomer: function(){
//     //this is specifically for the customers
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);// <--- generating random customer. “this” is to access the object.
//   },
//   calculateCookiesPerHour: function(){
//     for (let i = 0; i < hour.length; i++){ //<--- we need all three lines of code to run, which is why we want this first.
//       let randomCustomersThisHour = this.getRandomCustomer();
//       let cookiesSoldThisHour = Math.ceil(randomCustomersThisHour * this.avg);
//       this.dailyTotal = (this.dailyTotal + cookiesSoldThisHour); // or you could += this would add the two together
//       this.avgCookiesSoldHoulyArray.push(cookiesSoldThisHour);
//     }
//   },
//   render: function(){
//     this.calculateCookiesPerHour();
//     //add the cookies sold each hour
//     //create list with cookies
//     console.log(this.avgCookiesSoldHoulyArray);
//     //create the element
//     for (let i = 0; i < hour.length; i++){ //<-- i is saying it cant be greater than 13. “i/index” is the postion in the array. i is being reassigned.
//       let listItem = document.createElement(‘li’);
//       //add content
//       listItem.textContent = `${hour[i]} ${this.avgCookiesSoldHoulyArray[i]}`;
//       //append element
//       seattleSales.appendChild(listItem);
//     }
//     let total = document.createElement(‘li’);
//     total.textContent = `Total ${this.dailyTotal}`;
//     seattleSales.appendChild(total)
//   },
// };
//       seattle.render();





 