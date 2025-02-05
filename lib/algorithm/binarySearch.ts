/**
 * 二分查找算法实现
 * @author unknown
 * 
 * 时间复杂度:
 * - 平均情况: O(log n)
 * - 最坏情况: O(log n)
 * - 最好情况: O(1) - 当目标值在数组中间时
 * 
 * 空间复杂度:
 * - O(1) - 只使用几个变量进行迭代
 * 
 * 特点:
 * - 要求数组必须是有序的
 * - 只能用于可比较的元素
 * - 比线性查找更快，但要求数组必须预先排序
 */

type CompareFunction<T> = (a: T, b: T) => number;

/**
 * 二分查找函数
 * @param arr 已排序的数组
 * @param target 要查找的目标值
 * @param compareFn 可选的比较函数
 * @returns 目标值的索引，如果未找到则返回-1
 */
export function binarySearch<T>(
    arr: T[],
    target: T,
    compareFn: CompareFunction<T> = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const comparison = compareFn(arr[mid], target);

        if (comparison === 0) {
            return mid; // 找到目标值
        } else if (comparison < 0) {
            left = mid + 1; // 目标值在右半部分
        } else {
            right = mid - 1; // 目标值在左半部分
        }
    }

    return -1; // 未找到目标值
}

// 使用示例
/*
// 数字数组示例
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(numbers, 7));  // 输出: 3
console.log(binarySearch(numbers, 10)); // 输出: -1

// 字符串数组示例
const strings = ['apple', 'banana', 'orange', 'pear'];
console.log(binarySearch(strings, 'orange')); // 输出: 2

// 使用自定义比较函数的示例
interface Person {
    age: number;
    name: string;
}
const people: Person[] = [
    { age: 20, name: 'Alice' },
    { age: 25, name: 'Bob' },
    { age: 30, name: 'Charlie' }
];
const compareByAge = (a: Person, b: Person) => a.age - b.age;
console.log(binarySearch(people, { age: 25, name: 'Bob' }, compareByAge)); // 输出: 1
*/ 