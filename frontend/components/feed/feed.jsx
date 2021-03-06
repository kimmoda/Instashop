import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import PostIndexItem from '../post_index_item/post_index_item_container';

class Feed extends React.Component {
	constructor(props) {
		super(props);
		this.selectPosts = this.selectPosts.bind(this);
		this.userProfile = this.userProfile.bind(this);
  }

	componentWillMount() {

	}

  componentDidMount() {
		this.props.fetchUsers();
    this.props.fetchPosts();
		this.props.fetchUser(this.props.targetUserId);
  }

	userProfile(user_id) {
		hashHistory.push(`/users/${user_id}`);
	}

	link(linkId) {

		return `/users/${linkId}`;
	}


	selectPosts(posts) {
		// debugger;
		if (posts && this.props.following) {
			return (
				posts.filter( (post) => (
					this.props.following[post.user_id]
					)
				)
			);
		} else {
			return [];
		}
	}

	shuffle(posts) {
    for (let i = posts.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = posts[i];
        posts[i] = posts[j];
        posts[j] = temp
    }
    return posts;
}

  render() {

		let posts = this.selectPosts(this.props.posts).reverse();

    return (
			<div className="profile-div-row">
				{posts.map( (post, i) => (
					<div key={i} className="feed-post-rel">
						<PostIndexItem  post={post} />
						<div className="feed-post-abs">
							<div className="feed-post-prof-img">
								<img
									src={post.user_image_url}
									className="feed-img"
									onClick={ () => this.userProfile(post.user_id) }
									/>
							</div>
							<div className="feed-post-link-prof">
								<Link to={this.link(post.user_id)} className="username-link-feed" >{post.username}</Link>
							</div>
						</div>
					</div>
				) )}
			</div>
    );
  }
}

export default Feed;
