export default function analyzeArray(arr){
    if(arr.length===0) return null;
    return { average:arr.reduce((prev,curr)=>prev+curr,0)/arr.length,
        min:Math.min(...arr),
        max:Math.max(...arr),
        length:arr.length
    }

}