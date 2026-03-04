import Image from "next/image";
import Nav from "./components/Nav";
import CornerImages from "./components/CornerImages";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      <CornerImages />

      <main className="relative z-10 flex  justify-center min-h-screen px-16 py-32">
        <div className=" text-center">
          <Image
            src={"/img/dv-anna-logo.svg"}
            alt="DV Anna Logo"
            width={400}
            height={300}
            className="m-auto"
          />

          <div className="flex flex-row align-middle gap-22 mt-16 items-end">
            <Image
              src="/img/anna.svg"
              alt="Anna"
              width={0}
              height={0}
              sizes="100vw"
              className="h-17 w-auto"
            />
            <Image
              src="/img/tagespflege.svg"
              alt="Tagespflege"
              width={0}
              height={0}
              sizes="100vw"
              className="h-22 w-auto"
            />
            <Image
              src="/img/rehden.svg"
              alt="Rehden"
              width={0}
              height={0}
              sizes="100vw"
              className="h-22 w-auto"
            />
            <Image
              src="/img/diakonie.svg"
              alt="Diakonie"
              width={0}
              height={0}
              sizes="100vw"
              className="h-14 w-auto"
            />
          </div>

          <h1 className="text-6xl italic font-bold mt-12">Pflege leben!</h1>
          <Nav />
        </div>
      </main>
    </div>
  );
}
