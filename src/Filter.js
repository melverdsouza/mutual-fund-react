import React from 'react';
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
    render() {
        return (
            <div>
                <h4>Filter</h4>
                <Collapse >
                    <Panel header="Category" key="1">
                    <Button value='Equity' onClick={this.props.filterCategory} block>Equity</Button>
                    <Button value='Debt - Bonds' onClick={this.props.filterCategory} block>Debt - Bonds</Button>
                    <Button value='ELSS' onClick={this.props.filterCategory} block>ELSS</Button> 
                    </Panel>
                </Collapse>
                <Collapse >
                    <Panel header="Fund Type" key="1">
                    <Button value='Equity' onClick={this.props.filterFundType} block>Equity</Button>
                    <Button value='Debt' onClick={this.props.filterFundType} block>Debt</Button>
                    <Button value="Others" onClick={this.props.filterFundType} block>Others</Button> 
                    <Button value="Solution Oriented" onClick={this.props.filterFundType} block>Solution Oriented</Button> 
                    <Button value="Hybrid" onClick={this.props.filterFundType} block>Hybrid</Button> 
                    <Button value="International" onClick={this.props.filterFundType} block>International</Button> 
                    <Button value="Commodity" onClick={this.props.filterFundType} block>Commodity</Button> 
                    </Panel>
                </Collapse>  
                <Collapse >
                    <Panel header="Plan" key="1">
                        <Button value='AS N WHEN' onClick={this.props.filterPlan} block>As and When</Button>
                        <Button value='DIVIDEND MONTHLY' onClick={this.props.filterPlan} block>Dividend Monthly</Button>
                        <Button value='DIVIDEND QUARTERLY' onClick={this.props.filterPlan} block>Dividend Quarterly</Button> 
                        <Button value='DIVIDEND ANNUAL' onClick={this.props.filterPlan} block>Dividend Annual</Button> 
                        <Button value='DIVIDEND DAILY' onClick={this.props.filterPlan} block>Dividend Daily</Button> 
                        <Button value='DIVIDEND WEEKLY' onClick={this.props.filterPlan} block>Dividend Weekly</Button> 
                        <Button value='DIVIDEND SEMI-ANNUALLY' onClick={this.props.filterPlan} block>Dividend Semi-Annualy</Button> 
                        <Button value='FORTNIGHTLY' onClick={this.props.filterPlan} block>Fortnightly</Button> 
                        <Button value='Bonus' onClick={this.props.filterPlan} block>Bonus</Button> 
                        <Button value='DIVIDEND BIMONTHLY' onClick={this.props.filterPlan} block>Dividend Bi-Monthly</Button> 
                        <Button value='Dividend Corporate' onClick={this.props.filterPlan} block>Dividend Corporate</Button> 
                    </Panel>
                </Collapse>            
            </div>
        )
    }
}

export default Filter