
/* carrito */
let allcontainerCart = document.querySelector('.carousel-products');
let buythings = [];
let priceTotal = document.querySelector('.price-total');
let containerBuyCart= document.querySelector('.card-items');
let amountProduct = document.querySelector('.count-product')
let totalCard = 0;
let countProduct=0;

let allcontainerCart2 = document.querySelector('.carousel-products2');
let allcontainerCart3 = document.querySelector('.carousel-products3');

loadEventListenrs();
function loadEventListenrs(){
    allcontainerCart.addEventListener('click',addProduct);
    containerBuyCart.addEventListener('click',deleteProduct);
    allcontainerCart2.addEventListener('click',addProduct);
    allcontainerCart3.addEventListener('click',addProduct);
}



function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-add-cart')){
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
        
    }
   
}
function deleteProduct(e){
    if(e.target.classList.contains('delete-product')){
        const deleteId= e.target.getAttribute('data-id');
        buythings.forEach(value=>{
            if(value.id == deleteId){
                let priceReduce= parseFloat(value.price) * parseFloat(value.amount);
                totalCard = totalCard- priceReduce;
                totalCard = totalCard.toFixed(2);
                countProduct--;
            }
        })
        
        buythings = buythings.filter(product => product.id !== deleteId);
      
          
        localStorage.removeItem(deleteId);
           
      
    }
    loadHtml();
}


function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('.item-image').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('.precio').textContent,
        code: product.querySelector('.codigo').textContent,
        stock: product.querySelector('.stock').textContent,
        id: product.querySelector('.btn-add-cart').getAttribute('data-id'),
        amount:1
    }
    totalCard =  parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buythings.some(product => product.id === infoProduct.id)
    if(exist){
        const pro = buythings.map(product =>{
            if(product.id === infoProduct.id){
                product.amount++;
                return product;
            }else{
                return product
            }
        });
        buythings = [...pro];
    }else{
        buythings=[...buythings,infoProduct]
        countProduct++;
    }
    
    loadHtml();
    console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
    buythings.forEach(product =>{
        const{image,title,price,code,amount, id}=product;
        const row = document.createElement('div');
        row.classList.add('item'),
        row.innerHTML=`
        <img src="${image}">
        <div class="item-content"> 
        <h5 >${title}</h5>
        <hr style="margin: 0;">
        <h4 class="cart-price">Precio:${price}</h4>
        <hr style="margin: 0;">
        <h6> Codigo:${code}</h6>
        <hr style="margin: 0;">
        <h6> Cantidad:${amount}</h6>
       </div>
       <span class="delete-product" data-id="${id}">X</span>       
       `;
       containerBuyCart.appendChild(row); 
       const datos = {
        'nombre' : title,
        'img' : image,
        'precio': price,
        'codigo': code,
        'cantidad':amount,
        
        };

       localStorage.setItem(id,JSON.stringify(datos));
       priceTotal.innerHTML = totalCard;
       amountProduct.innerHTML = countProduct;

       document.getElementById('dato').innerHTML = `
       <img class="modal-imagen" src="${image}">
       <h5 class="modal-carrito" >${title}</h5>
       <h4 class="">Precio:${price}</h4>    
       `;

    });
   
}
function clearHtml(){
    containerBuyCart.innerHTML='';
    amountProduct.innerHTML="0";
    priceTotal.innerHTML="0";
}


/*carrito */
const fila = document.querySelector('.contenedor-carousel');
const productos= document.querySelectorAll('.producto');


const flechaIzquierda =  document.getElementById('flecha-izquierda');
const flechaDerecha =  document.getElementById('flecha-derecha');

const fila2 = document.querySelector('.contenedor-carousel2');
const flechaIzquierda2 =  document.getElementById('flecha-izquierda2');
const flechaDerecha2 =  document.getElementById('flecha-derecha2');

const fila3 = document.querySelector('.contenedor-carousel3');
const flechaIzquierda3 =  document.getElementById('flecha-izquierda3');
const flechaDerecha3 =  document.getElementById('flecha-derecha3');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    
});
flechaDerecha2.addEventListener('click', () => {
    fila2.scrollLeft += fila2.offsetWidth;

    
});

flechaIzquierda2.addEventListener('click', () => {
    fila2.scrollLeft -= fila2.offsetWidth;

    
});
flechaDerecha3.addEventListener('click', () => {
    fila3.scrollLeft += fila3.offsetWidth;

    
});

flechaIzquierda3.addEventListener('click', () => {
    fila3.scrollLeft -= fila3.offsetWidth;

    
});




productos.forEach((producto) =>{
    producto.addEventListener('mouseenter', (e) =>{
        const elmento= e.currentTarget;
        setTimeout(()=>{
            productos.forEach(producto => producto.classList.remove('hover'));
            elmento.classList.add('hover');
        },300);
    });
});


fila.addEventListener('mouseleave',()=>{
    productos.forEach(producto => producto.classList.remove('hover'));
});


