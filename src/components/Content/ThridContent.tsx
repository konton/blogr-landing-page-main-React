import React, { Component } from 'react'
import desktop from '../../images/illustration-laptop-desktop.svg'
import mobile from '../../images/illustration-laptop-mobile.svg'
const ThridContent = () => {

    return (
        <div className="third">
            <div className="third-con">
                <img src={desktop} className="laptopdesk"></img>
                <img src={mobile} className="laptopmobile"></img>
                <div className="third-con-para">
                    <div className="third-con-para-one">
                        <h3>Free, open, simple</h3>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </div>
                    <div className="third-con-para-two">
                        <h3>Powerful tooling</h3>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.
                    </div>
                </div>

            </div>
        </div>
    )

}

export default ThridContent