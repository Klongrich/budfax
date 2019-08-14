import React from 'react'
import { slide as Menu} from 'react-burger-menu'

class Header extends React.Component{

    render () {
        return (
            <div class="NavBar">
                <Menu>
                  <div class="work"><a id="home" className="menu-item" href="/">Home</a></div>
                  <a id="about" className="menu-item" href="/block-chain">About</a>
                  <a id="travel" className="menu-item" href="/travel">Products</a>
                  <a id="Company beta" className="menu-item" href="/weedscan">Company Beta</a>
                </Menu>
            </div>

        )
    }
}
export default Header;