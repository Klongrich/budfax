import React from 'react'
import "./landingPage.css"

class LandingPage extends React.Component {

    render () {
        return (
            <div class="landing-page-container">
                
                <div class="toppart">
                    <h2>Changing the way consumers verify cannabis</h2>    
                </div>

                <div class="descript">
                    <p> Everyday products are ripped off through 
                        fake labels and lab results. Budfaxs mission is
                        to try and change that be allowing consumers to
                        verify what they are getting is legit. We do this 
                        by adding your data into a QR code that is scanble
                        on any smart phone. This QR code than contains all the 
                        information you want on your product such as Haverst Date, lab 
                        resutls, product owner, etc... 
                    </p>
                </div>

            </div>
        )
    }


}

export default LandingPage;