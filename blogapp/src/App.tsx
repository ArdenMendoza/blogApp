import React from 'react';
import './App.css';
import { Input, Button, Row, Col, Modal } from 'antd';
import { BlogPostView } from './components/blogPostView';
import { BlogListView } from './components/blogListView';
import { EditBlogPostView } from './components/editBlogView';
import { FileAddOutlined } from '@ant-design/icons';
import { useSelector, connect } from 'react-redux';
import { BlogAppState } from './store/reducer/postReducer';
import { searchBlog } from './store/actions/blogActions';
import { BookOutlined } from '@ant-design/icons';

const { Search, TextArea } = Input;

interface ReduxStateProps {
  searchTerm?: string;
  isOnEditMode?: boolean;
}
interface DispatchProps {
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

const AppDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
  const { onSearch, onPostBlog, isOnEditMode } = props;

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
    <div className="App">

      <Row style={{ height: '100%' }}>
        <Col span={12}>
          <Search
            placeholder={'Search'}
            onSearch={value => onSearch(value)}
            onChange={e => onSearch(e.currentTarget.value)}
            style={customStyles.spacing}
          />
          <Button type="primary" icon={<FileAddOutlined />} size={'middle'} onClick={() => setMState({ ...mState, visible: true })} >{'Create New Blog'}</Button>
          <BlogListView />
        </Col>
        <Col span={12}>
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
        onCancel={resetDialog}
        cancelText={'Cancel'}
        confirmLoading={mState.confirmLoading}>
        <Input style={customStyles.textboxSpacing} size="large" placeholder="Title" prefix={<BookOutlined />} value={title} onChange={e => setTitle(e.currentTarget.value)} />
        <TextArea style={customStyles.textboxSpacing} rows={20} value={content} onChange={e => setContent(e.currentTarget.value)} />
      </Modal>
    </div >
  );
}

export const App = connect<ReduxStateProps, DispatchProps, {}, BlogAppState>((state) => ({
  searchTerm: state.searchTerm,
  isOnEditMode: state.isOnEditMode,
}), dispatch => ({
  onSearch: (searchText: string) => dispatch(searchBlog(searchText)),
  onPostBlog: (title: string, content: string) => console.log(title, content)
}))(AppDump);

export default App;
