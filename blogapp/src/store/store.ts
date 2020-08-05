import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import { blogReducer, IBlogState } from './reducer/postReducer';
import { FetchBlogsEpic, AddBlogEpic, UpdateBlogEpic} from './epic/blogEpic';
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';

export interface IBlogAppState {
    blogState: IBlogState;
}

export type IBlogAppEpic<T extends Action<any>> = Epic<T, any, IBlogAppState>;

const configureEpic = () => {
    return combineEpics(FetchBlogsEpic, AddBlogEpic, UpdateBlogEpic);
}

const configureReducer = () =>
    combineReducers<IBlogAppState>({
        blogState: blogReducer
    });

export default function configureStore() {
    const rootEpic = configureEpic();
    const epicMiddleware = createEpicMiddleware<any, any, IBlogAppState, any>();
    const middleware = applyMiddleware(epicMiddleware);

    const composeEnhancers =
        typeof window === 'object' &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const enhancer = composeEnhancers(
        middleware,
        // other store enhancers if any
    );

    const store = createStore(configureReducer(), enhancer);
    epicMiddleware.run(rootEpic);
    return store;
};