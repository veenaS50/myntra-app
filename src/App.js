import data from './data.js'
//import Product from "./components/Product"
import Card from "./components/Card"
import "./App.css"

function App(){

  return (
    <div className="app">

      <Card imageURL={data[0].images[0].src}
            productName={data[0].productName}
            discount={data[0].discount} />

      <Card imageURL={data[1].images[0].src}
            productName={data[1].productName}
            discount={data[1].discount} />

      <Card imageURL={data[2].images[0].src}
            productName={data[2].productName}
            discount={data[2].discount} />   

      <Card imageURL={data[3].images[0].src}
            productName={data[3].productName}
            discount={data[3].discount} />  

    </div>

  )
}

export default App

