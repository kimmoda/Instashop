import values from 'lodash/values';

export const listPosts = (state) => (
  values(state.posts.posts)
);

export const listFollowedUser = (state) => (
  values(state.user.targetUser.followed_users)
);

export const listFollowers = (state) => (
  values(state.user.targetUser.followers)
);
