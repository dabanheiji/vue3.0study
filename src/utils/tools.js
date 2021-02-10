export const stringify = (data)=>{
    if(typeof data !== 'object'){
        return;
    }
    let str = "";
    let keys = Object.keys(data);
    for(let prop in data){
        let item = `${prop}=${data[prop]}&`;
        str += item;
    }
    str = str.slice(0,-1);
    return str;
}