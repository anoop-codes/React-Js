import React, { Component } from 'react';
import http from './HttpModule';
import config from './cofig.json';

const endPoint = config["end-Point"];
class PostsCompo extends Component {
    state = {
        posts: [],
        error: '',
        loading: true,
        post: {},
        postId: 1
    }

    componentDidMount() {
        http.get(endPoint).then((res) => {
            const { data: posts } = res;
            this.setState({
                ...this.state,
                posts
            })
        }).catch((error) => {
            this.setState({
                ...this.state,
                error: error.message
            }); console.log(error)
        })
    }

    handleGetPost = () => {
        const { postId } = this.state;
        if (postId !== '') {
            http.get(`${endPoint}/${postId}`).then((res) => {
                const { data: post } = res;
                this.setState({
                    ...this.state,
                    post
                })
            }).catch((error) => this.setState({
                ...this.state,
                error: error.message
            }))
        }
    }

    //there are 2 approch
    /**
     * - optimistic: we first do the action then send the request , it help to render the UI fast,
     * - perismistic approch : we call the api first and then take the action.
     */

    handleDelete = post => {
        const OldPosts = [...this.state.posts];

        const newPost = OldPosts.filter((p) => p.id !== post.id);

        this.setState({
            posts: [...newPost]
        })

        http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`).then((res) => {
            const { data: posts } = res;

        }).catch((error) =>
            console.log(error.message)
        )

    }

    render() {
        return (
            <>
                <div style={{ padding: '10px', margin: '10px' }}>
                    <input type="number" onChange={(e) => this.setState({ postId: e.target.value })} value={this.state.postId} />
                    <button onClick={this.handleGetPost}>getPost</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <button>update</button>
                                </td>
                                <td>
                                    <button onClick={() => this.handleDelete(post)}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default PostsCompo;