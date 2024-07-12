
import "./BlogViews.css"
import { useParams } from "react-router-dom";
import blogs from "../../data";

function BlogViews() {

  const {id} = useParams()

  const selectedBlog = blogs.find((blogobject)=> blogobject.id===id)
 

  return (
    <div>
      <h1>{selectedBlog.title}</h1>
      <p>
      <img src={selectedBlog.avatar} height={"40px"}/>
        {selectedBlog.author.name} : {selectedBlog.date}
      </p>
      {selectedBlog.content}
      </div>
  )
}

export default BlogViews