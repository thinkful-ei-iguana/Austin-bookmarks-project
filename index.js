/* eslint-disable indent */
// build render function, manually change and check if still
// works then set buttons and call render to auto populate info
const render = function() {
       let bookmarks = [...store.bookmarks];
}


// const addBookmark = function() {
//     let addBookmarkHtml = `    
//      <form id="main-container">
//     <label for="name-form">Bookmark Name:</label><br>
//     <input id="name-form" name="name-form" type="text" placeholder="Ex: Cat Tyrants">
        
//     <label for="url-form">Bookmark URL:</label><br>
//     <input id="url-form" name="url-form" type="url" placeholder="Ex: www.cat-tyrants.org">

//     <legend class="rating-form">Rating:</legend>
//         <section class="rating-form">
//             <input class="rating" type="radio" id="5star" name="rating" value="5" required/>
//                 <label for="5star">5 stars</label>
//             <input class="rating" type="radio" id="4star" name="rating" value="4" required/>
//                 <label for="4star">4 stars</label>
//             <input class="rating" type="radio" id="3star" name="rating" value="3" required/>
//                 <label for="3star">3 stars</label>
//             <input class="rating" type="radio" id="2star" name="rating" value="2" required/>
//                 <label for="2star">2 stars</label>
//             <input class="rating" type="radio" id="1star" name="rating" value="1" required/>
//                 <label for="1star">1 stars</label>
//         </section>
//         <br>

//         <label for="description-form">Description:</label><br>
//         <textarea id="description-form" name="description-form" type="text" placeholder="Input description here! Example...Website on how cats will overrule the world with an iron paw!"></textarea>
    
//     <div class="create-cancel-buttons">    
//         <button type="submit" class="add-button">Create</button>
//         <button type="button" class="cancel-button">Cancel</button>
//     </div>    
// </form>
// `;

// $('.new-filter-buttons').on('click', '.add-new', (e) => {
//     e.preventDefault();
//     console.log('add button working');
//     $('button').html(addBookmarkHtml);
// });
// }