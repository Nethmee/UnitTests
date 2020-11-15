import React from 'react';

import './App.css';



class App extends React.Component {

 inventory =[
    { packageId: 1, productId: 100, qty:1, price: 15 },
    { packageId: 2, productId: 100, qty:5, price:  60 },
    { packageId: 3,  productId: 100, qty:10, price:100},
    { packageId: 4, productId: 200, qty:1, price: 15 },
    { packageId: 5, productId: 200, qty:5, price: 60 },
    { packageId: 6, productId: 200, qty:10, price: 100}


]

getInventory=()=>{
  //console.log(this.inventory)
}

getPackageById = (id) =>{


  const pack=this.inventory.filter(i=>i.packageId===id)
  
  console.log(pack)
  return pack;
}
 getPackageByProductId = (productId) =>{

  const pack=this.inventory.filter(i=>i.productId===productId)
  console.log(pack)
  return pack;
}

getTheCheapestCombination =(productId,qty) =>{


  //when qty exceeds the max
}





  render() {
    return (
      <div className="App">
       <h3>Check Inventory</h3> 
        
       
      </div>
    );
  }
}

export default App;
