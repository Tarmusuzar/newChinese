<template>
    <div class="online-ordering">
      <h2>Order Online</h2>
      <div class="card-container">
        <div class="card" v-for="option in options" :key="option.id">
          <a :href="option.link" target="_blank">
            <img :src="option.icon" alt="Order Online" />
          </a>
          <div class="discount">Get {{ option.discount }}% off</div>
          <div class="discount"> {{ option.name }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OnlineOrdering',
    data() {
      return {
        options: [
          {
            id: 1,
            name: 'Noon UAE',
            link: 'https://www.noon.com/uae-en/',
            icon: 'data:image/png;base64,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',
            discount: 10,
          },
          {
            id: 2,
            name: 'Talabat UAE',
            link: 'https://www.talabat.com/uae',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAkFBMVEX/WgD/////UgD/TAD/VwD/TwD/k3f/SQD/8+3/RgD/2cv/kWr/8On/6+P/1cb/f1f/+vX/r5X/Yyz/tZ7/YCX/e0n/i2H/wK3/3tX/uqL/mXb/bkL/QAD/ZjL/dUT/nn7/yLj/bDj/bCz/XxH/p4n/z73/oYb/VRf/08r/hV//hVj/Yh3/dk//u67/l37/yLG6MgWFAAAEIUlEQVR4nO2Xa5eiOBBApVLpgIKNDx4i8mjRHtvu6f//7zYvQGxbmTOze3bP1v2gmGBxU0kKmEwIgiAIgiAIgiAIgiAIgiAIgiAIgiCI/xWIv97zN4Gwrre3u/h+tz3/8QuCl3vfDRIxCVyf3+piWeo7MxhxAeR5fjPEDfhs6jir21Fx6TuO47NbMonsGWUDy43ruLtRswqZirq4HZWtnG9ssAhH2uA6lScGyzE2uHPv2PD5dzbw5Iy0AT2ikTaRcy83f8DGjOjfYgPW5rELACt01CYXJi4IARwEgy82yDwuzxccBzYgOHBxIcVlBNnK9GkI3Dtom1fb8j37ePZTz6qTJkmmIsIsSRVJDNDZuGp7QrH6oXoO5Vr5WJvYiyvZWM249UEoVUP6YxPJCBjNsqNaxE5YJav72wq3ziULPmFB9yts+KUNNP2J1Rpam037h+DJJLB2u9OCmHvp5QXcu9OKLwObVAwbPuEyN8FFT1CjtbngqHNbXjY1+XxwSnQ3OWI6VMf94M8ZZ9MuN4NRztlXG6cANdODpt1pGPD+mse3zMxAlUnkCpxmL/vJ+e1gUgC9DU9W0Xmyrxe66Dk1b23SqrKiU3ktfJ/HMsJ6Ztoq8ZJl+tAts6wsHqzjdk8tBFfrEIW3Xy73wmTY3YrORt5rcL088zwz0yKszQIZg6M+DN/V6vbYebmceGYFpq8Idk+tOecPS86g3kD9qRehn3zq8M+dDWKjw4dTk8uVZ2ySXP0vT4wiTMTpoJMXbKbGoa9+j0yubSDuN8TQBofLprcx1Q9i08gvd961za/WYhjKXNjwZNhzZYPP+sdGFFen/YaNnX5/EZcm3Z0Ns1Ukmc2SYGijn1vMc4CzyCv9nZbxYvrFZtRMmeHMPVnqPvRh7AHPVwMb8a57Drms+PXAZsoBJ5ibefxpi13NgJlKpW3MBo1GPZdtzZZt5JI3NgVHzDdDGzsTHqKdjNbGSU97fDaJcGthbgKAcid1qxjMLAc7MUJnb9dn4NZmCU6LXWEC9DNllMN4V5fu0MYJfd+Mx0mYMKU3qXdv826m2vLs+sljHzvnKpfn9gLtd7+nbIUP267epsM/o91bfQRl099UDt7j5JjqpGxEf5PRGXCLzmbfbbdQHzWm+oX9xg/UHRo2vZz6SF/VeKNwvM0EzUNFWMix2WFUz0EYhhvgc/kVBlzWxcpe9PQpM5Su4Un1+LvGXmm1NpXH/g5XM9ntlqYx0mrOiJmSiHNTfTTqVQ29l+x4PKEn6z0TTN05JGoXo8D42Dyd5YaTLfKNB3UPclEcj8eItY9S3IvKpnxjalux9iEMRPxRfUS3Xj1uZYerwOYQOP/mbUb13ChheHUDUr+/RFBu//SLKUEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQxH+GvwBYyT7B2Ycv1wAAAABJRU5ErkJggg==',
            discount: 15,
          },
          {
            id: 3,
            name: 'Chatfood UAE',
            link: 'https://www.chatfood.io/',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8a91jUNfywmPJ4n-htM6JAPxJzlN8wl4HWaQ_mvr_plL_GAH50TmreB4mDOH1avKPmNE&usqp=CAU',
            discount: 20,
          },
          {
            id: 4,
            name: 'Deliveroo UAE',
            link: 'https://deliveroo.ae/',
            icon: 'data:image/png;base64,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',
            discount: 10,
          },
          {
            id: 5,
            name: 'Smiles UAE',
            link: 'https://www.smilesuae.ae/',
            icon: 'data:image/jpeg;base64,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',
            discount: 25,
          },
          {
            id: 6,
            name: 'Order over Phone',
            link: '',
            icon: 'data:image/png;base64,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',
            discount: 0,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 0;
    text-align: center;
    background-color: red;
    padding: 1rem;

  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  
  .discount {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(70, 67, 67);
  }
  </style>
  