import sections from '../config/Sections.json';

const initialState = {
  allArticles: [],
  filteredArticles: [],
  currentArticle: {},
  sections: sections,
};

//constants
const SET_ALL_ARTICLES = 'SET_ALL_ARTICLES';
const SET_FILTERED_ARTICLES = 'SET_FILTERED_ARTICLES';
const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';

//reducer
const articleReducer = (prevState = initialState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case SET_ALL_ARTICLES:
      nextState.allArticles = action.allArticles;
      break;
    case SET_FILTERED_ARTICLES:
      nextState.filteredArticles = action.filteredArticles;
      break;
    case SET_CURRENT_ARTICLE:
      nextState.currentArticle = action.currentArticle;
      break;
    default:
      return prevState;
  }
  return nextState;
}

//action-creators
export const setAllArticles = allArticles => ({
  type: SET_ALL_ARTICLES,
  allArticles
});

export const setFilteredArticles = filteredArticles => ({
  type: SET_FILTERED_ARTICLES,
  filteredArticles
});

export const setCurrentArticle = currentArticle => ({
  type: SET_CURRENT_ARTICLE,
  currentArticle
});


export default articleReducer;
