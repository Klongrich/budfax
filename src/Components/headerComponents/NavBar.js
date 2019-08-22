import React from 'react'
import './header.css'
import { slide as Menu} from 'react-burger-menu'

class Header extends React.Component{

    render () {
        return (

            <div class="NavBar">
                <Menu>
                  <div class="work"><a id="home" className="menu-item" href="/">UserClient</a></div>
                  <a id="about" className="menu-item" href="/dataEntryTest"> GrowerClient</a>
                  <a id="landing Page" className="lading page" href="/landingPage">Landing Page</a>
                  <a id="dataEntryTest" className="menu-item" href="/growerEnteryScript"> dataEntryTest</a>
                  <a id="userSignUpTest" className="signUpTest" href="/userSignUpTest">userSignUpTest</a>
                  <a id="Product Card" className="product-card" href="/ProductCard">Product Card</a>
                </Menu>
            </div>

        )
    }
}
export default Header;