const reducer = (state = false , action ) =>{
    if (action.type === 'login') {
        state = true;
        return state;
    }else if (action.type === 'logout')
    {
        state = false;
        return state;
    }
    else
    return state;
}
export default reducer;