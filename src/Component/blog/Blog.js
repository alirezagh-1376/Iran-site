import './Blog.css'
import BlogItem from './BlogItem';
import blogImg1 from '../../Assets/images/post-1.jpg';
import blogImg2 from '../../Assets/images/post-2.jpg';
import blogImg3 from '../../Assets/images/post-3.jpg';

function Blog(){
    let blogs=[
        {
            blogImg : blogImg1,
            blogTitle :'post title1',
            bloginfo :'1Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
            blogAuthor :'alireza ghadyani',
            blogTime:'5',

        },
        {
            blogImg : blogImg2,
            blogTitle :'post title1',
            bloginfo :'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
            blogAuthor :'milad azizi',
            blogTime:'10',

        },
        {
            blogImg : blogImg3,
            blogTitle :'post title1',
            bloginfo :'3Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
            blogAuthor :'hasan jafari',
            blogTime:'8',

        },
    ]
    return(
<section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
         <BlogItem{...blogs[0]}/>
          <BlogItem{...blogs[1]}/>
           <BlogItem{...blogs[2]}/>
        </div>
      </div>
    </section>
    )
}
export default Blog;
