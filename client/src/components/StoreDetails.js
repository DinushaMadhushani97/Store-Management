import React, { Component} from 'react';
import axios from 'axios';

export default class StoreDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            store:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/store/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    store:res.data.store

                });

                console.log(this.state.store);
            }
        });

    }

    render() {

        const {name,date,quantity,supplier,supplier_email} = this.state.store;

        return (
            
           <div style={{marginTop:'40px'}}>
               <h2>--- Details of the Stock---</h2>
               &nbsp;
           <h3>{name}</h3>
           <hr/>


           <dl className="row">
               <dt className="col-sm-3">Date</dt>
               <dd className="col-sm-9">{date}</dd>

               <dt className="col-sm-3">Quantity</dt>
               <dd className="col-sm-9">{quantity}</dd>

               <dt className="col-sm-3">Supplier</dt>
               <dd className="col-sm-9">{supplier}</dd>

               <dt className="col-sm-3">Supplier_email</dt>
               <dd className="col-sm-9">{supplier_email}</dd>

               




           </dl>
               
            
            
           </div>
        )
    }
}