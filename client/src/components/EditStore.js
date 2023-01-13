import React, { Component } from 'react';
import axios from 'axios'

export default class EditStore extends Component {


    constructor(props){
        super(props);
        this.state={
            name:"",
            date:"",
            quantity:"",
            supplier:"",
            supplier_email:""
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
        const id = this.props.match.params.id;


        const {name,date,quantity,supplier,supplier_email} = this.state;

        const data ={
            name:name,
            date:date,
            quantity:quantity,
            supplier:supplier,
            supplier_email:supplier_email
            
        }

        console.log(data)
        
        axios.put(`http://localhost:8000/store/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert(" Updated Successfully")
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

   
retriveveStores(){

        axios.get("./store").then(res =>{

          if (res.data.success){

            this.setState({

              stores:res.data.existingStore

            });

    

            console.log(this.state.store)

          }

        });

      };


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/store/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                  name:res.data.store.name,
                  date:res.data.store.date,
                  quantity:res.data.store.quantity,
                  supplier:res.data.store.supplier,
                  supplier_email:res.data.store.supplier_email,

                });

                console.log(this.state.store);
                      this.retriveveStores();       
            }
        });

    }

    render() {
        return (
            <div className="col-md-6 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Update Stock</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Name</label>
                          <input type="text"
                         className="form-control"
                         name="name" required
                         placeholder="Enter Name"
                         value={this.state.name}
                         onChange={this.handleInputChange}/>
                          {/* <select id="name"
                          className="form-control"
                          name="name" required
                          placeholder="Enter Name"
                          value={this.state.name}
                          onChange={this.handleInputChange}>
                           <option selected>Choose.....</option>
                           <option>Dark Table Clothes</option>
                           <option>Ballons</option>
                           <option>Red color Table Clothes</option>
                           <option>Dark Lights</option>
                           <option>Green Color chair covers</option>
                           <option>Blue color chair covers</option>
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
