/**
 * 除法函数实现
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
 * - 支持数值类型相除
 * - 包含除数为0的错误处理
 */

/**
 * 两数相除函数
 * @param a 被除数
 * @param b 除数
 * @returns 两数相除的商
 * @throws 当除数为0时抛出错误
 */
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('除数不能为0');
    }
    return a / b;
}

// 使用示例
/*
console.log(divide(6, 2)); // 3
console.log(divide(10, 5)); // 2
console.log(divide(7, 2)); // 3.5
// console.log(divide(1, 0)); // 抛出错误：除数不能为0
*/

export default divide; 