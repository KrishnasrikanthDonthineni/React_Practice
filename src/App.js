import React from 'react';


import './App.css';
import  User  from "./User/User";
import FormValidations from "./FormValidation/FormValidation";
import Alphabet from "./ArrowFunctionPrac/PassingParams";
import Refs from "./Refs/Refs";
import RestAPI from "./RestAPI/RestAPI";
 
class App extends React.Component{

  state = {
    users : [
      { id : "a1" ,name : " john " , age : " 24 "},
      { id : "b2" ,name : "krishna" , age : "22"},
      { id : "c3" ,name : "dory" , age : "20"},
      { id : "d4" ,name : "DKS" , age : "25"}
    ],
    showPerson : false 
  }

  switchNameHandler = (newName , newAge) =>{
    this.setState ({
      users : [
        { name : newName , age : newAge },
        { name : "kra" , age : "22"},
        {name : "d" , age : "20"}
              ]
    })
  }

  switchName = (newName , newAge) =>{
    this.setState ({
      users : [
        { name : newName , age : newAge },
        { name : "krishna" , age : "22"},
        {name : "dory" , age : "20"}
              ]
    })
  }
/*
  changeHandler = (event) => {
    this.setState ({
      users : [
        { name : event.target.value , age : 99 },
        
              ]
    })
  }
*/

  nameChangeHandler = (event , id) => {
    const userIndex = this.state.users.findIndex(u => {
      return u.id === id
    })
    const user = {
      ...this.state.users[userIndex]
    }
      user.name = event.target.value

      const users = [...this.state.users];
      users[userIndex] = user;

      this.setState({
        users : users 
      })

  }

  togglePersonHandler = () => {
      const show = this.state.showPerson;
      this.setState({
        showPerson : !show
      })
  }

  deletePersonHandler = (index) => {
   const users = this.state.users; 
    users.splice(index,1);
    this.setState({users : users});
  }

  

  render(){
    let userName = "Krishna";
    let age = "24";
    let persons = null;

    if(this.state.showPerson === true){
      persons = (
      /*  <div>
        <User name = {this.state.users[0].name} age = {this.state.users[0].age}
        click = {() => this.switchName("raju",99)}
        change = {() => this.changeHandler}
        />

        <User name = {this.state.users[1].name} age = {this.state.users[1].age}/>

        <User name = {this.state.users[2].name} age = {this.state.users[2].age}/>
      </div> */

      <div>
        {this.state.users.map((user , index) => {
          return(
            <User
            id = {user.id}
            name = {user.name}
            age = {user.age}
            click = {() => this.deletePersonHandler(index)}
            change = {(event) => this.nameChangeHandler(event,user.id)}
          />
          )
          
        })}
      </div>
      )
   /*   CSS.btnStyle.backgroundColor = "rgba(122,211,112,0.4)";
      CSS.btnStyle.border = "2px solid rgba(0,255,0,0.4)"; */
    }
    else{
      persons = (
        "No Results Found !!"
      )
    }

    return(
      <div>
      <div className ="row card">
        <div className = "col-sm-12 card-header ">
         <div className="App">
         <h4>This my first Reactjs Project</h4>
         </div>
        </div>
      </div>
      <div className="row">
      <div class="col-sm-1" >
      <Alphabet/>
      </div>
        <div className="col-sm-5">

        <div className="App">
        
        <p> <strong>{userName}'s</strong> age is <strong>{age}</strong></p>
        <br/>
        <p>This is a new user file</p>
        <p><strong>User Details</strong></p>
        {this.state.showPerson === true ?
        <p><button className = "btnStyle" type = "button" onClick = {this.togglePersonHandler}>Hide Users</button></p> 
        :
        <p><button className = "btnStyle" type = "button" onClick = {this.togglePersonHandler}>Show Users</button></p>
        }
        
        
        {persons}
        
        <Refs/>
        
      </div>

        </div>

      <div class="col-sm-6">
       <br/>
       <br/>
       <div class="col-sm-10">
       <FormValidations
      />
     <RestAPI/>

      
       </div>
      

      </div>
      
      </div>
      </div>



      
      
    )
  }
}

export default App;
