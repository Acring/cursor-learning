import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function AlgorithmPage({ params }: { params: { name: string } }) {
  const algorithmPath = path.join(process.cwd(), 'lib/algorithm', `${params.name}.ts`);
  let sourceCode = '';
  
  try {
    sourceCode = fs.readFileSync(algorithmPath, 'utf-8');
  } catch (error) {
    return (
      <div className="p-8">
        <div className="mb-4">
          <Link href="/algorithms" className="text-blue-500 hover:underline">
            ← 返回算法列表
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-red-500">
          算法文件不存在
        </h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-4">
        <Link href="/algorithms" className="text-blue-500 hover:underline">
          ← 返回算法列表
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6 capitalize">{params.name}</h1>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">源代码：</h2>
        <pre className="bg-white p-4 rounded border overflow-x-auto">
          <code>{sourceCode}</code>
        </pre>
      </div>
    </div>
  );
} 