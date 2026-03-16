//Hàm khai báo ( declairation function)

// var message;
// function tenHam() {
//   message = "Hàm đã chạy";
//   alert(message);
// }
//Gọi hàm
// function thongBao() {
//   alert(message + "trong 5 giây");
//   alert("Hàm chạy xong");
// }
// //Hàm không thực thi khi được khai báo mà thực thi khi được gọi
// //Biến được khai báo trong hàm thì sẽ không thể truy xuất ở ngoài hàm
// tenHam();
// thongBao();

//Hàm biểu thức ( expression function)
//Hàm biểu thức là một hàm vô danh được gắn vào một biến thông qua toán tử gán (=)
const hamBieuThuc = function () {
  alert("Hàm biểu thức đã chạy");
};

//Hàm mũi tên ( hàm vô danh có cú pháp ngắn hơn)
// const hamMuiTen = () => {
//   alert("Hàm mũi tên đã chạy");
//   return 1;
// };
// const tinhTong = (a, b) => a + b;
// alert(tinhTong(3, 4));

// hamMuiTen();
//Hàm IIFE ( hàm chạy ngay sau khi được khai báo)
// (() => {
//   alert("Hàm IIFE đã chạy");
// })();
//Trả về giá trị
//Hàm sẽ ngắt sau khi thực hiện return
// const tinhLuong = () => {
//   const tongLuong = 7000000 + 2000000;
//   return tongLuong;
//   alert("DÒng dưới return");
// };
// console.log(tinhLuong());

// Hàm có tham số
// function tinhTong(a, b) {
//   return a + b;
// }
// alert(tinhTong(3, 4));

//Callback
// function logIn(callback) {
//   const userName = "Chủ lò gạch";
//   const vip = 15;

//   callback(userName, vip);
// }
// function loiChao(playerUserName, playerVip) {
//   alert(`Chào mừng vip ${playerVip} ${playerUserName} đã đăng nhập vào game`);
// }
// logIn(loiChao);

setInterval(() => {
  console.log("Hàm đã chạy");
}, 2000);
