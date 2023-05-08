import { configureStore } from '@reduxjs/toolkit'


import logoutReducer from './LogoutReload/reducer'


const store = configureStore({
    reducer: {
       
        logoutState: logoutReducer, //para cerrar sesion
        
    }
})
export default store