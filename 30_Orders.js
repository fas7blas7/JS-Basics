function order(product, quantity)
{   
    let pricePerUnit;
    
    switch (product) {
        case "coffee":
            pricePerUnit = 1.50;
            break;
        case "water":
            pricePerUnit = 1.00;
            break;
        case "coke":
            pricePerUnit = 1.40;
            break;
        case "snacks":
            pricePerUnit = 2.00;
            break;
    }

    let totalPrice = pricePerUnit * quantity; 
       
    console.log(totalPrice.toFixed(2));
}

order("coffee", 5)