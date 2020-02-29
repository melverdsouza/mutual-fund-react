import React from 'react'
import FuzzySearch from 'fuzzy-search'

import EachCard from './EachCard.js'
import Nav from './Nav'
import Filter from './Filter'
import Sort from './Sort'
// import Search from './Search'

import { Layout, Button, Input } from 'antd';
import fire from './config/fire.js'

const { Header, Footer, Sider, Content } = Layout;

let set = []
class EachFund extends React.Component {
    constructor() {
        super()
        this.state = {
            allFunds: ['check'],
            filtered: ['check'],
            searchText: ""
        }
        this.filterCategory = this.filterCategory.bind(this)
        this.filterFundType = this.filterFundType.bind(this)
        this.filterPlan = this.filterPlan.bind(this)
        this.sorting = this.sorting.bind(this)
        this.searching = this.searching.bind(this)
    }

    filterCategory(event) {
        let data = this.state.allFunds.filter(funds => funds['category']=== event.target.value).splice(0,100)
        this.setState({filtered: data})
    }

    filterFundType(event) {
        let data = this.state.allFunds.filter(funds => funds['fund_type']=== event.target.value).splice(0,100)
        this.setState({filtered: data})
    }

    filterPlan(event) {
        let data = this.state.allFunds.filter(funds => funds['plan']=== event.target.value).splice(0,100)
        this.setState({filtered: data})
    }

    sorting(event) {
        let data = this.state.filtered.sort((a,b) => {return (a[event.target.value] > b[event.target.value]) ? 1 : -1})
        this.setState({filtered: data})
        console.log(this.state.filtered)
    }

    searching(event) {
        this.setState({searchText:event.target.value})
        console.log(this.state.searchText)
    }

    logout() {
        fire.auth().signOut()
    }

    async componentDidMount() {
        let response = await fetch('https://api.kuvera.in/api/v3/funds.json')
        let items = await response.json()
        this.setState({allFunds: items, filtered:items.splice(0,100)})
        console.log(this.state.allFunds.length)
    }

    render() {
        const searcher = new FuzzySearch(this.state.filtered, ["name"], ['category'],['fund_category'], ['plan'], {
            caseSensitive: false,
            sort: true
          });
          const result = searcher.search(this.state.searchText);
        return (
            <Layout>
                <Header  className='nav'>
                    <div>Mutual Funds</div>
                    <Button className='logout' onClick={this.logout}>Logout</Button>
                </Header>
                <Layout className='sections'>
                    <Sider className='sider'>
                        <Input placeholder="Search..." onChange={this.searching} />
                        <Filter filterCategory={this.filterCategory} filterPlan={this.filterPlan} filterFundType={this.filterFundType} />
                        <Sort sorting={this.sorting} />
                    </Sider>
                    <Content className='all-cards'>
                        {result.map(fund => <EachCard fundDetails={fund} />)}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default EachFund