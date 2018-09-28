import { createStore } from 'redux';
import moviesApp from './reducers/reducers';

const initialState = {
  movies: [
    { title: 'Resident Evil', year: '2001', isEditing: false },
    { title: 'Exterminio', year: '2001', isEditing: false },
    { title: 'Matrix', year: '2003', isEditing: false },
  ],
};

const store = createStore(moviesApp, initialState);

export default store;
