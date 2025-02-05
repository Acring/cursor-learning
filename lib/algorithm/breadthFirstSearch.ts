/**
 * 广度优先搜索算法实现
 * @author unknown
 * 
 * 时间复杂度:
 * - O(V + E) 其中 V 是顶点数，E 是边数
 * 
 * 空间复杂度:
 * - O(V) 需要一个队列来存储待访问的顶点
 * 
 * 特点:
 * - 按层级遍历
 * - 找到的路径是最短路径
 * - 适用于查找最短路径和层级遍历
 */

// 图的邻接表表示
export type Graph = {
    [key: string]: string[];
};

/**
 * 广度优先搜索函数
 * @param graph 图（邻接表形式）
 * @param start 起始顶点
 * @param target 目标顶点（可选）
 * @returns 如果提供目标顶点，返回从起点到目标的路径；否则返回访问顺序
 */
export function breadthFirstSearch(
    graph: Graph,
    start: string,
    target?: string
): string[] {
    const queue: string[] = [start];
    const visited = new Set<string>([start]);
    const parent = new Map<string, string>();
    
    while (queue.length > 0) {
        const current = queue.shift()!;
        
        if (target && current === target) {
            // 重建路径
            const path: string[] = [];
            let node = target;
            while (node) {
                path.unshift(node);
                node = parent.get(node)!;
            }
            return path;
        }
        
        for (const neighbor of (graph[current] || [])) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                parent.set(neighbor, current);
            }
        }
    }
    
    return target ? [] : Array.from(visited);
}

// 使用示例
/*
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

// 遍历整个图
console.log(breadthFirstSearch(graph, 'A'));
// 输出: ['A', 'B', 'C', 'D', 'E', 'F']

// 查找从A到F的路径
console.log(breadthFirstSearch(graph, 'A', 'F'));
// 输出: ['A', 'C', 'F']
*/ 