import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handelBookmark, handleMarkAsRead }) => {
    const {id, cover, author_img, author, posted_date, reading_time, hashtags, title } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='my-4' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <div>
                        <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    </div>
                    <div>
                        <p className='text-2xl'> {author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center '>
                    <p>{reading_time} min read</p>
                    <button onClick={() =>handelBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-semibold mt-4'>{title}</h2>
            <div className='mt-4'>
                {
                    hashtags.map((hash, idx) => <span className='ml-2 text-blue-400' key={idx}><a href="">#{hash}</a></span>)
                }
            </div>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className='text-2xl text-red-700 underline'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;