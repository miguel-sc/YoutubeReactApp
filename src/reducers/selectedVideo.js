const selectedVideo = (state = {}, action) => {
  if (action.type === 'SELECTVIDEO') {
    return action.payload
  }
  return state
}

export default selectedVideo
