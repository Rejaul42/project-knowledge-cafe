
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const handelBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove item
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs 
        handelBookmark={handelBookmark}
        handleMarkAsRead={handleMarkAsRead}
        >Blogs</Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
