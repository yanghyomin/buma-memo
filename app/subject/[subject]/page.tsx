"use client";

import { use } from "react";
import { useState } from "react";

export default function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = use(params);
    
  const decodedSubject = decodeURIComponent(subject);

  const [memo, setMemo] = useState("");

  return (
    <main className="p-10 space-y-5">
      <h1 className="text-3xl font-bold">
        {decodedSubject} 정리 페이지
      </h1>

      <textarea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="오늘 배운 내용을 입력하세요..."
        className="w-full h-60 p-4 border rounded-xl"
      />

      <button className="px-5 py-3 bg-blue-500 text-white rounded-xl">
        저장하기
      </button>
    </main>
  );
}