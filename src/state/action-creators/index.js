export const login = () =>{
return (dispatch)=>{
    dispatch({
        type:'login',
    })
}
}

export const logout = () =>{
   return (dispatch)=>{
    dispatch({
        type:'logout',
    })
   } 
}

/*  
export const funcn1 = (amount) =>{
 return (dispatch) =>{
    console.log('fun1');
    dispatch({
        type: 'type1',
        payload:amount
    })
 }
}

export const funcn2 = (amount) =>{
    console.log('fun2');
    return (dispatch) =>{
        dispatch({
            type: 'type2',
            payload:amount
        })
     }
}  */