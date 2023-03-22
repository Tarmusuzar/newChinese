<template>
    <div class="mainDashboard">
        <ul class="sales">
            <li><span class="value">  669900000 </span>(AED)  Revenue</li>
            <li><span class="value">50000</span>Total Orders</li>
            <li id="lastItem" ><span class=" value ">50000</span> Customers</li>
        </ul>
        <ul class="food">
            <div>
                <li class="heading">Best Sellers</li>
                <li class="item">Mee Goreng </li>                
                <li class="qty">788 (pcs)</li>
                <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
                <li class="heading">Regular Customers</li>
                <li class="item">Rakesh</li>                
                <li class="qty">5 (orders)</li>
                <i class="fa-solid fa-circle-arrow-right"></i>
                
            </div>
            <div>
                <li class="heading"> Least Selling</li>
                <li class="item">Chicken Hakka</li>                
                <li class="qty">788 (pcs)</li>
                <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            
            
        </ul>
        
        <ul class="food">
            <div>
                <li class="heading">All Products</li>
                <li >Chicken </li>                
                <li >Chicken </li>                
                <li >Chicken </li>                
                <li >Chicken </li>                
                <li >Chicken </li>                
                <li class="qty">788 (pcs)</li>
                <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
                <li class="heading">All Customers</li>
                <li>EMma</li>
                <li>EMma</li>
                <li>EMma</li>
                <li>EMma</li>
                <li class="qty">788 (pcs)</li>
                <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            
            
        </ul>
        <ul class="food">
            <div>
                <li class="heading">Recent Orders</li>
                <li >Chicken </li>                
                <li >Chicken </li>                
                <li >Chicken </li>                
                <li >Chicken </li>                
                <li >Chicken </li>                
                <li class="qty">788 (pcs)</li>
                <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
                      
            
        </ul>
        
        
    </div>
</template>
<style scoped>
/*Begining of Sales Design */
    .mainDashboard{
        display: flex;
        flex-direction: column;
        justify-content:space-between ;
        width: 95%;
        margin: .5rem auto;
        /* border: 1px solid gray; */
        border-radius: .2rem;
        padding: 1rem;
        /* box-shadow: 1px 1px 7px 1px rgb(231, 206, 206); */
        /* height: 100vh; */
        

    }
    .mainDashboard ul{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .mainDashboard li{
        text-align: center;
        list-style-type: none;
    }
    
    .mainDashboard .sales{
        border: none;
        display: flex;
        background-color: rgb(219, 24, 24) ;
        color: white;
        align-items: center;
        justify-content: space-evenly;
        height: auto;
        box-shadow: 0 2px 7px 2px rgb(159, 156, 156);
    }
    .mainDashboard .sales span{
        font-size: 1.3rem;

    }
    .mainDashboard .sales li{
        border-right: 1px solid rgb(247, 245, 245);
        padding: .3rem 1rem ;
        font-size: .6rem;


    }
    #lastItem{
        border: none;
    }

    /*End of Sales Design */
    /*Beginning of Food Design */
    .food {
        /* border: 1px solid green; */
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items:stretch ;
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: wrap;

    }
   
    .food div{
        box-shadow: 0px 0px 2px 1px rgb(145, 143, 143) ;
        padding: .4rem;
        min-height: 8rem;
        min-width: 4rem;
        flex-grow: 0;
        flex-shrink: 0;
        /* width: 100%; */
        flex-grow: 1;
        flex-shrink: 1;
        margin: .3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .heading{
        color: rgb(236, 40, 40);
        font-weight: 500;
        text-decoration: underline;
    
    }
    
    .food div .item {
        color: gray;
        font-size: 1.6rem;
        font-weight: 900;
        align-self: center;
    }
    
   .food div .qty{
    font-size: 1rem;
   }
   
    
   
    
</style>