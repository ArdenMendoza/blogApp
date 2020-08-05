import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Blog } from '../model/model';
import { List, Space, Button } from 'antd';
import { BlogAppState } from '../store/reducer/postReducer';
import { selectBlog } from '../store/actions/blogActions';

interface ReduxStateProps {
    blogs: Blog[];
    searchTerm?: string;
    selectedBlogPost?: Blog;
}
interface DispatchProps {
    onBlogClick: (blogPost: Blog) => void;
}

type Props = {

}

const blogListViewDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { blogs, searchTerm, onBlogClick } = props;

    const getFiltered = (searchTerm: string) => blogs.filter(f => {
        return f.bpContent.includes(searchTerm) || f.bpTitle.includes(searchTerm);
    });

    return (
        <List
            itemLayout='vertical'
            size='large'
            pagination={{
                onChange: page => {},
                pageSize: 2
            }}
            loading={blogs.length === 0}
            dataSource={searchTerm ? getFiltered(searchTerm) : blogs}
            renderItem={(item: Blog) => (
                <List.Item
                    key={item.bpTitle}
                    className={'blogListItem'}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                    onClick={e => onBlogClick(item)}
                >
                    <List.Item.Meta title={<a href={item.bpTitle} style={{ marginLeft: '10px' }}>{item.bpTitle}</a>} />
                </List.Item>
            )}

        />
    )
}

export const BlogListView = connect<ReduxStateProps, DispatchProps, {}, BlogAppState>((state) => ({
    blogs: state.blogs,
    searchTerm: state.searchTerm,
    selectedBlogPost: state.selectedBlogPost
}), dispatch => ({
    onBlogClick: (blogPost: Blog) => dispatch(selectBlog(blogPost))
}))(blogListViewDump);
