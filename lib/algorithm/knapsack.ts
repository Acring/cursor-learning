/**
 * 0/1背包问题的动态规划实现
 * @author unknown
 * 
 * 时间复杂度:
 * - O(n * W)，其中 n 是物品数量，W 是背包容量
 * 
 * 空间复杂度:
 * - O(n * W)
 * 
 * 特点:
 * - 使用动态规划
 * - 可以得到最优解
 * - 适用于物品不可分割的情况
 */

interface Item {
    weight: number;
    value: number;
}

/**
 * 0/1背包问题求解函数
 * @param items 物品列表，每个物品包含重量和价值
 * @param capacity 背包容量
 * @returns 返回最大价值和选择的物品索引
 */
export function knapsack(items: Item[], capacity: number): {
    maxValue: number;
    selectedItems: number[];
} {
    const n = items.length;
    // 创建动态规划表
    const dp: number[][] = Array(n + 1)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));
    
    // 记录选择
    const selected: boolean[][] = Array(n + 1)
        .fill(false)
        .map(() => Array(capacity + 1).fill(false));

    // 填充动态规划表
    for (let i = 1; i <= n; i++) {
        const item = items[i - 1];
        for (let w = 0; w <= capacity; w++) {
            if (item.weight <= w) {
                const valueWithItem = dp[i - 1][w - item.weight] + item.value;
                if (valueWithItem > dp[i - 1][w]) {
                    dp[i][w] = valueWithItem;
                    selected[i][w] = true;
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // 回溯找出选择的物品
    const selectedItems: number[] = [];
    let currentWeight = capacity;
    for (let i = n; i > 0; i--) {
        if (selected[i][currentWeight]) {
            selectedItems.unshift(i - 1);
            currentWeight -= items[i - 1].weight;
        }
    }

    return {
        maxValue: dp[n][capacity],
        selectedItems
    };
}

// 使用示例
/*
const items: Item[] = [
    { weight: 2, value: 3 },
    { weight: 3, value: 4 },
    { weight: 4, value: 5 },
    { weight: 5, value: 6 }
];
const capacity = 8;
const result = knapsack(items, capacity);
console.log('最大价值:', result.maxValue);
console.log('选择的物品索引:', result.selectedItems);
*/ 