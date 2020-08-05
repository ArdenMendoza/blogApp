import React from 'react';
import './App.css';
import { Input, Button, Row, Col } from 'antd';
import { BlogPostView } from './components/blogPostView';
import { BlogListView } from './components/blogListView';
import { EditBlogPostView } from './components/editBlogView'
import { FileAddOutlined } from '@ant-design/icons';
import { useSelector, connect } from 'react-redux';
import { BlogAppState } from './store/reducer/postReducer';
import { searchBlog } from './store/actions/blogActions'

const { Search } = Input;

interface ReduxStateProps {
  searchTerm?: string;
  isOnEditMode?: boolean;
}
interface DispatchProps {
  onSearch: (searchText: string) => void;
}

type Props = {

}

const customStyles = {
  spacing: {
    marginRight: '8px',
    marginBottom: '12px',
    width: '300px'
  } as React.CSSProperties
}

const AppDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
  const { onSearch, isOnEditMode } = props;
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
          <Button type="primary" icon={<FileAddOutlined />} size={'middle'} />
          <BlogListView />
        </Col>
        <Col span={12}>
          {
            isOnEditMode ? <EditBlogPostView /> : <BlogPostView />
          }
        </Col>
      </Row>
    </div >
  );
}

export const App = connect<ReduxStateProps, DispatchProps, {}, BlogAppState>((state) => ({
  searchTerm: state.searchTerm,
  isOnEditMode: state.isOnEditMode,
}), dispatch => ({
  onSearch: (searchText: string) => dispatch(searchBlog(searchText))
}))(AppDump);

export default App;
