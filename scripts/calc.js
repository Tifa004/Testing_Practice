export default function calc(x,y){
    if(!x&&!y || (isNaN(x) || isNaN(y))) return null;

    return {
        add:x+y,
        sub:x-y,
        div:y!==0?x/y:null,
        mult:x*y
    };
}