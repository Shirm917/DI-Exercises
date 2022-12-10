import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import { deletePost } from '../actions/postActions';
import { useParams } from 'react-router-dom';

const Post = (props) => {
    let {post_id} = useParams();
    const post = props.posts.find(post => post.id === post_id)

    const handleClick = () => {
        props.deletePost(post.id);
    }
    return (
        <div className="container">
            {
                !post ? <h1 className="center">Loading...</h1> :
                <>
                    <div className="post">
                        <h4 className="center">{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                    <div className="center">
                        <Link to="/"><button onClick={handleClick}>Delete Post</button></Link>
                    </div>
                </>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);