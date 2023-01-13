import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    stores:[]
  };

}


componentDidMount(){
  this.retriveveStores();

}

retriveveStores(){
  axios.get("http://localhost:8000/stores").then(res =>{
    if(res.data.success){
      this.setState({
        stores:res.data.existingStores
      });

      console.log(this.state.stores)
    }


  });
}

//report

genPDF =() => {

  const doc = new jsPDF()
  doc.setFontSize(20);
  doc.text("Stock Details List", 50,10);
  doc.autoTable({
  html: '#content'

})

doc.setFontSize(12);
doc.text("Auto Hub Service Station - ", 10,272);
doc.setFontSize(10);
doc.text(" Stock Details Report", 52,272);
doc.save('Stock Details.pdf')

}

//delete function

onDelete = (id) =>{

  axios.delete(`/store/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retriveveStores();
  })
}

//Search store

filterData(stores,searchKey){

  const result = stores.filter((store) =>
  store.name.toLowerCase().includes(searchKey)||
  store.supplier.toLowerCase().includes(searchKey)
)

this.setState({stores:result})
}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/stores").then(res =>{
    if(res.data.success){
     
       this.filterData(res.data.existingStores,searchKey)
      
    }
  });

}
  render() {
    return (
     

      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>All Stock</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="search"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>
       <table className="table table-hover" style={{marginTop:'40px'}} id="content">
         <thead>
           <tr>
           <th scope="col">No</th>
           <th scope="col">Name</th>
           <th scope="col">Date</th>
           <th scope="col">Quantity</th>
           <th scope="col">Supplier</th>
           <th scope="col">Supplier Email</th>
           <th scope="col">Action</th>
           </tr>
         </thead>
         <tbody>
           {this.state.stores.map((stores,index) =>(
             <tr key={index}>

               <th scope="row">{index+1}</th>
               <td>
                   <a href={`/store/${stores._id}`} style={{textDecoration:'none'}}>
                   {stores.name}
                   </a>
                   </td>

               <td>{stores.date}</td>
               <td>{stores.quantity}</td>
               <td>{stores.supplier}</td>
               <td>{stores.supplier_email}</td>
               
               <td>
                 <a className="btn btn-warning" href={`/edit/${stores._id}`}>
                   <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(stores._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>

               </td>
              </tr>

           ))} 
           
         </tbody>

       </table>
       

       <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Stock</a></button>
       &nbsp;

       
       <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute",

right:"150px"}}><a href="#" onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}> GENERATE REPORT</a></button>
    

      </div>
      

    )
  }
}
