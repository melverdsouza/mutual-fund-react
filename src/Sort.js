import React from 'react'
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

class Sort extends React.Component {
    render() {
        return (
            <div>

                <h4>Sort</h4>
                <Collapse >
                        <Panel header="Sort By" key="1">
                        <Button value='name' onClick={this.props.sorting} block>Name</Button>
                        <Button value='fund_category' onClick={this.props.sorting} block>Fund Category</Button>
                        <Button value='fund_type' onClick={this.props.sorting} block>Fund Type</Button> 
                        <Button value='plan' onClick={this.props.sorting} block>Plan</Button> 
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default Sort