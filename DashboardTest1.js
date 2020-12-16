import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Grid } from 'semantic-ui-react';
import ClimateOpportunities from './climate-opportunities/ClimateOpportunities.js';
import ClimateTargets from './climate-targets/ClimateTargets.js';
import ClimateRelatedPerformance from './climate-governance/ClimateRelatedPerformance.js'
import ClimateRiskGrouped from './climate-risks/ClimateRiskGrouped.js';
import ScenarioAnalysis from './scenario-analysis/ScenarioAnalysis.js';
import ClimateRisksOil from './climate-risks/ClimateRisksOil.js';

class DashboardTest1 extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <h1>Client's Dashboard One</h1>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <ClimateOpportunities />
                        </Grid.Column>
                        <Grid.Column>
                            <ClimateTargets />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <ClimateRelatedPerformance />
                        </Grid.Column>
                        <Grid.Column>
                            <ClimateRiskGrouped />
                        </Grid.Column>
                        <Grid.Column>
                            <ScenarioAnalysis />
                        </Grid.Column>
                        <Grid.Column>
                            <ClimateRisksOil />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default DashboardTest1;