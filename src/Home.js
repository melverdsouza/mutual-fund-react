import React from 'react'
import fire from './config/fire'
import Login from './Login'
import EachFund from './EachFund'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
        this.authListener = this.authListener.bind(this)
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user})
            } else {
                this.setState({user: null})
            }
        })
    }    

    componentDidMount() {
        this.authListener()
    }

    render() {
        return (
            <div>
            {this.state.user ? (<EachFund />) : (<Login />) }
            </div>
        )
    }
}

export default Home