const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");




  const productos = {
    "1": {
      id: 1,
      nombre: "Mezcla original 200g",
      precio: 500
    },
    "2": {
      id: 2,
      nombre: "Mezcla original 500g",
      precio: 900
    },
    "3": {
      id: 3,
      nombre: "Mezcla especial 200g",
      precio: 700
    },
    "4": {
      id: 4,
      nombre: "Mezcla especial 500g",
      precio: 1200
    }
  };

  let purchases = [];
  let compras = [];

  function add() {
    const productId = document.getElementById("product").value;
    const cantidad = parseInt(document.getElementById("number").value);
  
    if (productId !== "0" && cantidad > 0) {
      const producto = productos[productId];
      const total = producto.precio * cantidad;
      purchases.push({ name: producto.nombre, price: producto.precio, quantity: cantidad });
      alert(`Producto: ${producto.nombre}\nCantidad: ${cantidad}\nImporte: ${total}`);
    } else {
      alert("Por favor, seleccione un producto y una cantidad válida.");
    }
  }
  
  
  
  function display() {
    let content = "";
    for (const compra of compras) {
      content += `Producto: ${compra.nombre}\nCantidad: ${compra.cantidad}\nImporte: ${compra.precio}\n\n`;
    }
    alert(content);
  }
    




function subtotal() {
  let sum = 0;
  for(let i=0; i<purchases.length; i++){
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);

  let content = `Subtotal: ${sum}\nGastos de envío: ${postage}\n\nProductos:\n`;
  for (const purchase of purchases) {
    content += `Nombre: ${purchase.name}\nCantidad: ${purchase.quantity}\nImporte: ${purchase.price * purchase.quantity}\n\n`;
  }
  content += `Total: ${sum + postage}`;

  window.alert(content);

  purchases = [];
  document.getElementById("number").value = "";
}


function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
    return 500;
  } else {
    return 250;
  }
}























