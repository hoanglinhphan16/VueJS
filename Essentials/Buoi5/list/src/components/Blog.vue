<template>
    <div>
        <div v-for="item in arr" :key="item.id" class="flex-container-list">
            <a v-bind:href="item.thumbnail" target="_blank"><img v-bind:src="item.thumbnail" /></a>
            <div>
                <p>{{item.title}}</p>
                <div>{{item.description}}</div>
                <p>{{item.categoryId}}</p>
                <p>{{item.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Blog',
    data() {
        return {
            arr: [
            {
                "id": "2",
                "categoryId": "UI developer",
                "createdAt": "2021-04-23T09:07:41.855Z",
                "title": "cross-platform",
                "thumbnail": "http://lorempixel.com/640/480/animals",
                "description": "Legacy",
                "content": "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
            },
            {
                "id": "3",
                "categoryId": " UX developer ",
                "createdAt": "2021-04-23T14:57:39.459Z",
                "title": "Bedfordshire",
                "thumbnail": "http://lorempixel.com/640/480/transport",
                "description": "Investor",
                "content": "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!"
            },
            {
                "id": "4",
                "categoryId": " UI developer ",
                "createdAt": "2021-04-23T13:31:36.828Z",
                "title": "programming application quantify",
                "thumbnail": "http://lorempixel.com/640/480/city",
                "description": "Dynamic",
                "content": "Use the redundant TCP capacitor, then you can parse the redundant monitor!"
            },
            {
                "id": "6",
                "categoryId": "Vue developer",
                "createdAt": "2021-04-23T21:46:59.584Z",
                "title": "Ergonomic Cotton Bacon",
                "thumbnail": "http://lorempixel.com/640/480/cats",
                "description": "Senior",
                "content": "You can't back up the driver without backing up the open-source EXE transmitter!"
            },
            {
                "id": "7",
                "categoryId": " UI developer ",
                "createdAt": "2021-04-23T18:21:17.130Z",
                "title": "Baby",
                "thumbnail": "http://lorempixel.com/640/480/technics",
                "description": "Lead",
                "content": "Try to transmit the IB sensor, maybe it will input the cross-platform transmitter!"
            },
            ]
        }
    }
}
</script>

<style scoped>
 
body{
   font-family:'Courier New', Courier, monospace;
   text-align:center;
}

.container{
    width: 620px;
    margin: 0 auto;
}


.flex-container-list{
    display: flex;
    flex-direction: row;
}


img{
    width:300px;
    margin: 5px 5px;
}
</style>