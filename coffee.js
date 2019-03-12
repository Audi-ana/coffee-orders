let coffeeOrdersURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
let emailsList = document.getElementById('emailsList')


fetch(coffeeOrdersURL)
.then(function(response){
    return response.json()
}).then(function(orders){
    let customers = Object.values(orders)
    let customerList = customers.map(function(c){
        return `<li>
        <div>${c.emailAddress}</div>
        <div>${c.coffee}</div>
        </li>`
    })
    emailsList.innerHTML = customerList.join('')// console.log(customerList)
})

function newOrder(){
    
}
