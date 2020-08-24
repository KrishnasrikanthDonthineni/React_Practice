import React, {Component} from "react";
import ReactDOM from "react-dom";

class Refs extends Component {

    constructor(props){
        super(props);
        this.state ={
            data : ""
        }
        this.updateValue = this.updateValue.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

  /*  updateValue = (typeEvent)=>{
        this.setState({
            data : typeEvent.target.value
        })
    }*/
    updateValue (typeEvent){
        this.setState({
            data : typeEvent.target.value
        })
    }

    clearInput(){
        this.setState({
            data : ""
        })
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render(){
        return(
            <div className ="card App">
            <form>
                <fieldset className ="form-group">
                    <input type="text" 
                            name="refs" 
                            value={this.state.data}
                            placeholder="refs" 
                            className="form-control"
                            ref="myInput"
                            onChange = {this.updateValue}
                            />
                </fieldset>
                <fieldset className="form-group">
                    <button type = "button"
                        onClick={this.clearInput}
                        className = "btn btn-primary">
                            CLearInput
                        </button>
                </fieldset>
            </form>
            
            <br/>
        <div className ="card-footer">
            <h4>Data : {this.state.data}</h4>
        </div>
        
        </div>
        )
    }
}

export default Refs;