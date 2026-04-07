const params = new URLSearchParams(window.location.search);
const id = params.get("id");
fetch(`http://localhost:3000/products/${id}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("name").value = data.name;
    document.getElementById("price").value = data.price;
    document.getElementById("category").value = data.category;
    document.getElementById("stock").value = data.stock;
  });
async function editProduct() {
  const respon = await fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
      category: document.getElementById("category").value,
      stock: document.getElementById("stock").value,
    }),
  });
  window.location.href = "index.html";
}
