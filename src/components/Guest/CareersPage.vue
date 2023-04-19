<template>
          <h3>Work at Gypsy Chinese</h3>

    <div class="careers-form">
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" id="age" v-model="age" required>
        </div>
        <div class="form-group">
          <label for="experience">Level of experience:</label>
          <input type="text" id="experience" v-model="experience" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" v-model="mobile" required>
        </div>
        <div class="form-group">
          <label for="position">Position:</label>
          <select id="position" v-model="position" required>
            <option value="" disabled>Select Position</option>
            <option value="Chinese Cook">Chinese Cook</option>
            <option value="Bike Rider">Bike Rider</option>
            <option value="Cashier">Cashier</option>
            <option value="Waiter">Waiter</option>
            <option value="Waitress">Waitress</option>
            <option value="Stewarding">Stewarding</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div class="form-group">
          <label for="cv">Copy of CV:</label>
          <textarea id="cv" v-model="cv" rows="4" required></textarea>
        </div>
        <button type="submit" @click.prevent="submitForm">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        age: null,
        experience: "",
        email: "",
        mobile: "",
        position: "",
        cv: "",
      };
    },
    methods: {
      submitForm() {
        // send form data to server or do something with it
        console.log(this.name, this.age, this.experience, this.email, this.mobile, this.position, this.cv);
      },
    },
  };
  </script>
  <style scoped>
  .careers-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    text-align: center;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 0;
    background-color: red;
    padding: .6rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  label {
    font-size: 1.2rem;
    color: #d62828;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="email"],
  input[type="tel"],
  textarea,
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #444;
  }
  
  button[type="submit"] {
    background-color: #d62828;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #b22f2f;
  }
  
  option[disabled] {
    color: #ccc;
  }
  </style>
  