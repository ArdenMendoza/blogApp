import React from 'react';
import { connect } from 'react-redux';
import { Blog } from '../model/model';
import { IBlogAppState } from '../store/store';

import { Empty, Card, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { editBlogButtonClicked, deleteBlog } from '../store/actions/blogActions';

const { Meta } = Card;

interface ReduxStateProps {
    selectedBlogPost?: Blog;
}
interface DispatchProps {
    onBlogEdit: (blogPost: Blog) => void;
    onBlogDelete: (blogId: number) => void;
}

type Props = {

}

const BlogPostViewDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { selectedBlogPost, onBlogEdit, onBlogDelete } = props;
    const IconText = ({ type, onClick }: { type: 'Edit' | 'Delete', onClick: () => void }) => (
        <Space>
            <Button type={'ghost'} size={'small'} onClick={onClick} icon={type === 'Edit' ? <EditOutlined /> : <DeleteOutlined />}>{type === 'Edit' ? 'Edit' : 'Delete' }</Button>
        </Space>
    );
    const [modalState, setModalState] = React.useState({ visible: false, confirmLoading: false });
    const deleteBlog = (blogId: number) => {
        onBlogDelete(blogId);
        closeDialog();
    }

    const openDialog = () => setModalState({ ...modalState, visible: true })
    const closeDialog = () => setModalState({ ...modalState, visible: false })

    return !selectedBlogPost ? <Empty /> :
        <Card title={selectedBlogPost?.bpTitle}>
            <div>
                <IconText type={'Edit'} key="list-vertical-star-o" onClick={() => onBlogEdit(selectedBlogPost)} />
                <IconText type={'Delete'} key="list-vertical-star-o" onClick={() => openDialog()} />
            </div>
            <div style={{ flex: 1, flexDirection: 'row' }}>
                {/* {selectedBlogPost?.bpContent} */}
                <img alt={''} src={'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'} width={'100%'}/>
            </div>
            <Meta style={{ marginTop: '20px' }} title={selectedBlogPost?.blogDateTime} description={selectedBlogPost?.bpContent} />
            <Modal
                title="Delete Blog"
                visible={modalState.visible}
                onOk={() => deleteBlog(selectedBlogPost?.blogPostId)}
                onCancel={closeDialog}
                confirmLoading={modalState.confirmLoading}>
                    <p>{'Are you sure you want to delete blog: ' + selectedBlogPost?.bpTitle +'?'}</p>
            </Modal>
        </Card>;
}

export const BlogPostView = connect<ReduxStateProps, DispatchProps, {}, IBlogAppState>((state) => ({
    selectedBlogPost: state.blogState.selectedBlogPost
}), dispatch => ({
    onBlogEdit: (blogPost: Blog) => dispatch(editBlogButtonClicked(blogPost)),
    onBlogDelete: (blogId: number) => dispatch(deleteBlog(blogId))
}))(BlogPostViewDump);
