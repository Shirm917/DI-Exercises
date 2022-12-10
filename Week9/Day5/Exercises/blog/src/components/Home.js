import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import blog from '../blog.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props);
        return (
            <div className="container home">
                <h1 className="center">Home</h1>
                {
                    this.props.posts.length === 0 ? <h1 className="center">No posts to show</h1>
                    :
                    this.props.posts.map(post => [
                        <Link to={`/post/${post.id}`} key={post.id}>
                            <div className="post card">
                                <img src={blog} alt="blog" />
                                <h4 className="card-title red-text">{post.title}</h4>
                                <p>{post.body}</p>
                            </div>
                        </Link>
                    ])
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);