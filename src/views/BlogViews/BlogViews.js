
import "./BlogViews.css"
import { useParams } from "react-router-dom";
import blogs from "../../data";

function BlogViews() {

  const {id} = useParams()

  const selectedBlog = blogs.find((blogobject)=> blogobject.id===id)
 

  return (
    <div className="detail-container">
      <h1 className="title">{selectedBlog.title}</h1>
      <p className="author-card">
      <img src={selectedBlog.author.avatar}  className="author-avatar"/>
        {selectedBlog.author.name} : {selectedBlog.date}
      </p>
      {selectedBlog.content}
      </div>
  )
}

export default BlogViews