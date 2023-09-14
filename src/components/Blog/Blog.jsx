import PropTypes from 'prop-types';
import { BsBookmark} from 'react-icons/bs';


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { hashtags, reading_time } = blog;
    console.log(blog)
    return (
        <div className='mb-10'>
            <div className="w-full"><img src={blog.cover} alt="" /></div>
            <div className=" flex justify-between items-center">
                <div className=" flex items-center mt-8">
                    <div className='w-16'><img src={blog.author_img} alt="" /></div>
                    <div className='ml-5'>
                        <h2 className=' text-2xl font-semibold'>{blog.author}</h2>
                        <p className=' text-base font-semibold text-gray-400'>{blog.posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <h2 className=' text-xl font-medium text-gray-400 mr-3'>{blog.reading_time} min read</h2>
                    <button onClick={() => handleAddToBookmark(blog)}><BsBookmark></BsBookmark></button>
                </div>
            </div>
            <h2 className=' text-4xl font-semibold mt-4'>{blog.title}</h2>
            <p className=' text-base font-medium text-gray-400 mt-3'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a> #{hash} </a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;