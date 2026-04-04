
async function renderProducts() {
  try {
    const respon = await fetch("http://localhost:3000/products");
    const data = await respon.json();
    renderString = ``;
    data.forEach((product, index) => {
      renderString =
        renderString +
        `<tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.stock}</td>
            <td>
              <button class="btn btn-sm btn-primary me-2">Sửa</button>
              <button class="btn btn-sm btn-danger"onclick = "xoa('${product.id}')">Xóa</button>
            </td>
          </tr>`;
    });
    document.getElementById("renderBody").innerHTML = renderString;
  } catch (error) {
    console.error(error);
  }
}
renderProducts();
async function xoa(id) {
  try {
    if (
      window.confirm("Bạn có chắc chắn muốn xóa thông tin sản phẩm này không?")
    ) {
      const respon = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
    }
  } catch (err) {
    console.log(err);
  }
}
