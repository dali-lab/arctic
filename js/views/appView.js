function AppView() {

    this.showView = function(view) {
        if (this.currentView) {
            this.currentView.$el.hide();
        }

        this.currentView = view;
        $("#content").html(this.currentView.el);
        $("#content").width("100%");
        this.currentView.render();
        this.currentView.$el.show();
    }

}
