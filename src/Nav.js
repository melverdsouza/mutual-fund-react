import React from 'react'
import { Menu, Dropdown, Icon, message } from 'antd';

class Nav extends React.Component {

    render() {
        return (
            <div>
                <h1>Mutual Funds</h1>
                <nav>
                    <ul className='nav-links'>
                        <li>Sort</li>
                        <li>Filter</li>
                        
                    </ul>
                </nav>    
            </div>
            )
    }
}

export default Nav