/**
 * 归并排序算法实现
 * @author unknown
 * 
 * 时间复杂度:
 * - 最好情况: O(n log n)
 * - 最坏情况: O(n log n)
 * - 平均情况: O(n log n)
 * 
 * 空间复杂度:
 * - O(n) - 需要额外的数组空间
 * 
 * 特点:
 * - 稳定排序
 * - 分治算法
 * - 需要额外空间
 */

type CompareFunction<T> = (a: T, b: T) => number;

/**
 * 归并排序函数
 * @param arr 需要排序的数组
 * @param compareFn 可选的比较函数
 * @returns 排序后的新数组
 */
function mergeSort<T>(
    arr: T[],
    compareFn: CompareFunction<T> = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
): T[] {
    // 处理边界情况
    if (arr.length <= 1) {
        return [...arr];
    }

    /**
     * 合并两个已排序的数组
     * @param left 左半部分数组
     * @param right 右半部分数组
     * @returns 合并后的有序数组
     */
    function merge(left: T[], right: T[]): T[] {
        const result: T[] = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (compareFn(left[leftIndex], right[rightIndex]) <= 0) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(
            left.slice(leftIndex),
            right.slice(rightIndex)
        );
    }

    // 分割数组
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // 递归排序并合并
    return merge(
        mergeSort(left, compareFn),
        mergeSort(right, compareFn)
    );
}

// 使用示例
/*
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(numbers)); // [11, 12, 22, 25, 34, 64, 90]

const strings = ['banana', 'apple', 'orange', 'grape'];
console.log(mergeSort(strings)); // ['apple', 'banana', 'grape', 'orange']

// 使用自定义比较函数
const objects = [
    { value: 5 },
    { value: 3 },
    { value: 7 }
];
console.log(mergeSort(objects, (a, b) => a.value - b.value));
// [{ value: 3 }, { value: 5 }, { value: 7 }]
*/

export default mergeSort; 