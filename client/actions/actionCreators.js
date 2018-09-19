// increment
export function increment( index ) {
    return {
        type: 'INCREMENT_LIKES',
        index   // index: index - if not es6
    }
}

// add comment
export function addComment (postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment (postId, i) {
    type: 'REMOVE_COMMENT',
    postId,
    i
}