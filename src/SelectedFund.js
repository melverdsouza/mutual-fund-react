import React from 'react'
import fire from './config/fire.js'

import { Layout, Button } from 'antd';

const { Header } = Layout;

class SelectedFund extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectFund:['check']
        }
        this.logout = this.logout.bind(this)
    }

    logout() {
        debugger;
        fire.auth().signOut()
    }

    async componentDidMount() {
        let response = await fetch(`https://api.kuvera.in/api/v3/funds/${this.props.match.params.id}.json`)
        let item = await response.json()
        this.setState({selectFund: item})
        console.log(this.state.selectFund)
        console.log(this.props.match)
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header  className='nav'>
                        <div>Mutual Funds</div>
                        <Button className='logout' onClick={this.logout}>Logout</Button>
                    </Header>
                </Layout>   
                <div className='next-sec'> 
                    <h1>{this.state.selectFund[0]['name']}</h1>
                    <p>Redemption Allowed: {this.state.selectFund[0]['redemption_allowed']}</p>
                    <p>Fund House: {this.state.selectFund[0]['fund_house']}</p>
                </div>
            </div>
            
        )
    }
}

export default SelectedFund