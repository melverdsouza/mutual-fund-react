import React from 'react'
import { Link } from 'react-router-dom'

class Eachcard extends React.Component {
    render() {
        console.log(this.props.fundDetails)
        if(this.props.fundDetails['returns'] !== 'undefined' ) {
            return(
                <div className='each-card'>
                    <Link className='card-link' to={`/funds/${this.props.fundDetails['code']}`}>
                        <p className='fund-name'>{this.props.fundDetails['name']}</p>
                        <p>Category: {this.props.fundDetails['category']}</p>
                        <p>Fund Type: {this.props.fundDetails['fund_type']}</p>
                        <p>Plan: {this.props.fundDetails['plan']}</p>
                        <p>Fund Category: {this.props.fundDetails['fund_category']}</p>
                        {/* <p>{this.props.fundDetails['returns']['year_1']}</p> */}
                        {/* <p>{this.props.fundDetails['returns']['year_1']}</p> */}
                        {/* <p>{this.props.fundDetails['returns']['year_3']}</p> */}
                    </Link>
                </div>
                
            )
        }
    }
}

export default Eachcard