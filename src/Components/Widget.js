import React from 'react'

const Widget = () => {
    return (
        <div className="widgets">

        {/* Get facebook embed iframe automatically with link below (just get the code and select iframe section) 
        
        https://developers.facebook.com/docs/plugins/page-plugin/ 
        
        */}
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="1500"
                style={{border: "none", overflow: "hidden"}}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media">

            </iframe>
        </div>
    )
}

export default Widget
