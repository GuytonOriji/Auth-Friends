import React from 'react';
import styled from "styled-components"
import {Form,Input,Label,Button} from 'reactstrap'
import {axiosWithAuth} from '../utils/'








class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      credentials:{
        username:'',
        password:''
      }
    }
  }

  handleName = val =>{
    this.setState({
     credentials:{
      ...this.state.credentials,
      username:val.target.value
    }
    })
  }


handlePassword = val =>{
    this.setState({
      credentials:{
      ...this.state.credentials,
      password:val.target.value
    }
    })
  }


  login = (e) =>{
      e.preventDefault();
        axiosWithAuth().post("/api/login",this.state.credentials).then(res=>{
          console.log(res.data.payload)
          window.localStorage.setItem('token',res.data.payload)
          this.props.history.push('/protected')
        }).catch(err=>{
          console.log(err)
        })


        console.log(this.state.credentials)


  }


componentDidMount(){
  console.log(this.props)
}

  render(){
  return (
   
      

      <Form style={{flex:'1',border:"solid"}} className='form' onSubmit={this.login}>
       <Label htmlFor='username'>username:
         <Input type='text' name='username' placeholder='username' 
         onBlur={this.handleName}
         />
       </Label>

        <Label htmlFor='password'>password:
         <Input type='password' name='password' placeholder='password'  
         onBlur={this.handlePassword}
         />
       </Label>

       <div>
       <Button color='success'>Login</Button>
        </div>
      </Form>
     

  );
}
}

export default Login;