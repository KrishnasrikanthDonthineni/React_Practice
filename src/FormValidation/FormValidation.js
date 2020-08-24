import React , { Component } from 'react';
import {FormErrors} from './FormErrors';

class FormValidation extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            formErrors : {
                username : "",
                password : ""
            },
            usernameValid : false,
            passwordValid : false,
            formValid : false
        }

    }

    handleUserInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        }, ()=> this.validateField(name,value))
    }

    validateField = (fieldName, feildValue) => {
        let feildValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName){
            case "username" : 
                usernameValid = feildValue.match(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/);
                feildValidationErrors.username = usernameValid ? " " : "Is Incorrect!";
                break;
            case "password" :
                passwordValid = feildValue.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
                feildValidationErrors.password = passwordValid ? " " : "Is Invalid !";
                break;
            default:
                break;
        }
        this.setState({
            formErrors : feildValidationErrors,
            usernameValid : usernameValid,
            passwordValid : passwordValid
        }, this.validateForm)
    }

    validateForm = () => {
        this.setState({
            formValid : this.state.usernameValid && this.state.passwordValid
        })
    }

    render(){
        return(

            <form name="frm">
                <div className = "card">
                    <div className = "card-header">
                    <h4 className="Card-title">ShowFormErrors</h4>
                    </div>
                    <div className = "card-body">
                        <FormErrors formErrors = {this.state.formErrors}/>
                    </div>
                    <div className = "card-footer">
                        <p>Type of error message</p>
                    </div>

                </div>

                <fieldset class="form-group">
                    <label for="username">UserName</label>
                    <input type="text" 
                    name="username" 
                    value={this.state.username} 
                    placeholder="john" 
                    className="form-control"
                    required
                    onChange = {this.handleUserInput}
                    />
                </fieldset>
                <fieldset class="form-group">
                    <label for="password">Password</label>
                    <input type="text"
                     name="password"
                     value={this.state.password} 
                     placeholder="john" 
                     className="form-control"
                     required
                     onChange = {this.handleUserInput}
                     />
                </fieldset>
                <fieldset class="form-group">
                    <button type = "button" 
                    className = "btn btn-primary"
                    disabled = {!this.state.formValid}>
                        submit
                    </button>
                </fieldset>
            </form>
        )
    }
}

export default FormValidation ;