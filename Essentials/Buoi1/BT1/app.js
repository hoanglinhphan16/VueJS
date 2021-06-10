var app = new Vue({
    el: '#app',
    data: {
        chooseName: null,
        arr: [
            {
                name: 'HOME',
                active: false,
            },
            {
                name: 'PROJECTS',
                active: false,

            },
            {
                name: 'SERVICES',
                active: false,
            },
            {
                active: false,
                name: 'CONTACT'
            }
        ]
    },
    methods: {
        returnChooseName(i) {
            const index = this.arr.findIndex(e => e.name === i.name)
            if (index >= 0) {
                this.chooseName = this.arr[index].name
            }
        }
    }
}) 