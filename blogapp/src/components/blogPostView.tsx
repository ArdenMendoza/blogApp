import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Blog } from '../model/model';
import { BlogAppState } from '../store/reducer/postReducer';
import { Empty, Card } from 'antd';


interface ReduxStateProps {
    selectedBlogPost?: Blog;
}
interface DispatchProps {
}

type Props = {

}

const blogPostViewDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { selectedBlogPost } = props;
    return !selectedBlogPost ? <Empty /> :
        <Card title={selectedBlogPost?.bpTitle}>
            <p>
                {selectedBlogPost?.bpContent}
            </p>
        </Card>;
}

export const BlogPostView = connect<ReduxStateProps, DispatchProps, {}, BlogAppState>((state) => ({
    selectedBlogPost: state.selectedBlogPost
}), dispatch => ({

}))(blogPostViewDump);
