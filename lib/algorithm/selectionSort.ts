/**
 * 选择排序算法实现
 * @author unknown
 * 
 * 时间复杂度:
 * - 平均情况: O(n²)
 * - 最坏情况: O(n²)
 * - 最好情况: O(n²)
 * 
 * 空间复杂度:
 * - O(1) - 只需要一个额外的临时变量用于交换
 * 
 * 特点:
 * - 原地排序
 * - 不稳定排序
 * - 对于小规模数据比较高效
 * - 交换次数比冒泡排序少
 */

type CompareFunction<T> = (a: T, b: T) => number;

/**
 * 选择排序函数
 * @param arr 需要排序的数组
 * @param compareFn 可选的比较函数
 * @returns 排序后的数组（原地排序）
 */
export function selectionSort<T>(
    arr: T[],
    compareFn: CompareFunction<T> = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
): T[] {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        // 在未排序区间找到最小元素的索引
        for (let j = i + 1; j < len; j++) {
            if (compareFn(arr[j], arr[minIndex]) < 0) {
                minIndex = j;
            }
        }

        // 如果找到的最小元素不是当前元素，则交换它们
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// 使用示例
/*
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(numbers)); // [11, 12, 22, 25, 34, 64, 90]

const strings = ['banana', 'apple', 'orange', 'grape'];
console.log(selectionSort(strings)); // ['apple', 'banana', 'grape', 'orange']

// 使用自定义比较函数（按字符串长度排序）
const words = ['hello', 'hi', 'greetings', 'hey'];
console.log(selectionSort(words, (a, b) => a.length - b.length)); 
// ['hi', 'hey', 'hello', 'greetings']
*/ 