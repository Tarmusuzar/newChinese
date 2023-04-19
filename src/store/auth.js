import router from '@/router'
export default{
    
    namespaced:true,
    state(){
        return{
            name:'francis'
        }
    },
    actions:{
        signup(context,payload){
            context.dispatch('authentication',
            {
                link:'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBA3XZ9UkBN0mtJKzZNLFaCd1A9fPNjnBY',
                email:payload.email,
                password:payload.password

        }) },
        login(context,payload){
            context.dispatch('authentication',
            {
                link:'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBA3XZ9UkBN0mtJKzZNLFaCd1A9fPNjnBY',
                email:payload.email,
                password:payload.password

        }) },

       
        authentication(_, payload){
            fetch(payload.link,{
                method:'post',
                body:JSON.stringify({
                    email:payload.email,
                    password:payload.password,
                    returnSecureToken:true
                }
            )})
                    
                
            .then(response=>{
                if(response.ok){
                   router.push('/')
                }else{
                    router.push('/home')
                }

            })
        }
    }
}