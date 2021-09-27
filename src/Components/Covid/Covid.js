import React from 'react';
import './Covid.css'

function Covid(){


    return(
        <div className="main-container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="main-head">Covid-19(Corona)</h2>
                    <h5>Name</h5>
                    <p>During the initial outbreak in Wuhan, the virus and disease were commonly referred to as "coronavirus" and "Wuhan 
                        coronavirus", with the disease sometimes called "Wuhan pneumonia". In the past, many diseases
                         have been named after geographical locations, such as the Spanish flu, Middle East respiratory syndrome, and Zika virus. 
                         In January 2020, the WHO recommended 2019-nCoV and 2019-nCoV acute respiratory disease as interim names for the virus and 
                         disease per 2015 guidance and international guidelines against using geographical locations (e.g. Wuhan, China), animal 
                        species, or groups of people in disease and virus names in part to prevent social stigma.</p>
                        <h5>Signs and symptoms</h5>
                        <p>Symptoms of COVID-19 are variable, ranging from mild symptoms to severe illness. Common symptoms include 
                            headache, loss of smell and taste, nasal congestion and runny nose, cough, muscle pain, sore throat, fever, diarrhea,
                             and breathing difficulties. People with the same infection may have different symptoms, and their symptoms may
                              change over time. Three common clusters of symptoms have been identified: one respiratory symptom cluster with
                               cough, sputum, shortness of breath, and fever; a musculoskeletal symptom cluster with muscle and joint pain, 
                               headache, and fatigue; a cluster of digestive symptoms with abdominal pain, vomiting, and diarrhea.</p>
                    <h5>Cause</h5>
                    <p>COVID-19 is caused by infection with the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) virus strain.</p>
                <h5>Transmission</h5>
                <p>The disease is mainly transmitted via the airborne route when people inhale droplets and small airborne particles (that form an 
                    aerosol) that infected people breath out as they breathe, talk, cough, sneeze, or sing. Infected people 
                    are more likely to transmit COVID-19 when they are physically close. However, infection can occur over longer 
                    distances, particularly indoors.</p>
                
                </div>
                <h6 className="copy-right">Courtesy : Wikepedia </h6>

            </div>
        </div>
    )
}

export default Covid;