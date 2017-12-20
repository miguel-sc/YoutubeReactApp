const selectedVideoStats = (state = {}, action) => {
  if (action.type === 'SELECTVIDEO_STATS') {
    return action.payload
  }
  return state
}

export default selectedVideoStats
