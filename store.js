/* eslint-disable indent */
  
     const bookmarks = [
      {
        id: 'x56w',
        title: 'Title 1',
        rating: 3,
        url: 'http://www.title1.com',
        description: 'lorem ipsum dolor sitsdfsdfas',
        expanded: false
      },
      {
        id: '6ffw',
        title: 'Title 2',
        rating: 5,
        url: 'http://www.title2.com',
        description: 'dolorum tempore deserunt',
        expanded: false
      } 
    ];
  
    let adding = false;
    let error = null;
    let filter = 0;
  
  const findAndUpdate = function (id, newBookMark) {
    const currentBookmark = this.findById(id);
    Object.assign(currentBookmark, newBookMark);
  };  

  const findById = function (id) {
      return bookmarks.find(currentBookmark => currentBookmark.id === id);
  };

  const addBookmark = function (id, title, rating, url, description) {
    return this.bookmarks.push(id, title, rating, url, description);
  };

  const toggleExpandedId = function(id) {
    let bookmark = findById(id);
    bookmark.expanded = !bookmark.expanded;
    return bookmark.expanded;
  };


  const removeBookmark = function(id) {
    return this.bookmarks = this.bookmarks.filter(currentBookmark => currentBookmark.id !== id);
  };

  const setError = function (error) {
    this.error = error;
  };
  

  export default {
    addBookmark,
    toggleExpandedId,
    bookmarks,
    error,
    filter,
    findById,
    adding,
    removeBookmark,
    setError,
    findAndUpdate
  };