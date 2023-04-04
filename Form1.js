import logo from './logo.svg';
import './App.css';
import React from 'react';
import App1 from './App1';
import App2 from './App2';
import axios from 'axios';

//function App() {
//lets change from functional to class components
// class components are the way to build components
class Form1  extends React.Component{
  

//state ={name:"",email:"",age:0,students:[]}
state ={name:"",email:"",age:0,students:[]}
constructor(props){
    super(props);
    this.changehandler1 = this.changehandler1.bind(this);
    this.submit =this.submit.bind(this);
    this.getstudents = this.getstudents.bind(this);
}
 getstudents(e){

  axios.get(`http://localhost:3000/getallstudents`)
    .then(res => {
        console.log(res.data);
   
    this.setState({students: res.data});
     console.log('state'+this.state.students);
    console.log(res);
    })

}

changehandler1(e){

    if (e.target.name =="name1"){
        console.log(e.target.value);
     this.setState({name :e.target.value});
  
    }
    if (e.target.name =="age"){
        this.setState({age :e.target.value});
         console.log(this.state);

    }
    if (e.target.name =="email"){
        console.log(e.target.value);
        this.setState({email :e.target.value});


    }
}

async submit(e){
    e.preventDefault();
    console.log(this.state);
    const studentData = {
        name: this.state.name,
       age:this.state.age
      };

////////////////////
axios.post("http://127.0.0.1:3000/addstudents", studentData).then((response) => {
console.log(studentData + 'Sent to server');   
console.log(response.status, response.data);
  });

}




   // rest api exprss js from here
   // and pass this state to the node js

render(){

return(<div>
    {this.state.students.map((a, index) => (
        <p>Hello,index {index} {a.name} from {a.age}!<button onClick={()=>this.delete1(index)}>Delete</button></p>
        ))}
        
<form onSubmit={this.submit}>
Name     :<input type="text" name="name1" value={this.state.name} onChange={this.changehandler1}/><br/>
Age       :<input type="number" name="age" value={this.state.age} onChange={this.changehandler1}/><br/>
Email     :<input type="email" name="email" value={this.state.email} onChange={this.changehandler1}/><br/>

<input type="submit" value="Submit" />      
<button onClick = {this.getstudents}>Show students </button>



</form>


</div>



);
}
}

export default Form1;
