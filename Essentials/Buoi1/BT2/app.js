var app = new Vue({
    el:'#app',
    data: {
        total:0,
        arr: [
            {
                name: 'Web Development',
                price: 300,
                attr:false,
            },
            {
                name: 'Design',
                price: 400,
                attr: false,
            },
            {
                name: 'Integration',
                price: 250,
                attr: false,
            },
            {
                name: 'Trainning',
                price: 220,
                attr: false,
            }
        ],
        arrChoice: [

        ]
    },
    methods: {
        buy(i) {
            i.attr = !i.attr
            if (!this.arrChoice.find(e => e.name === i.name)) {
                console.log(i);
                this.arrChoice.push({
                    name: i.name,
                    price : i.price,
                    attr: i.attr
                })
                this.total += i.price 
                console.log(this.arrChoice);
            }
            else {
                this.arrChoice.splice(i, 1)
                this.total -= i.price
                console.log(this.arrChoice);
            }
        }
    }
})