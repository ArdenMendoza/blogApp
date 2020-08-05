import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Blog } from '../model/model';
import { BlogAppState } from '../store/reducer/postReducer';
import { Empty, Card, Space, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { editBlog } from '../store/actions/blogActions';

interface ReduxStateProps {
    selectedBlogPost?: Blog;
}
interface DispatchProps {
    onBlogEdit: (blogPost: Blog) => void;
}

type Props = {

}

const blogPostViewDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { selectedBlogPost, onBlogEdit } = props;
    const IconText = ({ text, onClick }: { text: string, onClick: () => void }) => (
        <Space>
            <Button type="dashed" size={'small'} onClick={onClick} icon={<EditOutlined />}></Button>
        </Space>
    );
    return !selectedBlogPost ? <Empty /> :
        <Card title={selectedBlogPost?.bpTitle}>
            <div>
                <IconText text="Edit" key="list-vertical-star-o" onClick={() => onBlogEdit(selectedBlogPost)} />
            </div>
            <p>
                {selectedBlogPost?.bpContent}
            </p>
        </Card>;
}

export const BlogPostView = connect<ReduxStateProps, DispatchProps, {}, BlogAppState>((state) => ({
    selectedBlogPost: state.selectedBlogPost
}), dispatch => ({
    onBlogEdit: (blogPost: Blog) => dispatch(editBlog(blogPost))
}))(blogPostViewDump);
