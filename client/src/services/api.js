import axios from "./axios"

export const userLogin = async (username, password) => {
  const res = await axios.post('/api/login', {
    username: username,
    password: password
  })
  return res
}

export const getDiscussionPostList = async (courseId) => {
  const res = await axios.get(`/api/courses/${courseId}/discussion-posts`)
  return res
}


export const getDiscussionPostDetails = async (courseId, postId) => {
  const res = await axios.get(`/api/courses/${courseId}/discussion-posts/${postId}`)
  return res.data.discussionPosts[0]
}

