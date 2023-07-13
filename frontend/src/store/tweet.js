// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';

const POST_TWEET = 'tweet/postTweet'

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadTweets(data));
    return data;
  }
};

//regular action creator
const pushTweet = (tweet) => {
  return {
    type: POST_TWEET,
    tweet
  }
}

export const postTweet = (tweet) => async(dispatch) => {
  const response = await fetch('/api/tweets', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(tweet)
  })

  if(response.ok){

    const data = await response.json()

    dispatch(pushTweet(data))

    return data
  }
}

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TWEET: {
      const newState = {...state}
      if(newState.tweets){
        newState.tweets.push(action.tweet)
      }else{
        newState.tweets = [action.tweet]
      }

      return newState
    }
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    default:
      return state;
  }
};

export default tweetsReducer;