import faker from 'faker'
if (module.hot) {
    module.hot.accept();
  }
  

let products = ''

for(let i =0 ;i < 21; i++){
    const name = faker.commerce.productName()
    products += `<div>${name}<div>` 
}
document.querySelector('#dev-products').innerHTML = products
console.log(products,'products')