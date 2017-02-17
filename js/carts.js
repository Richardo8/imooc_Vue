var vm = new Vue({
    el: "#app",
    data: {
        title: "hello Vue"
    },
    filters: {

    },
    mounted: function () {
        this.cartView()
    },
    methods: {
        cartView: function () {
            this.title = "Vue Hello"
        }
    }
})

