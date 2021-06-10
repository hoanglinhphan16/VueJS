var app = new Vue({
    el: '#app',
    data: {
        currentInput: null,
        edited: false,
        arr: [
            {   
                key:0,
                text: 'Learn JavaScript',
                done:false
            },
            {
                key:1,
                done: false,
                text: 'Learn Vue' 
            },
            { 
                key:2,
                text: 'Build something awesome',
                done: false
            }
        ]
    },
    methods: {
        addToArr() {
            if( this.currentInput !== null) {
                if (this.edited) {
                    this.key.text = this.currentInput
                    console.log(this.key.text)
                    console.log(this.currentInput);
                    this.edited = false
                    this.currentInput = null
                }
                else if (!this.arr.find(i => i.text === this.currentInput)) {
                    this.arr.push({
                        text: this.currentInput,
                        done: false,
                    })
                    this.currentInput=null
                }
                
            }
            else alert("Please fill the input")
            
            
        },
        removeFromArr(item) {
            console.log(item);
            const index = this.arr.findIndex(i => i.text === item.text)
            if (index >=0) {
                this.arr.splice(item, 1)
            }
        },
        edit(item) {
            const index = this.arr.findIndex(i => i.text === item.text)
            if (index >=0) {
                this.currentInput = item.text
                this.key = item
                this.edited = !this.edited 
            }
        }
    }
}) 