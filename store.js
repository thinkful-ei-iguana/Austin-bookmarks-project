/* eslint-disable indent */
  
     const bookmarks = [
      {
        id: 'x56w',
        title: 'Title 1',
        rating: 3,
        url: 'http://www.title1.com',
        description: 'lorem ipsum dolor sitasdfsdfdsafsadfdsafasdfdsafadsfadsfadsfadsfsadfasd<br>fadsfsadfasdfasdfadsfsdfsdfas',
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
  

  const findById = function (id) {
      return bookmarks.find(currentBookmark => currentBookmark.id === id);
  };

  const toggleExpandedId = function(id) {
    let bookmark = findById(id);
    bookmark.expanded = !bookmark.expanded;
    return bookmark.expanded;
  };

  // const findBookmark = function (id) {
  //   const currentBookmark = this.findById(id);
  // };

  const removeBookmark = function(id) {
    this.bookmarks = this.bookmarks.filter(currentBookmark => currentBookmark.id !== id)
  };
  

  export default {
    toggleExpandedId,
    bookmarks,
    error,
    filter,
    findById,
    adding,
    removeBookmark
  };