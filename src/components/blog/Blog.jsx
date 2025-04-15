import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Effective Strength Training",
      content: "Strength training is essential for building muscle and improving overall fitness. Here are 5 tips to get started...",
      author: "John Doe",
      date: "October 1, 2023",
    },
    {
      id: 2,
      title: "The Benefits of Cardio Workouts",
      content: "Cardio workouts are great for heart health and burning calories. Learn how to incorporate them into your routine...",
      author: "Jane Smith",
      date: "October 5, 2023",
    },
    {
      id: 3,
      title: "Nutrition Tips for Fat Loss",
      content: "Proper nutrition is key to losing fat effectively. Here are some tips to help you achieve your goals...",
      author: "Emily Johnson",
      date: "October 10, 2023",
    },
  ];

  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="blog-meta">
              <span>By {post.author}</span> | <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
