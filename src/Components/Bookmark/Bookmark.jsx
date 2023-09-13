
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-100 m-4 p-2 rounded-lg'>
            <p>{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;