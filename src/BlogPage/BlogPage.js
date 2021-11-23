import React from 'react'
import '../BlogPage/BlogPage.css'
import { posts } from '../shared/BlogData'
import { getAmountOfPosts } from '../shared/ProjectLogic.js'

function BlogPage() {
    const generatePosts = posts.map((item) => {
        return (
            <div key={item.id} className="post" >
                <h2>{item.title}</h2>
                <p>
                    {item.description}
                </p>
            </div>
        )
    })


    return (
        <>
            <main>
                <h1>Simple Blog</h1>
                {generatePosts}
                <div className="count" style={{ textAlign: "center" }}>
                    <button onClick={() => getAmountOfPosts(posts)}>Get amount of posts</button>
                </div>
            </main>
        </>
    )
}

export default BlogPage
