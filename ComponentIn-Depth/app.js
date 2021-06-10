Vue.component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    template: 
    `<div>
    <slot name="header">
    </slot>
    <slot></slot>
    <slot name="footer"></slot>
    <button v-on:click="count++"> You clicked me {{ count }} times.
    </button>
    </div>`
})

new Vue({ el: '#components-demo' })

Vue.component('blog-title', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>',
})

var app = new Vue({
    el: '#blogTitle',
    data: {
        arr: [
            {
                id:1,
                title: 'My journey with Vue'
            },
            {
                id:2,
                title: 'Blogging with Vue'
            },
            {
                id:1,
                title: 'Why Vue is so fun'
            },
        ]
    }
})

Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >}
  `
})

new Vue({ 
  el: '#baseCheckbox',
  data: {
    test: this.checked,
  }
})

let namelist = Vue.component('namelist', {
  template: `
  <ul>
  <li
    v-for="item in arr"
    v-bind:key="item.id"
  >
    <slot name="item" v-bind:item="item">
      <!-- Fallback content -->
      {{ item.name }}
    </slot>
  </li>
</ul>`
})

var app = new Vue({
  el: '#app',
  components: [
    namelist
  ],

  data: {
      arr: [
          {
              id:1,
              name:'Hoang Linh',
              done: true,

          },
          {
              id:2,
              name:'La Long',
              done: false,
          },
          {
              id:3,
              name:'Nhu Quynh',
              done: true,
          }
      ],
  },
  
})

Vue.config.devtools = true;

