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
    console.log(this);
      return bookmarks.find(bookmark => bookmark.id === id);
  };

  const setExpandedId = function(id, isExpanded) {
    let bookmark = findById(id);
    bookmark.expanded = isExpanded;
    return isExpanded;
  };

  const toggleExpanded = function (id, isExpanded) {
    isExpanded = !isExpanded;
  };

  // const findAndUpdate = function (id, newData) {
  //   const bookmark = this.findById(id);
  //   Object.assign(bookmark, newData);
  // };

  const findAndDelete = function(id) {
    this.bookmarks= this.bookmarks.filter(bookmark => bookmark.id !== id)
  };
  

  export default {
    toggleExpanded,
    bookmarks,
    error,
    filter,
    findById,
    adding,
    findAndDelete,
    setExpandedId
  };