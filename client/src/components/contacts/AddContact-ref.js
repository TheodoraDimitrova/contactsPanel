import React, { Component } from "react";
import {Consumer} from "../../context"
 
class AddContact extends Component {
    
    constructor(props){
        super(props)

        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
    }
   
 
 
  onSubmit=(e)=>{
      e.preventDefault();
      const contact={
          name:this.nameInput.current.value,
          email:this.emailInput.current.value,
          phone:this.phoneInput.current.value
      }
      console.log(contact)
   
  }

  static defaultProps={
      name:"Teddy B.D.",
      email:"teddy@gmail.com",
      phone:"098-784-435"
  }

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form  onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
               defaultValue={name}
               ref={this.nameInput}
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
              
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                defaultValue={email}  //!!!
                name="email"
                ref={this.emailInput}
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                defaultValue={phone}    //!!!
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter  Phone..."
                ref={this.phoneInput}

              />
            </div>
            <input
              type="submit"
              defaultValue="Add Contact"      //!!!
              className="btn btn-light btn-block"
              

            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
