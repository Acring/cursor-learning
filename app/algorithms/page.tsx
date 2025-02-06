import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function AlgorithmsPage() {
  // 获取算法文件列表
  const algorithmsDir = path.join(process.cwd(), 'lib/algorithm');
  const files = fs.readdirSync(algorithmsDir)
    .filter(file => file.endsWith('.ts'))
    .map(file => ({
      name: file.replace('.ts', ''),
      path: `/algorithms/${file.replace('.ts', '')}`
    }));

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          返回首页
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">算法列表</h1>
      <div className="grid gap-4">
        {files.map((algorithm) => (
          <Link 
            key={algorithm.name}
            href={algorithm.path}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-semibold capitalize">
              {algorithm.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
} 