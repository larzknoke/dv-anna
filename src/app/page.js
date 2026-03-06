import Image from "next/image";
import MobileNav from "./components/MobileNav";

export default function Home() {
  return (
    <div className="text-center pt-22 relative">
      <div className="flex flex-col md:flex-row align-middle gap-6 md:gap-22 items-center md:items-end">
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

      <h1 className="hidden md:block text-6xl italic font-bold mt-18">
        Pflege leben!
      </h1>
    </div>
  );
}
