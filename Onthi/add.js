async function addProduct() {
  const respon = await fetch("http://localhost:3000/products", {
    method: "POST",
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
