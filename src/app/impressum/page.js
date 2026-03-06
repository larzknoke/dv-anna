import MobileNav from "../components/MobileNav";
import Link from "next/link";

export default function Impressum() {
  return (
    <div className="text-center relative">
      <div className="text-center mt-16 max-w-7xl m-auto gap-3 flex flex-col">
        <p className="text-xl">
          <strong>
            Impressum &ndash; Angaben gem&auml;&szlig; &sect; 5 DDG
          </strong>
        </p>
        <p>
          Anna Margareta Seniorenzentren gGmbH
          <br />
          Von-H&uuml;nefeld-Str. 33 &middot; 49356 Diepholz
        </p>
        <p>
          Telefon: 05441 / 5920-0 &middot; E-Mail:
          <Link href="mailto:info@seniorenhaus-anna-margareta.de">
            info@seniorenhaus-anna-margareta.de
          </Link>
          <br />
          Handelsregister: HRB 100282, Registergericht: Amtsgericht Walsrode
        </p>
        <p>
          Diakoniestation Diepholz gGmbH
          <br />
          Von-H&uuml;nefeld-Str. 18 &middot; 49356 Diepholz <br />
          Telefon: 05441 / 7776 &middot; E-Mail:
          info@diakoniestation-diepholz.de
          <br />
          Handelsregister: HRB 203474, Registergericht: Amtsgericht Walsrode
        </p>
        <p>
          Aufsichtsbeh&ouml;rde/Heimaufsicht: <br />
          Landkreis Diepholz, Niedersachsenstr. 2, 49356 Diepholz
        </p>
        <p>Gesch&auml;ftsf&uuml;hrerin: Vanessa van Rooij</p>
      </div>
    </div>
  );
}
