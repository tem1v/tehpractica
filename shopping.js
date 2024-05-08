class Shopping{
	render(){
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog='';
		let summOfProducts=0;
		CATALOG.forEach(({id, name, price, img })=>{
			if(productsStore.indexOf(id)!==-1){
				
				htmlCatalog+=`
					<li class="shopping-element">
						<img class="shopping-element__img" src ="${img}"/>
						<span class="shopping-element__name">${name}</span>
						<span class="shopping-element__price">${price.toLocaleString()} Р</span>
					</li>
				`;
				summOfProducts+=price;
			}
		});
		const html = `
			<ul class="shopping-container">
				${htmlCatalog}
			</ul>
			<div class="total-amount">
				<button><span class="total-amount-number">Сумма: ${summOfProducts.toLocaleString()} P</span></button>
			</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
		
	}
}
const shoppingPage = new Shopping();
shoppingPage.render();