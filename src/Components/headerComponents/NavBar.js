import React from 'react'
import './header.css'
import { slide as Menu} from 'react-burger-menu'

class Header extends React.Component{

    render () {
        return (

            <div class="NavBar">
                <Menu>
                  <div class="work"><a id="home" className="menu-item" href="/">UserClient</a></div>
                  <a id="about" className="menu-item" href="/datasubmissiontest"> Node.js</a>
                  <a id="dataEntryTest" className="menu-item" href="/dataEntryTest"> dataEntryTest</a>
                  <a id="growerEntryScript" className="menu-item" href="/growerEnteryScript"> dataEntryScript</a>
                  <a id="Product Card" className="product-card" href="/ProductCard">Product Card </a>
                </Menu>
            </div>

        )
    }
}
export default Header;