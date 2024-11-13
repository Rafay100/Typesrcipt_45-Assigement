"use strict";
function make_albums(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_albums('Artist 1', 'Album Title 1');
console.log(album1);
const album2 = make_albums('Artist 2', 'Album Title 2');
console.log(album2);
const album3 = make_albums('Artist 3', 'Album Title 3', 12);
console.log(album3);
