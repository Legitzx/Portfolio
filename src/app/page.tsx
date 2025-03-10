import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white py-4 px-8 rounded-md shadow-md">
          <h1 className="text-black text-3xl font-bold">Luciano Kholos</h1>
        </div>
      </div>
     </div>
  );
}
