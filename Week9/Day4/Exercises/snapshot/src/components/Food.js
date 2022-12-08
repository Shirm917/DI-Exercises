import React from 'react';
import {createClient} from 'pexels';
import Search from './Search';

const client = createClient("563492ad6f91700001000001766435765cac4dacba632bd9d99fd58b");
const query = "Food";

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        client.photos.search({query,per_page: 30})
        .then(photos => this.setState({photos: photos.photos}))
        .catch(err => console.log(err))
    }

    clearPhotos = () => {
        this.setState({photos: []})
    }

    render() {
        return (
            <>
                <Search clearPhotos={this.clearPhotos}/>    
                <section>
                    <h2>Food Pictures</h2>
                    {
                        this.state.photos.map(photo => {
                            return (
                                <img src={photo.src.tiny} alt={photo.alt} />
                            )
                        })
                    }
                </section>
            </>
        )
    }
}

export default Food;