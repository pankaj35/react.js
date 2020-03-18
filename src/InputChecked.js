import React , {Component} from 'react';

class InputChecked extends Component {
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

