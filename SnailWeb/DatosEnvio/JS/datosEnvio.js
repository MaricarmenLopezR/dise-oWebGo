/* carrito */
let allcontainerCart = document.querySelector('.carousel');
let buythings = [];
let priceTotal = document.querySelector('.price-total');
let containerBuyCart= document.querySelector('.card-items');
let amountProduct = document.querySelector('.count-product')
let totalCard = 0;
let countProduct=0;

loadEventListenrs();
function loadEventListenrs(){
    allcontainerCart.addEventListener('click',addProduct);
    containerBuyCart.addEventListener('click',deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('boton-add')){
        
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
    }
    loadHtml();
}



function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('.item-image').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('.precio').textContent,
        id: product.querySelector('button').getAttribute('data-id'),
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
        const{image,title,price,amount, id}=product;
        const row = document.createElement('div');
        row.classList.add('item'),
        row.innerHTML=`
        <img src="${image}">
        <div class="item-content"> 
        <h5>${title}</h5>
        <h5 class="cart-price">${price}</h5>
        <h6> Cantidad:${amount}</h6>
       </div>
       <span class="delete-product" data-id="${id}">X</span>       
       `;
       containerBuyCart.appendChild(row); 
       
       priceTotal.innerHTML = totalCard;
       amountProduct.innerHTML = countProduct;
    });
   
}

function clearHtml(){
    containerBuyCart.innerHTML='';
    amountProduct.innerHTML="0";
    priceTotal.innerHTML="0";
}


/* section */
$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};