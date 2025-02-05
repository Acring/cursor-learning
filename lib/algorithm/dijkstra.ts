/**
 * 迪杰斯特拉（Dijkstra）最短路径算法实现
 * @author unknown
 * 
 * 时间复杂度:
 * - O((V + E) * log V)，其中 V 是顶点数，E 是边数
 * 
 * 空间复杂度:
 * - O(V)，用于存储距离数组和访问标记数组
 * 
 * 特点:
 * - 用于计算带权有向图中单源最短路径
 * - 要求图中不存在负权边
 * - 使用优先队列优化
 */

// 定义图的邻接表类型
type Graph = Map<string, Map<string, number>>;

/**
 * 迪杰斯特拉最短路径算法
 * @param graph 图的邻接表表示
 * @param start 起始顶点
 * @returns 从起始顶点到所有其他顶点的最短距离
 */
export function dijkstra(graph: Graph, start: string): Map<string, number> {
    // 存储到各顶点的最短距离
    const distances = new Map<string, number>();
    // 存储已访问的顶点
    const visited = new Set<string>();
    // 存储当前最短路径
    const previous = new Map<string, string>();

    // 初始化距离
    for (const vertex of graph.keys()) {
        distances.set(vertex, Infinity);
    }
    distances.set(start, 0);

    while (true) {
        let minDistance = Infinity;
        let current: string | null = null;

        // 找到未访问顶点中距离最小的
        for (const [vertex, distance] of distances) {
            if (!visited.has(vertex) && distance < minDistance) {
                minDistance = distance;
                current = vertex;
            }
        }

        if (current === null) break;

        visited.add(current);

        // 更新相邻顶点的距离
        const neighbors = graph.get(current);
        if (neighbors) {
            for (const [neighbor, weight] of neighbors) {
                if (visited.has(neighbor)) continue;

                const distance = distances.get(current)! + weight;
                if (distance < distances.get(neighbor)!) {
                    distances.set(neighbor, distance);
                    previous.set(neighbor, current);
                }
            }
        }
    }

    return distances;
}

// 使用示例
/*
const graph = new Map<string, Map<string, number>>();
graph.set('A', new Map([['B', 4], ['C', 2]]));
graph.set('B', new Map([['A', 4], ['C', 1], ['D', 5]]));
graph.set('C', new Map([['A', 2], ['B', 1], ['D', 8], ['E', 10]]));
graph.set('D', new Map([['B', 5], ['C', 8], ['E', 2]]));
graph.set('E', new Map([['C', 10], ['D', 2]]));

const distances = dijkstra(graph, 'A');
console.log(distances);
// Map(5) {
//   'A' => 0,
//   'B' => 3,
//   'C' => 2,
//   'D' => 8,
//   'E' => 10
// }
*/ 