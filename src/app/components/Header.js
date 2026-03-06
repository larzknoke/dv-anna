import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-start mb-16 md:mb-0">
      <img
        src="/img/ol_web.png"
        alt="Top Left"
        className="w-[50%] max-w-200 object-contain"
      />
      <div className="flex w-full justify-center items-center absolute pt-18 md:pt-24">
        <Image
          src="/img/dv-anna-logo.svg"
          alt="DV Anna Logo"
          width={400}
          height={300}
          className="m-auto w-56 md:w-[30%] md:max-w-100 h-auto"
        />
      </div>
      <img
        src="/img/or_web.png"
        alt="Top Right"
        className="w-[50%] max-w-200 object-contain"
      />
    </header>
  );
}
