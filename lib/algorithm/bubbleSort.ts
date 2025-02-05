/**
 * 冒泡排序算法实现
 * @author unknown
 * 
 * 时间复杂度:
 * - 平均情况: O(n²)
 * - 最坏情况: O(n²) - 当数组为逆序时
 * - 最好情况: O(n) - 当数组已经排序时（使用优化后）
 * 
 * 空间复杂度:
 * - O(1) - 只需要常数级额外空间
 * 
 * 特点:
 * - 原地排序
 * - 稳定排序
 * - 简单但效率较低
 */

type CompareFunction<T> = (a: T, b: T) => number;

/**
 * 冒泡排序函数
 * @param arr 需要排序的数组
 * @param compareFn 可选的比较函数
 * @returns 排序后的数组（原地排序）
 */
export function bubbleSort<T>(
    arr: T[],
    compareFn: CompareFunction<T> = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
): T[] {
    const len = arr.length;
    
    // 优化标志：如果一轮比较中没有发生交换，则数组已经有序
    let swapped: boolean;
    
    for (let i = 0; i < len - 1; i++) {
        swapped = false;
        
        // 每次循环将最大的元素冒泡到末尾
        for (let j = 0; j < len - 1 - i; j++) {
            if (compareFn(arr[j], arr[j + 1]) > 0) {
                // 交换元素
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // 如果没有发生交换，说明数组已经有序，提前退出
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

// 使用示例
/*
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers)); // [11, 12, 22, 25, 34, 64, 90]

const strings = ['banana', 'apple', 'orange', 'grape'];
console.log(bubbleSort(strings)); // ['apple', 'banana', 'grape', 'orange']

// 使用自定义比较函数
const objects = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];
console.log(bubbleSort(objects, (a, b) => a.age - b.age));
// 按年龄排序: [{ name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]
*/ 