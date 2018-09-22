import React from 'react';
import { Link} from 'react-router';
import CSStransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    render() {
        const {post, i, comments} = this.props;
        return (
            <figure className='grid-figure'>
                <div className='grid-photo-wrap'>
                    <Link to={`/view/{${post.code}}`}>
                        <img src={post.display_src} alt={post.caption} className='grid-photo'/>
                    </Link>
                    <CSStransitionGroup 
                    transitionName='like'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                    <span key={post.likes} className='likes-heart'>{post.likes}</span>
                    </CSStransitionGroup>
                </div>
                <figcaption>
                    {post.caption}
                    <div className='control-buttons'>
                        <button onClick={this.props.increment.bind(null, i)} className='likes'>&hearts; {post.likes}</button>
                        <Link className='button' to={`/view/${post.code}`}>
                            <span className='comment-count'>
                                <span className='speech-bouble'></span>
                                {comments[post.code] ? comments[post.code].lenght : 0}

                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
            
        )
    }
})

export default Photo;