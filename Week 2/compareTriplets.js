const compareTriplets = (a, b) =>{
    // Write your code here
    let pointsA = 0
    let pointsB = 0
    let c = []
    
    for(let i=0; i < a.length; i++){
        if(a[i] > b[i]){
            pointsA += 1
        }
        else if(a[i] < b[i]){
            pointsB += 1
        }
        
    }
    c = [pointsA, pointsB]
    return c

}