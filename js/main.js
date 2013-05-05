$(function () {
    var library = new Library({ id: 1 });
    var libraryItemView = new LibraryItemView({
        model: library,
        el: $('#content')
    });

    library.fetch();

    // var song = new Song({
    //     name: 'ブレインストーミング',
    //     album: 'ブレインストーミング / 君さえいれば何もいらない',
    //     artist: 'モーニング娘。'
    // });
    // var songList = new SongList();
    // var songListView = new SongListView({
    //     el: $('#song-list'),
    //     collection: songList
    // });

    // songListView.render();
    // songList.add(song);
});