function nama(x,y){
    return x.repeat(y)
}
// console.log (nama("Ryan", 3))

// ---------------------------------

function repeat(str, num){
    var output ="";
    for (i = 0; i < num; i++){
    output += str;
    }
    return output;
}
// console.log(repeat("Ryan", 3))

// ---------------------------------

function nama(str){

    if(str.length % 2 == 0){
    return str.charAt((str.length/2)-1) + str.charAt(str.length/2)
    }else{
    return str.charAt(str.length/2)
    }
}
// console.log (nama("Papua"))

// -----------------------------------

function tengah(str) {
    var pisah = str.split("")
    if (pisah.length % 2 == 0){
        return pisah[pisah.length / 2 -1] + pisah[pisah.length / 2];
    } else {
        return pisah[pisah.length / 2];
    }
}
// console.log("Mobil")

// ------------------------------------

function xo(str) {
    var x = 0;
    var o = 0;
    str = str.toLowerCase();
    var split = str.split("");
    for (var i = 0; i < split.length; i++){
        if (split[i] == "x"){
            x++;
        } else if (split[i] == "o"){
            o++;
        }
    }
    return `X : ${x} | O : ${o}`;
}
// console.log(xo("xXoOpP"))

// -------------------------------

function firstlast(str){
    return str[0] + str[str.length - 1]
}
// console.log (firstlast("Papua"))

// -------------------------------

function removefirstlast(str) {
    var split = str.split("")
    split.shift()
    split.pop()
    return split.join("")
}
// console.log(removefirstlast("Ryan"))

// -------------------------------

function questionmark(str){
    var x = 0;
    var split = str.split("");
    for (var i = 0; i < split.length; i++){
        if (split[i] == "?"){
            x++;
        } else{
            x = "Tidak ada Tanda Tanya"
        }
    }
    return `? : ${x}`;
}
// console.log(questionmark("afasfa"))

function berapaTahun(pAwal, perc, pendatang, target){
    var persen = (pAwal * (perc / 100))
    var x = 1;
    var tahun = (pAwal + persen + pendatang)
    for (var i = 0; i < target; i++){
        if (tahun <= target){
            tahun += (tahun * perc/100) + pendatang;
            x++;        
        }else {
            return x
        }
    }
    return x 
}
// console.log(berapaTahun(1500000, 2.5, 10000, 2000000));

// ------------------------------------

function everyArr(arr1, arr2){
    var x = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (let i = 0; i < x; i++){
        if (arr1[i] !== arr2[i]){
            return false
        }
    } 
    return true
}
// console.log(everyArr([1,2,3], [1,2,4]))

// ------------------------------------

function equal(arr) {
    // retuurn arr.filter((val) => val !== arr[0]).length == 0 ? true : false;
    for (let i = 0; i < arr.length; i++){
        if (arr[0] != arr[i]) {
            return false;
        }
    }
    return true;
}
console.log(equal([1, 1, 1]));
