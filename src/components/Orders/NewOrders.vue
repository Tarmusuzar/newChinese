<template>
    <div    class="mainContainer">
        <ul class="orderContainer">
            <ul class="personalInfo">  
                <li>123</li>
                <li> 0547800635</li>
                <li>Franxis</li>
            </ul>
                <!-- <li>Phone Order</li> -->
                
            <ul class="theOrder">
                <ul class="qty">
                    <li>1</li>
                <ul>
                    <li>Mee goreng</li>
                        <li>Comment</li>
                </ul>
                    <li>21</li>
                </ul>
                <ul class="qty">
                    <li>1</li>
                <ul>
                    <li>Mee goreng</li>
                        <li>Comment</li>
                </ul>
                    <li>21</li>
                </ul>
                <ul class="qty">
                    <li>1</li>
                <ul>
                    <li>Mee goreng</li>
                        <li>Comment</li>
                </ul>
                    <li>21</li>
                </ul>
                <ul class="qty">
                    <li>1</li>
                <ul>
                    <li>Mee goreng</li>
                        <li>Comment</li>
                </ul>
                    <li>21</li>
                </ul>
                <ul class="qty">
                    <li>1</li>
                <ul>
                    <li>Mee goreng</li>
                        <li>Comment</li>
                </ul>
                    <li>21</li>
                </ul>
                <ul class="qty">
                    <li>1</li>
                <ul>
                    <li>Mee goreng</li>
                        <li>Comment</li>
                </ul>
                    <li>21</li>
                </ul>

                <ul class="billing" id="bill"> 
                <ul class="subBill">
                    <li class="options">Sub Total</li>
                    <li>20</li>
                </ul>
                <ul class="subBill">
                    <li class="options">Total</li>
                    <li>20</li>
                </ul>
                <ul class="subBill">
                    <li class="options">Vat</li>
                    <li>20</li>
                </ul>
                <ul class="subBill">
                    <li class="options"><b>Total</b></li>
                    <li>20</li>
                </ul>
            </ul>

            </ul>
        </ul>
    </div>
</template>
<style scoped>
    .mainContainer{
        box-shadow: 1px 1px 1px 1px  rgb(147, 142, 142);
        width: 60%;
        min-width: 30rem;
        margin: 3rem auto;
    }
    li{
        list-style-type: none;
    }
    .orderContainer{
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: column;
    }
    .personalInfo{
        display: flex;
        width: 100%;
        justify-content: space-between;
        box-shadow: 1px 1px 1px gray;
        padding: .5rem;
    }
    .theOrder{
        display: flex;
        flex-direction: column;
        

    }
    #bill{
        margin-top: 1rem;
    }
    .billing{
        align-self: flex-end;
    }
    .qty{
        display: flex;
        justify-content:space-around ;
        border-bottom: 1px solid gray;
        width: 80%;
        margin: 0 auto;
    }
    .billing{
        width: 60%;
        margin: 0 auto;
        justify-content:space-around ;
        

    }
    .subBill{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }
    .options{
        margin-left: 40%;
    }

</style>