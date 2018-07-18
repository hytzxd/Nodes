//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

//冒泡排序
var sortArr = [5,3,2,1,9,7,6,8,4,0]
func bubbleSort(_ arr: [Int])->[Int]{
    var innerSortArr = arr
    let count = sortArr.count
    for i in 0..<(count-1) {
        for j in 0..<(count-1-i) {
            if innerSortArr[j] > innerSortArr[j+1] {
                let tmp = innerSortArr[j]
                innerSortArr[j] = innerSortArr[j+1]
                innerSortArr[j+1] = tmp
            }
            
        }
    }
    return innerSortArr
}
print(bubbleSort(sortArr))
//插入排序
func insertSort(_ arr:[Int])->[Int]{
    var innerArr = arr
    let count = innerArr.count
    for i in 1..<count {
        var j = i
        let tmp = innerArr[i]
        while j > 0 && innerArr[j-1] > tmp   {
            innerArr[j] = innerArr[j-1]
            j -= 1
        }
        innerArr[j] = tmp
    }
    return innerArr
}

print(insertSort(sortArr))
