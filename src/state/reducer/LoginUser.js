const logger = (state = false , action , username = null) =>{
    if (action.type === 'login') {
        state = true
        username = 'Addyaddy';
        return {state , username};
    }else if (action.type === 'logout')
    {
        state = false;
        username = 'guest';
        return {state,username};
    }
    else
    return {state ,username};
}
export default logger;