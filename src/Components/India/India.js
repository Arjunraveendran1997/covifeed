import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from '../Statedata/Statedata';
import axios from 'axios';

class India extends Component{
    constructor(){
        super();
        this.state={
            data:{}
        }
    }

    
        componentDidMount(){
            axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
                this.setState({data:response.data});
            })
        }
     
    render(){
        return(
        <div className="row">
            <div className="col-md-12">
            <img src="https://www.countryflags.io/in/shiny/64.png"/>
            <h3>INDIA</h3>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                    <Card bg="primary" className="badge" style={{ bg:'danger', width: '18rem' }}>
                     <Card.Body className="text-center">
                         <Card.Title>Total Cases</Card.Title>
                            <h3>{this.state.data.cases}</h3>
                                <Card.Text>
                             
                            </Card.Text>  
                        </Card.Body>    
                    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card bg="warning" className="bagge bagge-danger" style={{ width: '18rem' }}>
                     <Card.Body className="text-center">
                         <Card.Title>Active Cases</Card.Title>
                            <h3>{this.state.data.active}</h3>
                                <Card.Text>
                            
                            </Card.Text>  
                        </Card.Body>    
                    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card bg="success" className="bagge bagge-danger" style={{ width: '18rem' }}>
                     <Card.Body className="text-center">
                         <Card.Title>Recovered</Card.Title>
                            <h3>{this.state.data.recovered}</h3>
                                <Card.Text>
                             
                            </Card.Text>  
                        </Card.Body>    
                    </Card>
                    </div>
                    <div className="col-md-3">
                    <Card bg="danger" className="bagge bagge-danger" style={{ width: '18rem' }}>
                     <Card.Body className="text-center">
                         <Card.Title>Deaths</Card.Title>
                            <h3>{this.state.data.deaths}</h3>
                                <Card.Text>
                            
                            </Card.Text>  
                        </Card.Body>    
                    </Card>
                    </div> 
                    </div>
                </div>
                <div className="col-md-12">
                    <Statedata/>
                </div>
            </div>
            )
        }
            
        
    

}

export default India;
