import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { cover, author_img, author, posted_date, reading_time, hashtags, title} = blog;
    return (
        <div>
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
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span className='ml-2 text-blue-400' key={idx}><a href="">#{hash}</a></span>)
            }
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;