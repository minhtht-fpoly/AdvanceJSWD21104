// document.querySelector('#target').style.backgroundColor = "red"

//gọi dom thông qua document,truy xuất thẻ thông qua ID, gọi đến thuộc tính style, gọi đến con của style và gán cho thuộc tính con giá trị mới
//Tạo kiểu thông qua className sẽ coi giá trị class được gán vào là tuyệt đối
// document.getElementById("target").classList.add("border")
// // document.getElementById("target").classList.remove("border")
// document.getElementById("target").classList.toggle("border")

// document.getElementById("target").innerText = "<div>Text được thêm vào bởi JS</div>"
// document.getElementById("target2").innerHTML = "<div>Text được thêm vào bởi JS</div>"
// document.getElementById("target").insertAdjacentHTML("beforeend","<div>Con út</div>")
// document.getElementById("target").insertAdjacentHTML("beforebegin","<div>Anh</div>")
// document.getElementById("target").insertAdjacentHTML("afterbegin","<div>Con cả</div>")
// document.getElementById("target").insertAdjacentHTML("afterend","<div>Em</div>")
// const newNode =document.getElementById("target").cloneNode(false)
// console.log(newNode)
// newNode.id = "new"
// document.body.appendChild(newNode)
// const live = document.getElementsByClassName("con")
// const static = document.querySelectorAll(".con")
// const newNode = document.createElement("div")
// newNode.className = "con"
// document.getElementById('target').appendChild(newNode)
// console.log(live)
// console.log(static)
const data = [
  {
    id: 1,
    name: "Laptop Dell Inspiron 15",
    price: 18500000,
    category: "Laptop",
    stock: 12
  },
  {
    id: 2,
    name: "iPhone 13",
    price: 15900000,
    category: "Điện thoại",
    stock: 8
  },
  {
    id: 3,
    name: "Tai nghe Sony WH-1000XM4",
    price: 6500000,
    category: "Phụ kiện",
    stock: 15
  },
  {
    id: 4,
    name: "Chuột Logitech G304",
    price: 850000,
    category: "Phụ kiện",
    stock: 25
  },
  {
    id: 5,
    name: "Bàn phím Keychron K6",
    price: 2200000,
    category: "Phụ kiện",
    stock: 10
  }
];
function renderProduct(){
    alert(0)
    let renderString = ""
    for(let i = 0 ; i < data.length;i++){
        renderString = renderString + `<tr>
      <th scope="row">${i+1}</th>
      <td>${data[i].name}</td>
      <td>${data[i].price}</td>
      <td>${data[i].category}</td>
      <td>${data[i].stock}</td>
      <td>@mdo</td>
      </tr>`
    }
    document.getElementById("renderBody").innerHTML = renderString
    
}
renderProduct()