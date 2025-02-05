/**
 * 快速排序算法实现
 * @author unknown
 * 
 * 时间复杂度:
 * - 平均情况: O(n log n)
 * - 最坏情况: O(n²) - 当数组已经排序或反向排序时
 * - 最好情况: O(n log n)
 * 
 * 空间复杂度:
 * - O(log n) - 递归调用栈的深度
 * 
 * 特点:
 * - 原地排序
 * - 不稳定排序
 */

type CompareFunction<T> = (a: T, b: T) => number;

/**
 * 快速排序函数
 * @param arr 需要排序的数组
 * @param compareFn 可选的比较函数
 * @returns 排序后的数组（原地排序）
 */
export function quickSort<T>(
    arr: T[],
    compareFn: CompareFunction<T> = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
): T[] {
    // 处理边界情况
    if (arr.length <= 1) {
        return arr;
    }

    /**
     * 分区函数
     * @param low 起始索引
     * @param high 结束索引
     * @returns 基准元素的最终位置
     */
    function partition(low: number, high: number): number {
        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (compareFn(arr[j], pivot) <= 0) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    /**
     * 递归排序函数
     * @param low 起始索引
     * @param high 结束索引
     */
    function quickSortRecursive(low: number, high: number): void {
        if (low < high) {
            const pivotIndex = partition(low, high);
            quickSortRecursive(low, pivotIndex - 1);
            quickSortRecursive(pivotIndex + 1, high);
        }
    }

    quickSortRecursive(0, arr.length - 1);
    return arr;
}

// 使用示例
/*
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(numbers)); // [11, 12, 22, 25, 34, 64, 90]

const strings = ['banana', 'apple', 'orange', 'grape'];
console.log(quickSort(strings)); // ['apple', 'banana', 'grape', 'orange']
*/ 