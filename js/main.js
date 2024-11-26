const API_URL = "https://fakestoreapi.com/products";
const productsList = document.getElementById("product-list")

const fetchProducts = async () => {
	try {
		const response = await fetch(API_URL);
		//validamos la respuesta de la api
		if (!response.ok) {
			console.log("Ocurrio un error!" + response.statusText)
		}
		const products = await response.json();
		displayProducts(products);
	} catch (error) {
		console.error('Error fetching products:', error);
	}
}
//funcion para renderizar los productos, recibe como parametro el objeto products
const displayProducts = (products) => {
	products.forEach(product => {
		const productDiv = document.createElement("div");
		productDiv.className = "product";
		productDiv.innerHTML = `
			<img src =${product.image} alt="${product.title}"
			<h2>${product.title}</h2>
			<p>$${product.price} </p>
			<button class="button-50">Añadir al carrito</button>
			`
		productsList.appendChild(productDiv)
	})
}

fetchProducts()