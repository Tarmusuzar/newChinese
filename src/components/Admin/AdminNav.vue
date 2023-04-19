<template>
    <div class="app">
      <header>
        <h1>Gypsy Dalma</h1>
        <nav>
          <ul>
            <li><router-link to="/orders">Orders</router-link></li>
            <li><router-link to="/acds">Authentication Codes</router-link></li>
          </ul>
        </nav>
      </header>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
     
  };
  </script>
  
  <style scoped>
  .app{
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  header {
    background-color: #dd0000;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  nav li {
    margin-left: 20px;
  }
  
  nav li a {
    color: white;
    text-decoration: none;
  }
  
  nav li a:hover {
    text-decoration: underline;
  }
  
  h1 {
    margin: 0;
  }
  
  
  </style>
  