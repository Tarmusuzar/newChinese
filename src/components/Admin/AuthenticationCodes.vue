<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 offset-md-3">
          <h1> Authentication Codes</h1>
          <ul>
            <li style="background-color: gray;"><b>Index</b> <b>Name</b> <b>Code</b></li>
            <li v-for="(item, index) in items" :key="index"><b>{{ index }}</b> {{ item.name }} <b>{{ item.authNumber }}</b> </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script >
  
  export default {
    name: 'FirebaseData',
    data() {
      return {
        items: []
      };
    },
    mounted() {
        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/authCodes.json')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            for(const dat in data){
                this.items.push(data[dat])
            }
            
        })
    }
  };
  </script>
  
  <style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


.col-sm-12 {
  text-align: center;
}

h1 {
  font-size: 36px;
  margin-bottom: 30px;
  text-transform: uppercase;
  background-color: red;
  color: white  ;
  width: 100vw;
  padding: 1rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  font-size: 24px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  color: #333;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}

li:hover {
  background-color: #d9d9d9;
  cursor: pointer;
}

@media (max-width: 768px) {
  .col-sm-12 {
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 28px;
  }
  
  li {
    font-size: 20px;
  }
}
li{
    display: flex;
    justify-content: space-around;
}
  
  </style>
 