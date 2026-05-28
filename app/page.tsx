import Link from "next/link";

export default function Home() {
  const timetable = [
    { period: 1, subject: "수학" },
    { period: 2, subject: "영어" },
    { period: 3, subject: "정보" },
    { period: 4, subject: "과학" },
  ];

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        오늘 시간표
      </h1>

      <div className="space-y-3">
        {timetable.map((item) => (
          <Link
            href={`/subject/${item.subject}`}
            key={item.period}
            className="block w-full p-4 bg-blue-100 rounded-xl"
          >
            {item.period}교시 - {item.subject}
          </Link>
        ))}
      </div>
    </main>
  );
}