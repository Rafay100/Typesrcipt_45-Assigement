// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_albums (artist: string, title: string, tracks?: number){
    const album: {artist: string, title: string, tracks?: number} = {
        artist : artist,
        title : title
    }
    if(tracks !== undefined){
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


