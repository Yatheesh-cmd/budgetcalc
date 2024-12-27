const gadgets=[
    {
        id:1,name:"smartphone",brand:"Brand A",price:699,features:["Touchscreen","camera","Bluetooth","GPS"], inStock:true
    },
    {
        id:1,name:"Laptop",brand:"Brand B",price:1199,features:["SSD","16GB","RAM","WI-FI","HD-Display"], inStock:false
    },
    {
        id:1,name:"smartwatch",brand:"Brand C",price:199,features:["HeartRate","Monitor","GPS","Bluetooth","WaterResistant"], inStock:false
    },
    
    {
        id:1,name:"Tablet",brand:"Brand D",price:499,features:["Touchscreen","WI-FI","Bluetooth","ExpandableStorage"], inStock:true
    },
    {
        id:1,name:"Wireless Earbuds",brand:"Brand E",price:149,features:["Bluetooth","Noisecancelling","WaterResistant","Long Bateery Life"], inStock:true
    },
]
gadgets.forEach(item=>{
    console.log(item.name)
})

gadgets.forEach(item=>{
    if(item.price<500)
    console.log(item.name)
})

gadgets.forEach(item=>{
    console.log(item.inStock)
})

