import React from 'react';

const json = require("../data.json");

class Example2 extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: json.Skills
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.skills.map(element => {
                        return (
                            <div>
                                <h1>{element.Area}</h1>
                                {
                                    element.SkillSet.map(element => {
                                        return (
                                            <>
                                                <p>{element.Name}</p>
                                                <p>{element.Hot}</p>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Example2;