import React from 'react';
import {createClient} from 'pexels';

const client = createClient("563492ad6f91700001000001766435765cac4dacba632bd9d99fd58b");

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            query: ""
        }
    }

    getPhotos= () => {
        this.props.clearPhotos();
        const {query} = this.state;
        client.photos.search({query,per_page: 30})
        .then(photos => this.setState({photos: photos.photos}))
        .catch(err => console.log(err))
    }

    getQuery = (event) => {
        this.setState({query: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.getQuery} placeholder="Search..."/>
                <button onClick={this.getPhotos}>Search</button>
                <section>
                    {this.state.photos.length > 0 ? <h2>{this.state.query} Pictures</h2> : <h2></h2>}
                    {
                        this.state.photos.map(photo => {
                            return (
                                <img src={photo.src.tiny} alt={photo.alt} />
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}

export default Search;