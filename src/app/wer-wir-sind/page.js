import Image from "next/image";
import CornerImages from "../components/CornerImages";
import MobileNav from "../components/MobileNav";

export default function WerWirSind() {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      <CornerImages />

      <main className="relative z-10 flex  justify-center min-h-screen px-10 md:px-16 py-16 md:py-32">
        <div className=" text-center">
          <Image
            src={"/img/dv-anna-logo.svg"}
            alt="DV Anna Logo"
            width={400}
            height={300}
            className="m-auto"
          />

          <div className="flex flex-col md:block md:columns-2 text-left mt-16 gap-2 md:gap-14 max-w-7xl m-auto">
            <p>
              Der <strong>DIAKONISCHE VERBUND ANNA MARGARETA</strong> vereint
              vier Einrichtungen unter einem Dach: das Anna Margareta
              Seniorenhaus, die Tagespflege Elisabeth, das Seniorenzentrum
              Rehden und die Diakoniestation Diepholz. Getragen wird der
              Diakonische Verbund von der Anna Margareta Stiftung Grafschaft
              Diepholz e.V. Abgerundet wird unser Angebot durch betreutes Wohnen
              sowie zwei Senioren-WGs. Gemeinsam stehen wir für Pflege, die den
              Menschen in den Mittelpunkt stellt – mit Würde, Respekt und echter
              Zuwendung. Ob stationär, teilstationär oder ambulant: Wir arbeiten
              eng zusammen, teilen Erfahrung und Fachwissen und schaffen so
              verlässliche Übergänge und passende Angebote aus einer Hand.
            </p>
            <p>
              <strong>PFLEGE LEBEN!</strong> – das ist unser verbindender
              Anspruch: nah am Menschen, professionell im Handeln und getragen
              von diakonischen Werten.
            </p>
          </div>
          <MobileNav />
        </div>
      </main>
    </div>
  );
}
