class Products{
	constructor(){
		this.classNameActive = 'products-element__btn_active';
	}
	handleSetLocationStorage(element, id){
		const {pushProduct, products} = localStorageUtil.putProducts(id);
		if(pushProduct){
			element.classList.add(this.classNameActive);
		}
		else{
			element.classList.remove(this.classNameActive);
		}
	}

	
	render(){
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog='';
		document.querySelector('#searchBtn').addEventListener('click', myClick);
		function myClick(){
			let input = document.querySelector('#input').value;
			console.log(input);
			localStorage.setItem('input', JSON.stringify(input));
			return input;
		}

		CATALOG.forEach(({id, name, price, img })=>{
			let activeClass ='';
			if(productsStore.indexOf(id)===-1){
				
			}else{
				activeClass=' '+this.classNameActive;
			}
			htmlCatalog += `
			<li class="products-element">
				<img class="products-element__img" src ="${img}"/>
				<span class="products-element__name">${name}</span>
				<span class="products-element__price">${price.toLocaleString()} Р</span>
				<button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
					<img height="30" width="30" src="images/basket.png">
				</button>
			</li>`;
		});
		
		

		const html=`
			<ul class="products-container">
				${htmlCatalog}
			</ul>`;
		ROOT_PRODUCTS.innerHTML= html;
	}
}

const productsPage = new Products();
productsPage.render();

