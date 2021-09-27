import React,{Component} from 'react';
import Axios from 'axios';
import {Accordion} from 'react-bootstrap';



class Statedata extends Component{
  
    constructor(){
        super();
        this.state={
            stateData  : {}
        }
    }
    componentDidMount(){
        Axios.get("https://data.covid19india.org/state_district_wise.json").then(response=>{
            this.setState({stateData:response.data});
        });
    }


    render(){

      let keys= Object.keys(this.state.stateData);

      
        return(
        <div className="row">
            <div className="col-md-12">
                </div>
                <Accordion>
                  {
                    keys.map((itm,key)=>{
                      let districts= this.state.stateData[itm].districtData;
                      let districtKeys= Object.keys(districts);

                      let totalActive= 0;
                      let totalConfirm= 0;
                      let totalRecover=0;
                      let totalDeath=0;

                      let districtList=[];
                      for (let x in districts){
                        totalActive +=districts[x].active;
                        totalConfirm += districts[x].confirmed;
                        totalRecover += districts[x].deceased;
                        totalDeath += districts[x].recovered;
                        let ob = districts[x];
                        ob["district_name"]=x;
                        districtList.push(ob);

                      }
                      return(
                        <Accordion.Item className="btn-primary" eventKey={key}>
    <Accordion.Header>{itm} -<span className="btn-danger p-1 mr-2">Total Cases - {totalConfirm}</span> <span className="btn-warning p-1 mr-2"> Active {totalActive} </span> 
    <span className="btn-success p-1 mr-2" >Recovered {totalRecover} </span> <span className="btn-danger p-1 mr-2">Death {totalDeath} </span></Accordion.Header>
    <Accordion.Body>
     <table className="table table-bordered table stripped">
       <thead>
         <tr>
           <td>District</td>
           <td>Confirmed Cases</td>
           <td>Active cases</td>
           <td>Recovered Cases</td>
           <td>Deaths</td>
         </tr>
       </thead>
       <tbody>
        {
          districtList.map((itm,key)=>{
            return(
              <tr>
                <td>{itm.district_name}</td>
                <td>{itm.confirmed}</td>
                <td>{itm.active}</td>
                <td>{itm.recovered}</td>
                <td>{itm.deceased}</td>
             </tr>
            )
          })
        }
       </tbody>
     </table>
    </Accordion.Body>
  </Accordion.Item>
                        
                      )
                    })
                  }
  
</Accordion>
        </div>

    )
    }
}


export default Statedata;