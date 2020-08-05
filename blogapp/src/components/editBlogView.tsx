import React from 'react';
import { connect } from 'react-redux';
import { Blog } from '../model/model';
import { IBlogAppState } from '../store/store';
import { Input, Button } from 'antd';
import { editBlogCancel, updateBlog } from '../store/actions/blogActions'
import { BookOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface ReduxStateProps {
    selectedBlogPost?: Blog;
}
interface DispatchProps {
    onSave: (postId: number, title: string, content: string) => void;
    onCancel: () => void;
}

type Props = {

}

const customStyles = {
    spacing: {
        marginRight: '8px',
        marginBottom: '12px'
    } as React.CSSProperties
}

const EditBlogViewDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { selectedBlogPost, onSave, onCancel } = props;

    const [title, setTitle] = React.useState(selectedBlogPost ? selectedBlogPost.bpTitle : '');
    const [content, setContent] = React.useState(selectedBlogPost ? selectedBlogPost.bpContent : '');
    const blogPostId = selectedBlogPost ? selectedBlogPost.blogPostId : -1;

    const isValidChange = (title !== '' && content !== '');

    return <div>
        <Input style={customStyles.spacing} size="large" placeholder="Title" prefix={<BookOutlined />} value={title} onChange={e => setTitle(e.currentTarget.value)} required/>
        <TextArea style={customStyles.spacing} rows={20} value={content} onChange={e => setContent(e.currentTarget.value)} required />
        <Button type="primary" onClick={e => onSave(blogPostId, title, content)} disabled={!isValidChange}>{'Save'}</Button>
        <Button onClick={onCancel}>{'Cancel'}</Button>
    </div>;
}

export const EditBlogPostView = connect<ReduxStateProps, DispatchProps, {}, IBlogAppState>((state) => ({
    selectedBlogPost: state.blogState.selectedBlogPost
}), dispatch => ({
    onSave: (postId: number, title: string, content: string) => dispatch(updateBlog({ postId, title, content })),
    onCancel: () => dispatch(editBlogCancel())
}))(EditBlogViewDump);
