import React from 'react';

const json = require("../data.json");

class Example1 extends React.Component {
    constructor() {
        super();
        this.state = {
            socialMedia: json.SocialMedias
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.socialMedia.map(element => {
                        return (
                            <p>{element}</p>
                        )
                    })
                }
            </div>
        )
    }
}

export default Example1;