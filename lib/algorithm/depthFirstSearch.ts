/**
 * 深度优先搜索(DFS)算法实现
 * @author unknown
 * 
 * 时间复杂度:
 * - O(V + E) 其中 V 是顶点数，E 是边数
 * 
 * 空间复杂度:
 * - O(V) 用于访问标记和递归调用栈
 * 
 * 特点:
 * - 可用于图的遍历
 * - 可用于检测环
 * - 可用于拓扑排序
 * - 适用于树和图结构
 */

// 图节点接口定义
interface GraphNode<T> {
    value: T;
    neighbors: GraphNode<T>[];
}

/**
 * 使用DFS进行图遍历
 * @param node 起始节点
 * @param visited 已访问节点的Set
 * @param result 遍历结果数组
 * @returns 遍历顺序的节点值数组
 */
export function depthFirstSearch<T>(
    node: GraphNode<T>,
    visited: Set<GraphNode<T>> = new Set(),
    result: T[] = []
): T[] {
    // 如果节点已访问，直接返回
    if (visited.has(node)) {
        return result;
    }

    // 标记当前节点为已访问
    visited.add(node);
    // 将当前节点值加入结果数组
    result.push(node.value);

    // 递归访问所有相邻节点
    for (const neighbor of node.neighbors) {
        depthFirstSearch(neighbor, visited, result);
    }

    return result;
}

/**
 * 创建图节点的辅助函数
 * @param value 节点值
 * @returns 新创建的图节点
 */
export function createGraphNode<T>(value: T): GraphNode<T> {
    return {
        value,
        neighbors: []
    };
}

// 使用示例
/*
// 创建一个简单的图结构
const nodeA = createGraphNode('A');
const nodeB = createGraphNode('B');
const nodeC = createGraphNode('C');
const nodeD = createGraphNode('D');

// 设置节点间的连接关系
nodeA.neighbors = [nodeB, nodeC];
nodeB.neighbors = [nodeD];
nodeC.neighbors = [nodeD];
nodeD.neighbors = [];

// 执行深度优先搜索
const result = depthFirstSearch(nodeA);
console.log(result); // ['A', 'B', 'D', 'C']
*/ 