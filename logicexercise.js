function nama(x,y){
    return x.repeat(y)
}console.log (nama("Ryan", 3))

// ---------------------------------

function repeat(str, num){
    var output ="";
    for (i = 0; i < num; i++){
    output += str;
    }
    return output;
}
console.log(repeat("Ryan", 3))

// ---------------------------------

function nama(str){

    if(str.length % 2 == 0){
    return str.charAt((str.length/2)-1) + str.charAt(str.length/2)
    }else{
    return str.charAt(str.length/2)
    }
}
console.log (nama("Papua"))

// -----------------------------------

function tengah(str) {
    var pisah = str.split("")
    if (pisah.length % 2 == 0){
        return pisah[pisah.length / 2 -1] + pisah[pisah.length / 2];
    } else {
        return pisah[pisah.length / 2];
    }
}
console.log("Mobil")