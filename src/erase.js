// let data =[
//     {
//       id : 0,
//       title : "White and Black",
//       content : "Born in France",
//       price : 120000,
//       url:'/bed1.png'
//     },
  
//     {
//       id : 1,
//       title : "Red Knit",
//       content : "Born in Seoul",
//       price : 110000,
//       url: "/bed2.png"
//     },
  
//     {
//       id : 2,
//       title : "Grey Yordan",
//       content : "Born in the States",
//       price : 130000,
//       url: "/bed3.png"
//     }
//   ] 

//   const dataMatch = data.find(checkID);
//   function checkID (element) {
//     return element = data.id;
//   }

// console.log(dataMatch);


const array1 = [{id:5}, {id:12},{id:20}, {id:234}, {id:125}];

const found = array1.find(checkNum);
function checkNum ( element) {
    return element.id == 5;
}
console.log(found);
// Expected output: 12