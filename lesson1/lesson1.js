// var ten = "minh";
// var tuoi = 27;
// a = 1;
// console.log(a);
// var let const
//global scope variable(biến toàn cục): var ( có thể khai báo lại)
//block scope variable(biến cục bộ): let const ( không thể khai báo lại)
// {
//   var a = 1;

//   let b = 2;

//   b = 10;
//   //   console.log(b);

//   const c = 3;
//   c = 10;
//   console.log(c);
// }
// console.log(a);
// // console.log(b);
// console.log(c);
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
const nameList = [
  "Nguyễn Văn An",
  "Trần Thị Bình",
  "Lê Minh Chi",
  "Phạm Quốc Dũng",
  "Hoàng Thu Hà",
];
const nameOnly = [];
for (let i = 0; i < nameList.length; i++) {
  nameList[i].split(" ");
}

const ten = "Nguyễn Văn An";
console.log(ten.split(" "));
