import React, { Component } from 'react';
import ViewCaseNav from './Navbar/ViewDocNav.js'
import RecordPhoto from './RecordPhoto';

class ViewRecord extends Component
{

    render()
    {
        var recordId = this.props.routeParams.recordId;
        console.log(this.props);
        return(
            <div>
            <ViewCaseNav recordId = {recordId}/>
            <div className="">
                <RecordPhoto/>
            </div>
            </div>
        )

    }
}

export default ViewRecord;
