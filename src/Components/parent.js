import {Component} from "react"

class Parent extends Component{
   

    render(){
        // console.log(this.props.products)
        // item.onsale? ...... : ""  => انا هنا بقوله لو ال اونسيل ب ترو يبقي ينفذ كود معين ولو لا يبقي مينفذش حاجه او ينفذ كود معين تاني 
        // الطريقه دي اسمها ternary operator
        return <div>
            {this.props.products.map((item,index)=> item.onsale?<div key={index}>
                <h1>{item.productName}</h1>
                <span>Price : {item.price}</span>
                <p>Count : {item.count}</p>
                <button onClick={()=>this.props.update(/*item.id*/ index)}>Update Count</button>
            </div>:"")}
        </div>
    }
} 

export default Parent
