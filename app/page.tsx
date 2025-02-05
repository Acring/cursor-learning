import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function Page() {
  // 获取最近的5个算法
  const algorithmsDir = path.join(process.cwd(), 'lib/algorithm');
  const recentAlgorithms = fs.readdirSync(algorithmsDir)
    .filter(file => file.endsWith('.ts'))
    .slice(0, 5)
    .map(file => ({
      name: file.replace('.ts', ''),
      path: `/algorithms/${file.replace('.ts', '')}`
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* 头部区域 */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            算法展示平台
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索、学习和理解各种经典算法的实现。我们提供清晰的代码示例和详细的解释，帮助你掌握算法的精髓。
          </p>
          <div className="mt-8">
            <Link 
              href="/algorithms" 
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              浏览所有算法
            </Link>
          </div>
        </div>

        {/* 特性区域 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">📚 丰富的算法集合</h3>
            <p className="text-gray-600">包含经典排序、搜索、图论等多种算法实现</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">🔍 详细的代码解析</h3>
            <p className="text-gray-600">每个算法都配有源码和详细的实现说明</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">💡 直观的可视化</h3>
            <p className="text-gray-600">通过实例展示算法的运行过程</p>
          </div>
        </div>

        {/* 最近添加的算法 */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6">最近添加的算法</h2>
          <div className="grid gap-4">
            {recentAlgorithms.map((algorithm) => (
              <Link 
                key={algorithm.name}
                href={algorithm.path}
                className="p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-md group"
              >
                <h3 className="text-lg font-semibold capitalize group-hover:text-blue-600 transition-colors">
                  {algorithm.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 