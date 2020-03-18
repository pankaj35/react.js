import React , {Component} from 'react';
import './App.css';
import InputChecked from './InputChecked';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     
      Names: [
        {
          id:0,
          name: "Football",
          checked:false
        },
        {
          id:1,
          name: "cricket",
          checked:false
        },
        {
          id:2,
          name: "Hockey",
          checked:false
        },
        {
          id:3,
          name: "Basketball",
          checked:false
        },
      ],
      text: "",      
    }
    this.handlehange = this.handlehange.bind(this);
  }
  
  handlehange = (ID) => {
    let data = this.state.Names;
    console.log(data);
    // console.log(event.target.name);
    data = data.map(val=>{
      console.log(ID)
      if(val.id === ID){
        val.checked = !val.checked;
      }
      return val;
     
    })
    console.log(data);
    
    this.setState({Names: data})
}
submit = (event)=>{
  event.preventDefault();
  const text = this.state.text
  if(text === ""){
    this.setState({
      text: "",
    })
  }else{
    this.setState((prev)=>({Names:[...prev.Names, {id: this.state.Names.length, name:text }]}))
  } 
}
textcontext = (e) =>{
  this.setState (
    {text: e.target.value}
  )
}
editable = (e,index) =>{
  console.log(index);
  let Names = this.state.Names;
  Names[index].name = e.target.value;
   
  this.setState({
    Names
  })
}
  render() {
    console.log(this.state.Names);
    return(
      <div>
        <h1>Todo App</h1>
       <InputChecked name= {this.state.Names} handlehange={this.handlehange} editable ={this.editable}/>
      <form onSubmit ={this.submit}>
       <input  type="text" value = {this.state.text} onChange={this.textcontext}/>
      <button>submit</button>
      </form>
      </div>
    )
  }
}
export default App;
