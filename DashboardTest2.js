import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Grid } from 'semantic-ui-react';
import ClimateReporting from './climate-reporting/ClimateReporting.js';
import TCFDSignatoriesBar from './climate-reporting/TCFDSignatoriesBar.js';
import EmissionsGrouped from './scope3-emissions/EmissionsGrouped.js';
import CdpScore from './climate-reporting/CdpScore.js';
import ClimateReportingEnergy from './climate-reporting/ClimateReportingEnergy.js';


class DashboardTest2 extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <h1>Client's Dashboard Two</h1>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <ClimateReporting />
                        </Grid.Column>
                        <Grid.Column>
                            <TCFDSignatoriesBar />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <EmissionsGrouped />
                        </Grid.Column>
                        <Grid.Column>
                            <CdpScore />
                        </Grid.Column>
                        <Grid.Column>
                            <ClimateReportingEnergy />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default DashboardTest2;