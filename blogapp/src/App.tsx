import React from 'react';
import './App.css';
import { Input, Button } from 'antd';
import { BlogPostView } from './components/blogPostView';
import { BlogListView } from './components/blogListView';
import { FileAddOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { BlogAppState } from './store/reducer/postReducer';
import { Blog } from './model/model';

const { Search } = Input;

function App() {
  const blogs = useSelector<BlogAppState, BlogAppState['blogs']>((state) => state.blogs)

  return (
    <div className="App">
      <Button type="primary" icon={<FileAddOutlined />} size={'middle'} />
      <Search
        placeholder={'Search'}
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <BlogListView />
      <BlogPostView />
    </div>
  );
}

export default App;
