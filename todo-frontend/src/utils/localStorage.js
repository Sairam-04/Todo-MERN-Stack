const setUser = (token) =>{
    localStorage.setItem('token',token);
}

const getUser = () =>{
    return localStorage.getItem('token');
}

const removeUser = ()=>{
    localStorage.removeItem('token');
}

export {setUser, getUser, removeUser};