import React from 'react';
import {Route, NavLink, Switch } from 'react-router-dom';
import styled from "styled-components"
import {Form,Input,Label,Button, Container} from 'reactstrap'
import {axiosWithAuth} from '../utils/'

class ListPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      friends:[],
      credentials:{
        name:'',
        age:'',
        email:''
      }
    }
  }



  componentDidMount(){
    this.getData()

  }


  getData = () =>{

    axiosWithAuth().get('/api/friends').then(res=>{
        console.log('ok',res)
        this.setState({
          friends:res.data
        })
    })

  }

 handleName = val =>{
    this.setState({
     credentials:{
      ...this.state.credentials,
      name:val.target.value
    }
    })
  }


handleEmail = val =>{
    this.setState({
      credentials:{
      ...this.state.credentials,
      email:val.target.value
    }
    })
  }

   handleAge = val =>{
    this.setState({
     credentials:{
      ...this.state.credentials,
      age:val.target.value
    }
    })
  }


addFirend = val =>{
   val.preventDefault()

    axiosWithAuth()
    .post('/api/friends',this.state.credentials).then(res=>{
      console.log(res)
      this.setState({
        friends:res.data
      })
    })
   
  }


  componentDidUpdate(){
    console.log('logged work',this.state)
  }

  render(){
  return (
   
     <Container>
      
logged in


<div>
 

      <Form style={{flex:'1',border:"solid"}} className='form' onSubmit={this.addFirend}>
       <Label htmlFor='name'>name:
         <Input type='text' name='name' placeholder='name' 
         onBlur={this.handleName}
         />
       </Label>

        <Label htmlFor='age'>age:
         <Input type='text' name='age' placeholder='age' 
         onBlur={this.handleAge}
         />
       </Label>

        <Label htmlFor='email'>email:
         <Input type='email' name='email' placeholder='email'  
         onBlur={this.handleEmail}
         />
       </Label>

       <div>
       <Button color='info'>add Friend</Button>
        </div>
      </Form>
      </div>
    </Container>
  );
}
}

export default ListPage;