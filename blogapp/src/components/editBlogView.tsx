import React from 'react';
import { connect } from 'react-redux';
import { Blog } from '../model/model';
import { BlogAppState } from '../store/reducer/postReducer';
import { Input, Button } from 'antd';
import { editBlogCancel } from '../store/actions/blogActions'
import { BookOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface ReduxStateProps {
    selectedBlogPost?: Blog;
}
interface DispatchProps {
    onSave: (blogPostId: number, title: string, content: string) => void;
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

    return <div>
        <Input style={customStyles.spacing} size="large" placeholder="Title" prefix={<BookOutlined />} value={title} onChange={e => setTitle(e.currentTarget.value)} />
        <TextArea style={customStyles.spacing} rows={20} value={content} onChange={e => setContent(e.currentTarget.value)} />
        <Button type="primary" onClick={e => onSave(blogPostId, title, content)}>{'Save'}</Button>
        <Button onClick={onCancel}>{'Cancel'}</Button>
    </div>;
}

export const EditBlogPostView = connect<ReduxStateProps, DispatchProps, {}, BlogAppState>((state) => ({
    selectedBlogPost: state.selectedBlogPost
}), dispatch => ({
    onSave: (blogPostId: number, title: string, content: string) => console.log('saving...', blogPostId, title, content),
    onCancel: () => dispatch(editBlogCancel())
}))(EditBlogViewDump);
