/**
 * 堆排序算法实现
 * @author unknown
 * 
 * 时间复杂度:
 * - O(nlogn) - 建堆O(n)，n次调整O(logn)
 * 
 * 空间复杂度:
 * - O(1) - 原地排序算法
 * 
 * 特点:
 * - 不稳定排序
 * - 原地排序
 * - 适合大数据量排序
 */

/**
 * 维护堆的性质
 * @param arr 待调整的数组
 * @param n 堆的大小
 * @param i 需要维护的节点索引
 */
function heapify(arr: number[], n: number, i: number): void {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

/**
 * 堆排序主函数
 * @param arr 待排序数组
 * @returns 排序后的数组
 */
function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // 建立最大堆
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // 逐个从堆中取出最大值
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

// 使用示例
/*
const arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort([...arr])); // [5, 6, 7, 11, 12, 13]
*/

export default heapSort;
