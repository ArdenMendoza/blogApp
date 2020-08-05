import React from 'react';
import { Input, Button, Row, Col, Modal, Typography } from 'antd';
import { BlogPostView } from './blogPostView';
import { BlogListView } from './blogListView';
import { EditBlogPostView } from './editBlogView';
import { FileAddOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { IBlogAppState } from '../store/store';

import { searchBlog, getBlogs, addBlog } from '../store/actions/blogActions';
import { BookOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';

const { Search, TextArea } = Input;
const { Title } = Typography;

interface ReduxStateProps {
  searchTerm?: string;
  isOnEditMode?: boolean;
}
interface DispatchProps {
  getBlogs: () => void
  onSearch: (searchText: string) => void;
  onPostBlog: (title: string, content: string) => void;
}

type Props = {}

const customStyles = {
  spacing: {
    marginRight: '8px',
    marginBottom: '12px',
    width: '300px'
  } as React.CSSProperties,
  textboxSpacing: {
    marginRight: '8px',
    marginBottom: '12px'
  } as React.CSSProperties
}

const MainPageDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
  const { getBlogs, onSearch, onPostBlog, isOnEditMode } = props;

  // TODO: Remove this here to avoid multiple calls on page rerender
  getBlogs();

  const modalState = {
    visible: false,
    confirmLoading: false,
  };

  const [mState, setMState] = React.useState(modalState);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const postBlog = () => {
    // call action to send title, content to server
    onPostBlog(title, content);
    // hide dialog and reset values
    resetDialog();
  }

  const resetDialog = () => {
    // hide dialog and reset values
    setMState({ ...mState, visible: false });
    setTitle('');
    setContent('');
  }

  return (
    <div style={{ padding: '100px', height: '100%'}}>
      <Title>Blog App</Title>
      <Row style={{ height: '100%', overflow: 'hidden' }}>
        <Col span={12} style={{ paddingRight: '20px' }}>
          <Search
            placeholder={'Search'}
            onSearch={value => onSearch(value)}
            onChange={e => onSearch(e.currentTarget.value)}
            style={customStyles.spacing}
          />
          <Button type="primary" icon={<FileAddOutlined />} size={'middle'} onClick={() => setMState({ ...mState, visible: true })} >{'Create New Blog'}</Button>
          <div>
            <Button type="primary" icon={<SortAscendingOutlined />} size={'middle'} onClick={() => console.log('Sort Ascending')}></Button>
            <Button type="primary" icon={<SortDescendingOutlined />} size={'middle'} onClick={() => console.log('Sort Descending')} ></Button>
          </div>
          <BlogListView />
        </Col>
        <Col span={12} style={{ overflow: 'auto', height: '100%', padding: '10px' }}>
          {
            isOnEditMode ? <EditBlogPostView /> : <BlogPostView />
          }
        </Col>
      </Row>
      <Modal
        title="Create New Blog"
        visible={mState.visible}
        onOk={postBlog}
        okText={'Post'}
        okButtonProps={{ disabled: title === '' || content === '' }}
        onCancel={resetDialog}
        cancelText={'Cancel'}
        confirmLoading={mState.confirmLoading}>
        <Input style={customStyles.textboxSpacing} size="large" placeholder="Title" prefix={<BookOutlined />} value={title} onChange={e => setTitle(e.currentTarget.value)} />
        <TextArea style={customStyles.textboxSpacing} rows={20} value={content} onChange={e => setContent(e.currentTarget.value)} />
      </Modal>
    </div >
  );
}

export const MainPage = connect<ReduxStateProps, DispatchProps, {}, IBlogAppState>((state) => ({
  searchTerm: state.blogState.searchTerm,
  isOnEditMode: state.blogState.isOnEditMode,
}), dispatch => ({
  getBlogs: () => dispatch(getBlogs()),
  onSearch: (searchText: string) => dispatch(searchBlog(searchText)),
  onPostBlog: (title: string, content: string) => dispatch(addBlog({ title, content }))
}))(MainPageDump);

export default MainPage;
