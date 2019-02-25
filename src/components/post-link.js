import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path} style={{color: 'black', textDecoration: 'inherit'}}>
      <h2 style={{display: 'inline', color: '#31b6e9'}}>{post.frontmatter.title}</h2> 
      <p style={{display: 'inline'}}> ({post.frontmatter.date})</p>
    </Link>
  </div>
)

export default PostLink