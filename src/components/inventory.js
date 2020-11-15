console.log("inventory")

const inventory =[
    { packageId: 1, productId: 100, qty:1, price: 15 },
    { packageId: 2, productId: 100, qty:5, price:  60 },
    { packageId: 3,  productId: 100, qty:10, price:100},
    { packageId: 4, productId: 200, qty:1, price: 15 },
    { packageId: 5, productId: 200, qty:5, price: 60 },
    { packageId: 6, productId: 200, qty:10, price: 100}


]

/* export const add =(x,y)=>{
    console.log(x+y)
    return (x+y)

} */
export const getPackageById = (packageId)=>{
    const pack=inventory.filter(i=>i.packageId===packageId)
  
    console.log(pack)
    return pack;

}

export const getPackagesByProductId = (productId) =>{

    const pack=inventory.filter(i=>i.productId===productId)
    console.log(pack)
    return pack;
  }
  