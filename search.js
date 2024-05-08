class Search{
	constructor(){
		this.classNameActive = 'search-element__btn_active';
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
		let activeClass ='';
		const productsStore = localStorageUtil.getProducts();
		const inputedProduct = JSON.parse(localStorage.getItem('input'));
		document.querySelector('#searchBtn').addEventListener('click', myClick);
		function myClick(){
			let input = document.querySelector('#input').value;
			localStorage.setItem('input', JSON.stringify(input));
			return input;
		}
		
		let htmlCatalog='';
		
		CATALOG.forEach(({id, name, price, img, category })=>{
			if(inputedProduct==name || inputedProduct==category){
				htmlCatalog+=`
				<li class="search-element">
					<img class="search-element__img" src ="${img}"/>
					<span class="search-element__name">${name}</span>
					<span class="search-element__price">${price.toLocaleString()} Р</span>
					<button class="search-element__btn${activeClass}" onclick="searchPage.handleSetLocationStorage(this, '${id}');">
						<img height="30" width="30" src="images/basket.png">
					</button>
				</li>
			`;
			}	
			
			
		});
		const html = `
			<ul class="search-container">
				${htmlCatalog}
			</ul>
		`;
		ROOT_SEARCH.innerHTML=html;
	}

}
const searchPage = new Search();
searchPage.render();