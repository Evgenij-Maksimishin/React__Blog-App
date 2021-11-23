import React from 'react'
import '../BlogPage/BlogPage.css'

function BlogPage() {
    const posts = [
        {
            id: 1,
            title: 'Post 1',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis libero accusantium omnis saepe, et aliquid! Minus magnam consequuntur obcaecati? Omnis, ratione. Ad dolorum dolorem repudiandae unde, natus nihil maxime, aut eligendi doloribus pariatur aliquid reprehenderit magni a esse assumenda?'
        },
        {
            id: 2,
            title: 'Post 2',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis libero accusantium omnis saepe, et aliquid! Minus magnam consequuntur obcaecati? Omnis, ratione. Ad dolorum dolorem repudiandae unde, natus nihil maxime, aut eligendi doloribus pariatur aliquid reprehenderit magni a esse assumenda?'
        },
        {
            id: 3,
            title: 'Post 3',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis libero accusantium omnis saepe, et aliquid! Minus magnam consequuntur obcaecati? Omnis, ratione. Ad dolorum dolorem repudiandae unde, natus nihil maxime, aut eligendi doloribus pariatur aliquid reprehenderit magni a esse assumenda?'
        }
    ]

    const generatePosts = posts.map((item) => {
        return (
            <div className="post" >
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
                    <button>Get amount of posts</button>
                </div>
            </main>
        </>
    )
}

export default BlogPage
