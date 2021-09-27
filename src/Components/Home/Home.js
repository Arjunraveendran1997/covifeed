import React,{Component} from 'react';
import './Home.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class Home extends Component{
  

    render(){
      return(
        <div className="main-container">
        <div className="heading-container">
        <div className="col-md-12">
            <h2 className="home-head">CoviFeed</h2>
        </div>
    </div>
    
            <div className="container-fluid">
                <div className="row">
              <div className="col-lg-6">
                  <img className="home-pic" src="https://cdn.sanity.io/images/0vv8moc6/ophtalmology/84ba8e72fca457e7db653f27f587a5ae500c661a-8000x3600.jpg/covid-19%2520BLUE%2520.jpeg?w=1500&fit=max&auto=format"/>
              </div>
              <div className="col-lg-6">
                  <h3 className="second-head">What is CoviFeed?</h3>
                  <p className="second-detail">CoviFeed is a website that includes, cases of Covid-19 disease in India and all over other Countries.The website contains, Total cases of covid
                   infected peoples, recovered cases and also death caused by Covid-19. </p> 
                   <h3 className="third-head">About Corona?</h3>
                   <p className="third-detail">Coronavirus disease 2019 (COVID-19) is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first known case was identified in Wuhan, China, in December 2019.The disease has 
                   since spread worldwide, leading to an ongoing pandemic.Symptoms of COVID-19 are variable, but often include fever,cough,headache,fatigue, breathing difficulties, and loss of smell and taste.Symptoms may begin one to fourteen 
                   days after exposure to the virus. At least a third of people who are infected do not develop noticeable symptoms.</p>
              </div>
              
              </div>  
              </div>
              <div className="footer">
                  <div className="col-lg-12">
                  <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Creator</h5>
            <p>
             CoviFeed, the website created using React-Bootstrap.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact Us</h5>
            <ul>
              <li className="list-unstyled">
                <a className="footer-github"  href="https://github.com/Arjunraveendran1997"><i class="fab fa-github"></i><span className="github">Github</span></a>
              </li>
              <li className="list-unstyled">
                <a className="footer-linkedin" href="https://www.linkedin.com/in/arjun-ravi-ba2a15209/"><i class="fab fa-linkedin"></i><span className="linkedin">Linkedin</span></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:  Arjun Ravi 
        </MDBContainer>
      </div>
    </MDBFooter>

                  </div>
                  </div>  
              </div> 
          
      )
    }
}

export default Home;