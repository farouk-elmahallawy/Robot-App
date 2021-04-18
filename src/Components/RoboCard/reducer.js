 const initialState ={
    roboInfo:[],
    img:'https://robohash.org/',
}
export const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'SUCCESS' : return{...state,roboInfo:action.payload}
        default : return state
    }
}
const initialSearchState ={
    search:""
}
export const searchChange = (state=initialSearchState,action) => {
    switch(action.type){
        case 'SEARCH_BOX' : return {...state,search:action.payload}
        default : return state
    }
}