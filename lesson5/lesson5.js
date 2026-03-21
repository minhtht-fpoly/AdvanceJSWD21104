//
const data = [
  {
    id: 2,
    name: "iPhone 13",
    price: 900000,
    category: "Điện thoại",
    stock: 8,
  },
  {
    id: 3,
    name: "Tai nghe Sony WH-1000XM4",
    price: 6500000,
    category: "Phụ kiện",
    stock: 15,
  },
  {
    id: 4,
    name: "Chuột Logitech G304",
    price: 850000,
    category: "Phụ kiện",
    stock: 25,
  },
  {
    id: 5,
    name: "Bàn phím Keychron K6",
    price: 2200000,
    category: "Phụ kiện",
    stock: 10,
  },
  {
    id: 1,
    name: "Laptop Dell Inspiron 15",
    price: 18500000,
    category: "Laptop",
    stock: 12,
  },
];
let viTri;
function renderProduct() {
  let renderString = "";
  data.forEach((product, i) => {
    renderString =
      renderString +
      `<tr>
            <td>${i + 1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            ${
              product.stock > 20
                ? `<td>${product.stock}</td>`
                : product.stock > 10
                  ? `<td style="background-color: yellow;">${product.stock}</td>`
                  : `<td style="background-color: red;">${product.stock}</td>`
            }
            <td>
              <button class="btn btn-sm btn-primary me-2" onclick="fillEditInfo(${i})">Sửa</button>
              <button class="btn btn-sm btn-danger" onclick="xoa(${i})">Xóa</button>
            </td>
          </tr>`;
    console.log(renderString);
  });

  document.getElementById("renderBody").innerHTML = renderString;
}
renderProduct();
function xoa(i) {
  if (
    window.confirm("Bạn có chắc chắn muốn xóa thông tin sản phẩm này không?")
  ) {
    data.splice(i, 1);
  }
  renderProduct();
}
// function addProduct(e) {
//   e.preventDefault();
//   //Lấy thông tin từ form
//   let pName = document.getElementById("name").value;
//   let pPrice = document.getElementById("price").value;
//   let pCategory = document.getElementById("category").value;
//   let pStock = document.getElementById("stock").value;
//   //ĐÓng gói dữ liệu
//   let newProduct = {
//     name: pName,
//     price: pPrice,
//     category: pCategory,
//     stock: pStock,
//   };
//   data.push(newProduct);
//   renderProduct();
// }
function addProduct(e) {
  e.preventDefault();
  data.push({
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
    stock: document.getElementById("stock").value,
  });
  renderProduct();
}
function fillEditInfo(i) {
  viTri = i;
  document.getElementById("name").value = data[i].name;
  document.getElementById("price").value = data[i].price;
  document.getElementById("category").value = data[i].category;
  document.getElementById("stock").value = data[i].stock;
}

function editProduct(e) {
  e.preventDefault();
  data[viTri] = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
    stock: document.getElementById("stock").value,
  };
  renderProduct();
}
