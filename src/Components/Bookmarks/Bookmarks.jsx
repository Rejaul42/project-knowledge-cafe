import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-full bg-slate-200 text-center">
            <p className='text-2xl m-4 p-2 rounded-lg font-semibold bg-purple-400'>Reading Time : {readingTime}</p>
            <h3 className='text-center my-4 text-2xl'>Bookmarked: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;