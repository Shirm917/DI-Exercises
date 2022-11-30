import React from 'react';

const json = require("../data.json");

class Example3 extends React.Component {
    constructor() {
        super();
        this.state = {
            experiences: json.Experiences
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.experiences.map(element => {
                        return (
                            <div key={element.companyName}>
                                <img src={element.logo} />
                                <h1>{element.companyName}</h1>
                                <p>{element.roles[0].title}</p>
                                <span>{element.roles[0].startDate}</span>
                                <span>{element.roles[0].location}</span>
                                <p>{element.roles[0].description}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Example3;