var vm = new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList: []
    },
    filters: {
        formatMoney: function (value) {
           return  "￥" + value.toFixed(2);
        }
    },
    mounted: function () {
        this.cartView()
    },
    methods: {
        cartView: function () {
            let _this = this;
            this.$http.get("cartData.json").then((res) => {
                _this.totalMoney = res.body.result.totalMoney;
                _this.productList = res.body.result.list;
            })
        }
    }
})

