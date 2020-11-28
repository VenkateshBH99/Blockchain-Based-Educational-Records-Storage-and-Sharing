import React, { Component } from 'react';
import knife from '../../Images/knife.jpg';
import '../../CSS/Education.css'

class Educational extends Component 
{

    state = {
        report: [
            {
                exhibitId: 101,
                name: "Knife",
                description: "A 3 and a quarter inch wooden hilt dagger.",
                imageURL: __dirname + "/../../Images/knife.jpg"
            }
        ]
    }
    render() {
        let reportId = this.props.match.params.reportId;
        console.log(this.state.report[0].imageURL);
        return(
            <div className = "container signInCard center">
            <div className="card setCardWidth">
            <div className="card-image ">
              <img src={knife} alt="Notes" className = "cardImageHeight"/>
            </div>
            <div className="signInContainer card-content">
              <h4 className="grey-text card-title">Educational Report</h4>
              
            </div>
          </div>
            </div>
        )
    }
}

export default Educational;