/**
 * 简单的加法函数实现
 * @author unknown
 * 
 * 时间复杂度:
 * - O(1) - 常数时间复杂度
 * 
 * 空间复杂度:
 * - O(1) - 只使用固定的额外空间
 * 
 * 特点:
 * - 基础数学运算
 * - 支持数值类型相加
 */

/**
 * 两数相加函数
 * @param a 第一个数值
 * @param b 第二个数值
 * @returns 两数之和
 */
function add(a: number, b: number): number {
    return a + b;
}

// 使用示例
/*
console.log(add(5, 3)); // 8
console.log(add(-1, 1)); // 0
console.log(add(0.1, 0.2)); // 0.3
*/

export default add;