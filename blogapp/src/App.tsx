import React from 'react';
import './App.css';
import { Input, Button, Row, Col } from 'antd';
import { BlogPostView } from './components/blogPostView';
import { BlogListView } from './components/blogListView';
import { FileAddOutlined } from '@ant-design/icons';
import { useSelector, connect } from 'react-redux';
import { BlogAppState } from './store/reducer/postReducer';
import { searchBlog } from './store/actions/blogActions'

const { Search } = Input;

interface ReduxStateProps {
  searchTerm?: string;
}
interface DispatchProps {
  onSearch: (searchText: string) => void;
}

type Props = {

}

const AppDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
  const { onSearch } = props;
  return (
    <div className="App">
      <Button type="primary" icon={<FileAddOutlined />} size={'middle'} />
      <Search
        placeholder={'Search'}
        onSearch={value => onSearch(value)}
        onChange={e => onSearch(e.currentTarget.value)}
        style={{ width: 200 }}
      />
      <Row style={{height: '100%'}}>
        <Col span={12}>
          <BlogListView />
        </Col>
        <Col span={12}>
          <BlogPostView />
        </Col>
      </Row>
    </div>
  );
}

export const App = connect<ReduxStateProps, DispatchProps, {}, BlogAppState>((state) => ({
  searchTerm: state.searchTerm
}), dispatch => ({
  onSearch: (searchText: string) => dispatch(searchBlog(searchText))
}))(AppDump);

export default App;
