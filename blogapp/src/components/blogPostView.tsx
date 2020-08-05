import React from 'react';
import { connect } from 'react-redux';
import { Blog } from '../model/model';
import { IBlogAppState } from '../store/store';

import { Empty, Card, Space, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { editBlog } from '../store/actions/blogActions';

const { Meta } = Card;

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
            <div style={{ flex: 1, flexDirection: 'row' }}>
                {/* {selectedBlogPost?.bpContent} */}
                <img alt={''} src={'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'}/>
            </div>
            <Meta style={{marginTop: '20px'}} title={selectedBlogPost?.bpTitle} description={selectedBlogPost?.bpContent} />
        </Card>;
}

export const BlogPostView = connect<ReduxStateProps, DispatchProps, {}, IBlogAppState>((state) => ({
    selectedBlogPost: state.blogState.selectedBlogPost
}), dispatch => ({
    onBlogEdit: (blogPost: Blog) => dispatch(editBlog(blogPost))
}))(blogPostViewDump);
