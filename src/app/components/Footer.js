import MobileNav from "./MobileNav";

export default function Footer() {
  return (
    <footer className="flex justify-between items-end">
      <img
        src="/img/ul_web.png"
        alt="Bottom Left"
        className="w-[50%] max-w-200 object-contain"
      />
      <div className="flex w-full justify-center items-center absolute pb-24 text-center">
        <MobileNav />
      </div>
      <img
        src="/img/ur_web.png"
        alt="Bottom Right"
        className="w-[50%] max-w-200 object-contain"
      />
    </footer>
  );
}
