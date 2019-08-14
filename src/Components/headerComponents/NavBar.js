import React from 'react'
import './header.css'
import { slide as Menu} from 'react-burger-menu'

class Header extends React.Component{

    render () {
        return (
            <div class="NavBar">
                <Menu>
                  <div class="work"><a id="home" className="menu-item" href="/">UserClient</a></div>
                  <a id="about" className="menu-item" href="/growerClient">GrowerClient</a>
                  <a id="travel" className="menu-item" href="/">Node.js</a>
                  <a id="Company beta" className="menu-item" href="/">Company Beta</a>
                </Menu>
            </div>

        )
    }
}
export default Header;