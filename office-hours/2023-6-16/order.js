let orders = [{
    product: "widget",
    quantity: 4,
    cost: 6.15
  }]
  
  function orderLogger(order) {
    // use the existing `order` object 
    // Hint: when console.log() is called with multiple arguments
    // they are printed on the same line in the order received with a space inserted between them.
  
    console.log('Product:', order.product);
    console.log('Quantity:', order.quantity);
    console.log('Cost:', order.cost);
    console.log('Total:', order.cost * order.quantity);

 }
 let counts = {};
 for (const order of orders) {
    if (!counts[order.product]) {
        counts[order.product] = 1
    } else {
        count[order.product]++
    }
    orderLogger(order);
 }
 console.log(counts);