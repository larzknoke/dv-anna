export default function CornerImages() {
  return (
    <>
      <img
        src="/img/ol_web.png"
        alt="Top Left"
        className="fixed top-0 left-0 w-[53%] max-w-200 object-contain pointer-events-none z-[999]"
      />
      <img
        src="/img/or_web.png"
        alt="Top Right"
        className="fixed top-0 right-0 w-[53%] max-w-200 object-contain pointer-events-none z-[999]"
      />
      <img
        src="/img/ul_web.png"
        alt="Bottom Left"
        className="fixed bottom-0 left-0 w-[53%] max-w-200 object-contain pointer-events-none z-[999] hidden md:block"
      />
      <img
        src="/img/ur_web.png"
        alt="Bottom Right"
        className="fixed bottom-0 right-0 w-[53%] max-w-200 object-contain pointer-events-none z-[999] hidden md:block"
      />
    </>
  );
}
