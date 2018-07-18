//冒泡排序
var sortArr = [5,3,2,1,9,7,6,8,4,0]
function bubbleSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
             if (arr[j] > arr[j+1]) {
                 let tmp = arr[j]
                 arr[j] = arr[j+1]
                 arr[j+1] = tmp 
             }
            
        }
        
    }
}
// bubbleSort(sortArr)
// console.log(sortArr)
//插入排序
function insertSort(array) {
    
    for (let i = 1; i < array.length; i++) {
       
        let tmp = array[j]
        for(var j = i; j > 0 && arr[j - 1] > tmp; j --) {
            arr[j] = array[j-1]
        }
        arr[j] = tmp
       
    }
}
insertSort(sortArr)
console.log(sortArr)


function shellSort(array) {
    var shellArr = [5,3,0]
    for(let g = 0; g < shellArr.length; g++) {
        var i = shellArr[g];
        for(var i = shellArr[g]; i < array.length; ++i) {
            var tmp = array[i] 
            for(var j = i; j > shellArr[g] && array[j - shellArr[g]] > tmp; j -= shellArr[g]) {
                array[j] = array[j - shellArr[g]]
            }
            array[j] = tmp
        }
    }
}