import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Blog } from '../model/model';
import { List } from 'antd';
import { BlogAppState } from '../store/reducer/postReducer';

interface ReduxStateProps {
    blogs: Blog[]
}
interface DispatchProps {
}

type Props = {

}

const blogListViewDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { blogs } = props;
    return (
        <List
            itemLayout='vertical'
            size='large'
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3
            }}
            loading={blogs.length === 0}
            dataSource={blogs}
            renderItem={(item: Blog) => (
                <List.Item
                    key={item.bpTitle}
                    actions={[
                        // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    {/* <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            /> */}
                    {item.bpContent}
                </List.Item>
            )}
        />
    )
}

export const BlogListView = connect<ReduxStateProps, {}, {}, BlogAppState>((state) => ({
    blogs: state.blogs
}), dispatch => ({
    
}))(blogListViewDump);
