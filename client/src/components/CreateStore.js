import React, { Component} from 'react';
import axios from 'axios'

export default class CreateStore extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            date:"",
            quantity:"",
            supplier:"",
            supplier_email:"",
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

        
    }

    onSubmit = (e) =>{

        e.preventDefault();

        const {name,date,quantity,supplier,supplier_email} = this.state;

        const data ={
            name:name,
            date:date,
            quantity:quantity,
            supplier:supplier,
            supplier_email:supplier_email
            
        }

        console.log(data)
        
        axios.post("http://localhost:8000/store/save",data).then((res) =>{
            alert("Added Successfully");
            if(res.data.success){
                this.setState({
                    name:"",
                    date:"",
                    quantity:"",
                    supplier:"",
                    supplier_email:""
                })
                
            }
        })

        
    
    }
    

    

    render() {
        return (
           <div className="col-md-6 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Add New Stock</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Name</label>
                          <input type="text"
                         className="form-control"
                         name="name" required
                         placeholder="Enter name"
                         value={this.state.name}
                         onChange={this.handleInputChange}/>
                          {/* <select id="name"
                          className="form-control"
                          name="name" required
                          placeholder="Enter Name"
                          value={this.state.name}
                          onChange={this.handleInputChange}>
                           <option selected>Choose.....</option>
                           <option>Battery</option>
                           <option>Break Oil</option>
                           <option>Greece</option>
                           <option>Head Light</option>
                           <option>Tyre</option>
                           <option>Tubes</option>
                           <option>Nut&Bolts</option>
                           <option>Side Mirros</option>
                           <option>Tools</option>
                           
                           
                           

                        </select> */}
   
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Date</label>
                        <input type="text"
                         className="form-control"
                         name="date" required
                         placeholder="Enter Date"
                         value={this.state.date}
                         onChange={this.handleInputChange}/>
                         </div>


                        

                      

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Quantity</label>
                          <input type="text"
                          className="form-control"
                          name="quantity" required
                          placeholder="Enter Quantity"
                          value={this.state.quantity}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Supplier</label>
                          <input type="text"
                          className="form-control"
                          name="supplier" required
                          placeholder="Enter Supplier's name"
                          pattern="[A-Za-z]"
                          value={this.state.supplier}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Supplier Email</label>
                          <input type="text"
                          className="form-control"
                          name="supplier_email" required
                          placeholder="Enter Supplier_email"
                          value={this.state.supplier_email}
                          onChange={this.handleInputChange}/>
                        </div>

                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Save
                            </button>

                    </form>        
                    &nbsp;
             
           </div>
        )
    }
}
