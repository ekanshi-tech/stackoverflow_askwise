export const currentUser=(data)=>{
    return{
        type:"FETCH",
        payload:data
    };
};