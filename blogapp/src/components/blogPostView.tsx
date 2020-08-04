import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Blog } from '../model/model'

export class BlogPostView extends Component {
    render() {
        return (
            <div>
                Blog view
            </div>
        )
    }
}

const mapStateToProps = (state: Blog) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostView)
