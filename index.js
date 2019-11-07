/* eslint-disable indent */
import store from './store.js';
// build render function, manually change and check if still
// works then set buttons and call render to auto populate info

const greaterThanFilter = function(item) {
    return item.rating>=store.filter;
};

const render = function () {
    console.log(store);
    let bookmarks = [...store.bookmarks];
    if(store.filter>0) 
    bookmarks = bookmarks.filter(greaterThanFilter);

    let html;
    if(store.adding) {
        html = generateAddBookmarkHtml();
    }
    else {
    html = bookmarks.map(item => generateBookmarkHtml(item)).join('');
}
if (store.error) 
html = `<div>${store.error}</div>` + html;
$('main').html(html);

};

const generateItemElement = function (item) {
    let itemId = `<div class="item-id">${item.id}`;
    return itemId;
};

const getItemIdFromElement = function (item) {
    return $(item).data('item-id');
};

const handleToggleExpandClick = function () {
    $('main').on('click', '.expand', (e) => {
        const id = getItemIdFromElement(e.currentTarget);
        store.toggleExpandedId(id, true);
        render();
    });
};


const generateBookmarkHtml = function (item) {
    if (item.expanded) {
        let expandedBookmarkHtml = `
    <form class="expanded-bookmarks">
    <div class="title-bar">
        <button class="remove">X</button>
        <legend class="saved-title">${item.title}</legend> 
    </div>

    <div class="link-btn">
        <button type="button" class="url-link">Visit Site${item.url}</button>
    </div>

    <div class="display-rating">${item.rating}</div>
    <div class="description-text">
        <p>${item.description}
        </p>
    </div>
    <div class="expand-button">
        <button type="button" data-item-id='${item.id}' class="expand">Collapse</button>  
    </div>
</form>`;
        return expandedBookmarkHtml;
    }
    else {
        let unexpandedBookmarkHtml = `
    <form class="collapsed-bookmarks">
    <div class="title-bar">
        <button class="remove">X</button>
        <legend class="saved-title">${item.title}</legend>
    </div>
    <div class="expand-button">
        <button type="button" data-item-id='${item.id}' class="expand">Expand</button>  
    </div>
    </form>`;
    return unexpandedBookmarkHtml;
    }
};




const generateAddBookmarkHtml = function () {
    let addBookmarkHtml = `    
     <form id="main-container">
    <label for="name-form">Bookmark Name:</label>
    <input id="name-form" name="name-form" type="text" placeholder="Ex: Cat Tyrants">
        
    <label for="url-form">Bookmark URL:</label>
    <input id="url-form" name="url-form" type="url" placeholder="Ex: www.cat-tyrants.org">

    <legend class="rating-form">Rating:</legend>
        <section class="rating-form">
            <input class="rating" type="radio" id="5star" name="rating" value="5" required/>
                <label for="5star">5 stars</label>
            <input class="rating" type="radio" id="4star" name="rating" value="4" required/>
                <label for="4star">4 stars</label>
            <input class="rating" type="radio" id="3star" name="rating" value="3" required/>
                <label for="3star">3 stars</label>
            <input class="rating" type="radio" id="2star" name="rating" value="2" required/>
                <label for="2star">2 stars</label>
            <input class="rating" type="radio" id="1star" name="rating" value="1" required/>
                <label for="1star">1 stars</label>
        </section>
        

        <label for="description-form">Description:</label><br>
        <textarea id="description-form" name="description-form" type="text" placeholder="Input description here! Example...Website on how cats will overrule the world with an iron paw!"></textarea>
    
    <div class="create-cancel-buttons">    
        <button type="submit" class="add-button">Create</button>
        <button type="button" class="cancel-button">Cancel</button>
    </div>    
</form>
`;
    return addBookmarkHtml;
};

const handleCancelButton = function() {
    $('main').on('click', '.cancel-button', (e) => {
        e.preventDefault();
        console.log('cancel button working?');
        store.adding = false;
        render();
    });
};

const handleAddBookmark = function () {
    $('.new-filter-buttons').on('click', '.add-new', (e) => {
        e.preventDefault();
        console.log('add button working');
        store.adding = true;
        render();
    });
};
handleToggleExpandClick();
handleCancelButton();
handleAddBookmark();
render();