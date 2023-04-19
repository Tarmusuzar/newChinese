<template>
            <h1 style=" text-align:center;width:100%; background-color: red ; color: white; padding: 10px; margin-top: 0;">Gypsy Chinese Cares</h1>

    <div class="customer-satisfaction-form">
      <h2>How was your experience?</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" id="name" v-model="name" required>
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" v-model="email" required>
          </div>
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <div class="input-group">
            <i class="fas fa-phone"></i>
            <input type="tel" id="phone" v-model="phone" required>
          </div>
        </div>
        <div class="form-group">
          <label for="order">Order:</label>
          <div class="input-group">
            <i class="fas fa-utensils"></i>
            <select id="order" v-model="order">
              <option value="dine-in">Dine In</option>
              <option value="takeout">Takeout</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="rating">Rating:</label>
          <div class="input-group">
            <i class="fas fa-star"></i>
            <select id="rating" v-model.number="rating" required>
              <option value="">Select a rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="comment">Comment:</label>
          <div class="input-group">
            <i class="fas fa-comment"></i>
            <textarea id="comment" v-model="comment"></textarea>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        order: 'dine-in',
        rating: null,
        comment: ''
      }
    },
    methods: {
      submitForm() {
        const formData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          order: this.order,
          rating: this.rating,
          comment: this.comment
        };
        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/reviews.json',
          {
            method : 'Post',
            body:JSON.stringify(formData)
          }
        ).then(()=>{
          this.$router.push('/reviewed')
        })
      }
    }
  }
  </script>
  
  <style scoped>
.customer-satisfaction-form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.customer-satisfaction-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group {
  display: flex;
  align-items: center;
}

.input-group i {
  margin-right: 10px;
  font-size: 18px;
}

.input-group input,
.input-group select,
.input-group textarea {
  flex: 1;
  border-radius: 3px;
  border: 1px solid #ced4da;
  padding: 8px;
  font-size: 16px;
}

.input-group select {
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 24L7 16h18z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px 16px;
}

.input-group textarea {
  min-height: 100px;
}

button[type="submit"] {
  display: block;
  margin-top: 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #218838;
}
input,select{
  margin-left: 10px;
}
</style>
