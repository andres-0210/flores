// Definir una lista de productos en el código
const products = [
    { name: "Desodorante Dorsay", quantity: 12 },
    { name: "Desodorante Winner", quantity: 12 },
    { name: "Desodorante Trax Rojo", quantity: 2 },
    { name: "Desodorante Expression", quantity: 2 },
    { name: "Desodorante Leyenda", quantity: 1 },
    { name: "Desodorante Dancing Night", quantity: 1 },
    { name: "Desodorante You", quantity: 0 },
    { name: "Desodorante Pulso", quantity: 2 },
    { name: "Desodorante Fantasia Azul", quantity: 2 },
    { name: "Desodorante L'mage", quantity: 3 },
    { name: "Desodorante Nitro", quantity: 2 },
    { name: "Desodorante Score", quantity: 1},
    { name: "Desodorante Total Sec", quantity: 1 },
    { name: "Desodorante Girlink", quantity: 2 },
    { name: "Desodorante Temptation", quantity: 1 },
    { name: "Desodorante Efective", quantity: 1 },
    { name: "Desodorante Gaia", quantity: 1 },

    { name: "Perfume Nitro", quantity: 12 },
    { name: "Perfume Nitro Nigth", quantity: 5 },
    { name: "Perfume Leyenda Absolute", quantity: 1 },
    { name: "Perfume Urban Way", quantity: 1 },
    { name: "Perfume New Code", quantity: 1 },
    { name: "Perfume New Cool", quantity: 2 },
    { name: "Perfume Winner Edicion Limitada", quantity: 1 },
    { name: "Perfume You 90ml", quantity: 2},
    { name: "Perfume You 50ml ", quantity: 1 }, 
    { name: "Perfume Devos Magnetic", quantity: 1 },
    { name: "Perfume All Black", quantity: 1 },
    { name: "Perfume Exus", quantity: 1 },
    { name: "Perfume Magnat Exclusive", quantity: 1 },
    { name: "Perfume Live Moto", quantity: 1 },
    { name: "Perfume Magnat Select", quantity: 1 },
    { name: "Perfume Dorsay Edicion Limitada", quantity: 1 },
    { name: "Perfume Magnat Original ", quantity: 1 },
    { name: "Perfume Intrepid", quantity: 1 },
    { name: "Perfume Kromo Fire", quantity: 4 },
    { name: "Perfume Dorsay Original", quantity: 4 },
    { name: "Perfume Dorsay Inspire ", quantity: 1 },
    { name: "Perfume Bleu Nigth", quantity: 3 },
    { name: "Perfume Bleu Glacial", quantity: 3 },
    { name: "Perfume Bleu Intense", quantity: 7 },
    { name: "Perfume Winner Sport", quantity: 3 },
    { name: "Perfume Winner Action", quantity: 1 },
    { name: "Perfume Blue for Him", quantity: 1 },
    { name: "Perfume Pulso Absolute", quantity: 1 },
    { name: "Perfume Pequeño Winner", quantity: 1 },
    { name: "Perfume Pequeño Leyenda Absolute", quantity: 1 },
    { name: "Perfume Pequeño Bleu Intense", quantity: 1 },
    { name: "Perfume Comando Force Azul", quantity: 2 },

    { name: "Locion Dancing Nigth", quantity: 6 },
    { name: "Locion Dancing Rosada", quantity: 3 },
    { name: "Locion ", quantity: 2 },
    { name: "Locion Dancing Rosada", quantity: 2 },
    { name: "Locion Dancing Rosada", quantity: 2 },
    { name: "Locion Mithyka", quantity: 8 },
    { name: "Locion Fan Away", quantity: 1 },
    { name: "Locion Mon Gold", quantity: 1 },
    { name: "Locion Amilet", quantity: 1 },
    { name: "Locion Mon", quantity: 1 },
    { name: "Locion Dancing Sunset", quantity: 1 },
    { name: "Locion Vibranza", quantity: 5 },
    { name: "Locion Leclat", quantity: 2 },
    { name: "Locion Satin Rouge", quantity: 7 },
    { name: "Locion Prints Morada", quantity: 0 },
    { name: "Locion Prints Verde", quantity: 1 },
    { name: "Locion Grazzia", quantity: 1 },
    { name: "Locion Girlink", quantity: 3 },
    { name: "Locion Sweet Black", quantity: 1 },
    { name: "Locion Dream", quantity: 4 },
    { name: "Locion Girlink Conection", quantity: 1 },
    { name: "Locion Imari", quantity: 1 },
    { name: "Locion ", quantity: 1 },
    { name: "Locion Fleur", quantity: 5 },
    { name: "Locion Emotions Happy", quantity: 1 },
    { name: "Locion ", quantity: 1 },
    { name: "Locion Expression", quantity: 2 },
    { name: "Locion Expression Magic", quantity: 1 },
    { name: "Locion Expression Celebrate", quantity: 1 },
    { name: "Locion Impredecible", quantity: 1 },
    { name: "Locion Bleu Femme", quantity: 1 },
    { name: "Locion Expression Sens", quantity: 1 },
    { name: "Locion Mithyka Lumiere", quantity: 2 },
    { name: "Locion Fleur Icon", quantity: 1 },
    { name: "Locion Reve Sensuelle", quantity: 1 },
    { name: "Locion Liasson", quantity: 2 },
    { name: "Locion Autenti-k", quantity: 1 },
    { name: "Locion In Love", quantity: 1 },
    { name: "Locion Ainnara in Bloom", quantity: 1 },
    { name: "Locion Soleil Rosé", quantity: 1 },
    { name: "Locion Vibranza Blanc", quantity: 2 },
    { name: "Locion Impredecible Mysterious", quantity: 1 },
    { name: "Locion Spa Collection Nectarine Royalen    ", quantity: 1 },
    { name: "Locion Locion Mini Chics", quantity: 1 },

     
    { name: "Crema Expression ", quantity: 2 },
    { name: "Crema Sweet Black", quantity: 2 },
    { name: "Crema Ritualeza Arandano ", quantity: 1 },
    { name: "Crema Multicream Nutrients", quantity: 1 },
    { name: "Crema Performance Sbeltess ", quantity: 2 },
    { name: "Crema Ritualeza Arandano ", quantity: 1 },
    { name: "Crema Dancing ", quantity: 1 },
    { name: "Crema Antibacterial", quantity: 1 },
    { name: "Crema Mityka", quantity: 3 },
    { name: "Crema Exfoliante Facial", quantity: 1 },
    { name: "Crema Multiaccion Aclarante", quantity: 1 },
    { name: "Crema Multiaccion Anti-Arrugas", quantity: 1 },
    { name: "Crema Miss", quantity: 1 },
    { name: "Crema Manos y Uñas", quantity: 1 },
    { name: "Macarilla Facial", quantity: 1 },
    { name: "Jabon Liquido para Manos", quantity: 1 },
    { name: "Crema Vibranza Blanc", quantity: 1 },
    { name: "Crema Delice Nutrition", quantity: 1 },
    { name: "Crema Miss Sexy", quantity: 1 },
    { name: "Crema Triple Accion Max 55+ Morada ", quantity: 2 },
    { name: "Crema Triple Accion Max 40+ Amarilla ", quantity: 1 },
    { name: "Crema Body Spa Uña de Gato ", quantity: 1 },
    { name: "Crema Multicream Nutrients 1l ", quantity: 3 },
    { name: "Crema Flor de Naranjo y Maracuya ", quantity: 1 },
    { name: "Crema Biomilk Leche Vegetal ", quantity: 1 },
    { name: "Crema Vitaderm Piel Seca ", quantity: 1 },
    { name: "Crema Vainilla y Jazmin ", quantity: 1 },
    { name: "Crema Be sexy ", quantity: 1 },

    { name: "Talco para Pies Azul ", quantity: 4 },
    { name: "Colonia Agu Morada ", quantity: 3 },
    { name: "Talco Agu Morado ", quantity: 1 },
    { name: "Talco Xtreme Verde ", quantity: 1 },
    { name: "Talco Pequeño Winner ", quantity: 2 },
    { name: "Shampoo Agu Amarillo ", quantity: 1 },
    { name: "Shampoo y Acondicionador Vital ", quantity: 2 },
    { name: "Shampoo Tutty Fruit ", quantity: 1 },

    { name: "Desmaquillador de Lbel ", quantity: 2 },
    { name: "Splash Taste Shake ", quantity: 2 },
    { name: "Splash Taste Warm ", quantity: 1 },
    { name: "Splash Pink Blossom ", quantity: 1 },
    { name: "Splash Pera in Love ", quantity: 1 },
    { name: "Splash Soy Glow (Yanbal) ", quantity: 1 },
    { name: "Splash Mis Sexy ", quantity: 2 },
    { name: "Splash Berry Cocktail ", quantity: 2 },
    { name: "Splash Mora Potion ", quantity: 1 },
    { name: "Splash Purple Berry ", quantity: 1 },
    { name: "Splash Universe Aire ", quantity: 1 },
    { name: "Splash Green Coconut ", quantity: 1 },
    { name: "Splash Blue Water Lily ", quantity: 1 },
    { name: "Alcohol en Gel", quantity: 1 },
    { name: "Splash Avon Senses Flor de Cerezo y Orquidea ", quantity: 1 },
  ];

  
  // Función para mostrar el primer resultado de la búsqueda
  function displayResults(filteredProducts) {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Limpiar los resultados anteriores
  
    if (filteredProducts.length === 0) {
      resultsContainer.innerHTML = "<p>No se encontraron productos.</p>";
      return;
    }
  
    // Solo mostrar el primer producto
    const product = filteredProducts[0];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");
  
    const name = document.createElement("h3");
    name.textContent = product.name;
  
    const quantity = document.createElement("p");
    quantity.textContent = `Cantidad: ${product.quantity}`;
  
    productDiv.appendChild(name);
    productDiv.appendChild(quantity);
  
    resultsContainer.appendChild(productDiv);
  }
  
  // Función para filtrar productos según la búsqueda
  function searchProduct() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    
    // Filtrar productos según el nombre ingresado
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm)
    );
  
    // Mostrar solo el primer resultado
    displayResults(filteredProducts);
  }
  