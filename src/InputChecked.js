import React , {Component} from 'react';
// import ReactDOM from 'react-dom';
import ContentEditable from 'react-contenteditable'
import { Table, Button } from 'semantic-ui-react'

class InputChecked extends Component {
    
    // onsubmit = (e) => {
    //     e.preventDefault();
    //     // const varai = document.getElementById("inputs");
    //     // if (varai.length < 0){
    //     //     varai.style.border = 'border 2px solid';
    //     // }

    //     const name = ReactDOM.findDOMNode(this._nameInput).value;
    //     console.log(name);



         
    // }
    
    render() {
        return(
            <div>
                 {this.props.name.map((item, index) => {
                     return (
                     <div  key={item.id}> 
                        <input type="checkbox" name={item.id} checked={item.checked} onChange={()=> this.props.handlehange(index)} className = "inputs"/>
                        
                        <input value={item.name} type="text" onChange ={(e)=> this.props.editable(e,index)} id = "input"></input>
                        <span>{item.checked ? "Completed" : null} </span>
                    </div>
                     )
                 })

            }
         
               
             
           </div>
        )
    }
}

export default InputChecked;

