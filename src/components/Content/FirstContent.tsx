import React from 'react'
import desk from '../../images/illustration-editor-desktop.svg'

const FirstContent = () => {

    return (
        <div className="first">
            <h2>Designed for the future</h2>
            <div className="insidefirst">
                <div className="first-con">
                    <div className="first-con-paraone">
                        <h3>Introducing an extensible editor</h3>
                        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                            change the looks of a blog.</p>
                    </div>
                    <div className="first-con-paratwo">
                        <h3>Robust content management</h3>
                        <p>  Flexible content management enables users to easily move through posts. Increase the usability of your blog
                            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>
                <img src={desk}></img>
            </div>

        </div>
    )

}

export default FirstContent