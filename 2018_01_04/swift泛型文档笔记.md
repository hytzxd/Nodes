#泛型
    ###方法中

```
func swapTwoValues<T>(_ a: inout T, _ b: inout T) {
    let temporaryA = a
    a = b
    b = temporaryA
}
```
###泛型的命名
请使用大写字母开头的驼峰命名法，（例如 T 和 MyTypeParameter）来为类型参数命名，以表明它们是占位类型，而不是一个值。
###类型约束语法

```
func someFunction<T: SomeClass, U: SomeProtocol>(someT: T, someU: U) {
    // 这里是泛型函数的函数体部分
}
```
###关联类型
定义一个协议，声明一个或者多个关联类型
使用 `associatedtype`关键字来定义关联类型

```
protocol Container {
    associatedtype ItemType
    mutating func append(_ item: ItemType)
    var count: Int { get }
    subscript(i: Int) -> ItemType { get }
}
```
###泛型where语句


```
//下面的例子定义了一个名为 allItemsMatch 的泛型函数，用来检查两个 Container 实例是否包含相同顺序的相同元素。如果所有的元素能够匹配，那么返回 true，否则返回 false。

//被检查的两个 Container 可以不是相同类型的容器（虽然它们可以相同），但它们必须拥有相同类型的元素。这个要求通过一个类型约束以及一个 where 子句来表示：


func allItemsMatch<C1: Container, C2: Container>
    (_ someContainer: C1, _ anotherContainer: C2) -> Bool
    where C1.ItemType == C2.ItemType, C1.ItemType: Equatable {

        // 检查两个容器含有相同数量的元素
        if someContainer.count != anotherContainer.count {
            return false
        }

        // 检查每一对元素是否相等
        for i in 0..<someContainer.count {
            if someContainer[i] != anotherContainer[i] {
                return false
            }
        }

        // 所有元素都匹配，返回 true
        return true
}


```
####具有泛型 where 子句的扩展

```
extension Stack where Element: Equatable {
    func isTop(_ item: Element) -> Bool {
        guard let topItem = items.last else {
            return false
        }
        return topItem == item
    }
}
```
####具有泛型where子句的关联类型

```
protocol Container {
    associatedtype Item
    mutating func append(_ item: Item)
    var count: Int { get }
    subscript(i: Int) -> Item { get }

    associatedtype Iterator: IteratorProtocol where Iterator.Element == Item
    func makeIterator() -> Iterator
}
```
###泛型下标


下标代码体开始的标志的花括号之前写下泛型 where 子句。例如：

* ```
* extension Container {
*     subscript<Indices: Sequence>(indices: Indices) -> [Item]
*         where Indices.Iterator.Element == Int {
*             var result = [Item]()
*             for index in indices {
*                 result.append(self[index])
*             }
*             return result
*     }
* }

```

