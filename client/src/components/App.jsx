import React from 'react';
import groceriesData from '../data/groceriesData.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      groceries: groceriesData,
      item:'',
      quantity:''
    },
    this.handleChange = this.handleChange.bind(this),
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    var newItem ={
      name: this.state.item,
      quantity: this.state.quantity
    }
    this.setState({
      groceries: [newItem, ...this.state.groceries],
      item:'',
      quantity:''
    })

  }

  render() {
    return(

      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form onSubmit= {this.handleSubmit}>
          <label> Item
            <input placeholder='Grocery Item' name="item" value={this.state.item} onChange ={this.handleChange}/>
          </label>
          <label> Quantity
            <input placeholder='Quantity' name="quantity" value={this.state.quantity} onChange ={this.handleChange} />
          </label>
          <button>Add Grocery</button>
          <ul className="groceries">
            {this.state.groceries.map((obj, index) =>
              <li key= {index}>{obj.name} - {obj.quantity}</li>
              )}
          </ul>
        </form>
      </div>
    )
  }
};

export default App;