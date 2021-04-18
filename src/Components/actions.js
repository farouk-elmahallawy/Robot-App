export const requestRoboInfo = () => (dispatch) =>{
    dispatch({type:'IS_PENDING'})
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({type:'SUCCESS',payload:data}))
    .catch(error => dispatch({type:'FAILED' , payload:error}))
}
export const HandelChange = (e) =>{
    return{
        type:'SEARCH_BOX',
        payload:e.target.value
    }
}