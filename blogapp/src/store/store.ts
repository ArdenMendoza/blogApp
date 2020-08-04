import { createStore } from 'redux';
import {blogReducer} from './reducer/postReducer';

export const store = createStore(blogReducer);