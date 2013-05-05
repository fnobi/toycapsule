var Song = Backbone.Model.extend({});

var SongView = Backbone.View.extend({
    events: {
    },
    initialize: function (options) {
    },
    render: function () {
        var template = $('#song-template').html();
        var html = _.template(template, this.model.attributes);
        $(this.el).html(html);
    }
});

var SongList = Backbone.Collection.extend({
    model: Song
});

var SongListView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, 'appendItem');
        this.collection.bind('add', this.appendItem);
    },
    appendItem: function (model) {
        var view = new SongView({ model: model });
        view.render();
        $(this.el).append(view.el);
    }
});