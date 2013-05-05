var Library = Backbone.Model.extend({
    urlRoot: '/api/libraries',
    url: function () {
        return this.urlRoot + '/' + this.id + '.json';
    },
    initialize: function () {
    }
});

var LibraryItemView = Backbone.View.extend({
    model: Library,
    initialize: function () {
        _.bindAll(this, 'render');

        console.log('library initialized.');
        this.model.bind('change', this.render);
    },
    render: function () {
        var template = $('#library-template').html();
        var html = _.template(template, this.model.attributes);
        $(this.el).html(html);
    }
});