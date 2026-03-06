import MobileNav from "../components/MobileNav";
import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="text-center relative mb-6">
      <div className="text-center mt-16 max-w-5xl m-auto flex flex-col text-balance gap-5 py-6 md:py-0">
        <p className="text-xl">
          <strong>Datenschutzerkl&auml;rung</strong>
        </p>
        <p>
          <strong>Stand:</strong> 01.01.2026
        </p>
        <p>
          Diese Datenschutzerkl&auml;rung informiert Sie &uuml;ber die
          Verarbeitung personenbezogener Daten bei der Nutzung dieser Website.
        </p>
        <ol>
          <li>
            <strong>Verantwortlicher</strong>
          </li>
        </ol>
        <p>
          <strong>Anna Margareta Seniorenzentren gGmbH</strong> <br />
          Von-H&uuml;nefeld-Str. 33 &middot; 49356 Diepholz
        </p>
        <p>
          Telefon: 05441 / 5920-0 &middot; E-Mail:{" "}
          <a href="mailto:info@seniorenhaus-anna-margareta.de">
            info@seniorenhaus-anna-margareta.de
          </a>{" "}
          <br />
          Handelsregister: HRB 100282, Registergericht: Amtsgericht Walsrode
          Gesch&auml;ftsf&uuml;hrerin: Vanessa van Rooij
        </p>
        <p>
          <strong>Diakoniestation Diepholz gGmbH</strong>
          <br />
          Von-H&uuml;nefeld-Str. 18 &middot; 49356 Diepholz
        </p>{" "}
        <p>
          Telefon: 05441 / 7776 &middot; E-Mail:
          info@diakoniestation-diepholz.de
          <br />
          Handelsregister: HRB 203474, &middot; Registergericht: Amtsgericht
          Walsrode
        </p>
        <br />
        {/* <ol>
              <li>
                <strong>Datenschutzbeauftragte/r</strong>{" "}
                <strong>(falls</strong> <strong>vorhanden)</strong>
              </li>
            </ol>
            <p>
              Sofern ein/e Datenschutzbeauftragte/r benannt ist, erreichen Sie
              diese/n unter:{" "}
              <strong>
                [Name oder &bdquo;Externer Datenschutzbeauftragter&ldquo;]{" "}
              </strong>
              <br />
              [E-Mail] [Adresse (optional)]{" "}
              <em>
                (Falls kein/e Datenschutzbeauftragte/r vorhanden ist: Abschnitt
                2 entfernen.)
              </em>
            </p> */}
        <ol>
          <li>
            <strong>Zwecke</strong> <strong>und</strong>{" "}
            <strong>Rechtsgrundlagen</strong> <strong>der</strong>{" "}
            <strong>Verarbeitung</strong>
          </li>
        </ol>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies erforderlich
          ist. Rechtsgrundlagen sind &ndash; je nach Verarbeitung &ndash;
          insbesondere:
        </p>
        <ol>
          <ul>
            <li>
              <strong>Art.</strong> <strong>6</strong> <strong>Abs.</strong>{" "}
              <strong>1</strong> <strong>lit.</strong> <strong>f</strong>{" "}
              <strong>DSGVO</strong> (berechtigtes Interesse, z. B. sicherer
              Betrieb der Website)
            </li>
            <li>
              <strong>Art.</strong> <strong>6</strong> <strong>Abs.</strong>{" "}
              <strong>1</strong> <strong>lit.</strong> <strong>b</strong>{" "}
              <strong>DSGVO</strong> (Vertrag/Anbahnung, falls Sie uns
              kontaktieren &ndash; nur relevant, wenn Kontaktm&ouml;glichkeiten
              genutzt werden)
            </li>
            <li>
              <strong>Art.</strong> <strong>6</strong> <strong>Abs.</strong>{" "}
              <strong>1</strong> <strong>lit.</strong> <strong>c</strong>{" "}
              <strong>DSGVO</strong> (rechtliche Verpflichtung)
            </li>
          </ul>
        </ol>
        <p>
          <strong> 4. Bereitstellung</strong> <strong>der</strong>{" "}
          <strong>Website</strong> <strong>und</strong> <strong>Server-</strong>
          <strong>Logfiles</strong>
        </p>
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Provider und/oder
          den Webserver automatisch Informationen erfasst und in sogenannten{" "}
          <strong>Server-Logfiles </strong>gespeichert. Dies sind
          typischerweise:
        </p>
        <ol>
          <ul>
            <li>IP-Adresse (ggf. anonymisiert)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene Seite/Datei</li>
            <li>&uuml;bertragene Datenmenge</li>
            <li>Referrer-URL (die zuvor besuchte Seite)</li>
            <li>Browsertyp/-version, Betriebssystem</li>
            <li>Hostname des zugreifenden Ger&auml;ts</li>
          </ul>
        </ol>
        <p>
          <strong>Zwecke: </strong>Technische Bereitstellung der Website,
          Stabilit&auml;t, Fehleranalyse sowie Schutz vor Missbrauch/ Angriffen.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse am sicheren, stabilen Betrieb).
        </p>
        <p>
          <strong>Speicherdauer: </strong>Die Logfiles werden in der Regel
          f&uuml;r <strong>30 Tage</strong> gespeichert und anschlie&szlig;end
          gel&ouml;scht, sofern keine sicherheitsrelevante Aufbewahrung (z. B.
          zur Aufkl&auml;rung von Angriffen) erforderlich ist.
        </p>
        <ol>
          <li>
            <strong>Hosting</strong> <strong>/</strong>{" "}
            <strong>Auftragsverarbeitung</strong>
          </li>
        </ol>
        <p>Diese Website wird gehostet bei:</p>
        <p>
          Hetzner Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710
          Gunzenhausen (nachfolgend Hetzner). Details entnehmen Sie der
          Datenschutzerklärung von Hetzner:
          https://www.hetzner.com/de/legal/privacy-policy/.
          <br />
          <br />
          Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
          zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
          Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
          auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG,
          soweit die Einwilligung die Speicherung von Cookies oder den Zugriff
          auf Informationen im Endgerät des Nutzers (z. B.
          Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
          <br />
          <br />
          Auftragsverarbeitung Wir haben einen Vertrag über Auftragsverarbeitung
          (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei
          handelt es sich um einen datenschutzrechtlich vorgeschriebenen
          Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten
          unserer Websitebesucher nur nach unseren Weisungen und unter
          Einhaltung der DSGVO verarbeitet.
        </p>
        <ol>
          <li>
            <strong>Cookies</strong> <strong>/</strong>{" "}
            <strong>Speicherung</strong> <strong>von</strong>{" "}
            <strong>Informationen</strong> <strong>auf</strong>{" "}
            <strong>Endger&auml;ten</strong>
          </li>
        </ol>
        <p>
          Diese Website setzt <strong>keine</strong> <strong>Cookies</strong>{" "}
          <strong>zu</strong> <strong>Marketing-</strong> <strong>oder</strong>{" "}
          <strong>Analysezwecken</strong> ein.
        </p>
        <p>
          Technisch kann es vorkommen, dass der Hosting-Provider bzw. das
          Content-Management-System <strong>notwendige </strong>Cookies oder
          vergleichbare Technologien verwendet (z. B. f&uuml;r
          Sicherheitsfunktionen oder die Auslieferung der Website).
        </p>
        <p>
          <strong>Rechtsgrundlage</strong>
        </p>
        <ol>
          <ul>
            <li>
              Soweit erforderlich: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse) bzw. Art. 6 Abs. 1 lit. c DSGVO
              (Sicherheitsanforderungen)
            </li>
            <li>
              Soweit eine Einwilligung n&ouml;tig w&auml;re, w&uuml;rden wir
              diese vorab einholen. (Auf dieser Website ist das derzeit nicht
              vorgesehen.)
            </li>
          </ul>
        </ol>
        <ol>
          <li>
            <strong> Externe</strong> <strong>Links</strong> <strong>/</strong>{" "}
            <strong>Weiterleitungen</strong>
          </li>
        </ol>
        <p>
          https://seniorenhaus-anna-margareta.de
          <br />
          https://diakoniestation-diepholz.de
          <br />
          https://www.elisabeth-diepholz.de
          <br />
          https://www.seniorenzentrum-rehden.de
        </p>
        <p>
          Wenn Sie auf einen externen Link klicken, verlassen Sie diese Website.
          F&uuml;r die Datenverarbeitung auf den <strong>verlinkten </strong>
          Websites sind die jeweiligen Betreiber verantwortlich. Bitte beachten
          Sie dort die jeweiligen Datenschutzhinweise.
        </p>
        <p>
          Hinweis: Je nach Browser/Endger&auml;t kann beim Anklicken eines Links
          die Referrer-Information an die Zielseite &uuml;bermittelt werden.
          Dies k&ouml;nnen Sie in den Einstellungen Ihres Browsers beeinflussen.
        </p>
        <ol>
          <li>
            <strong>Kontaktaufnahme</strong>
          </li>
        </ol>
        <p>
          Auf dieser Website stellen wir <strong>kein</strong>{" "}
          <strong>Kontaktformular</strong> bereit.
        </p>
        <p>
          Falls Sie uns per E-Mail oder Telefon kontaktieren (Kontaktdaten im
          Impressum), verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage.
        </p>
        <p>
          <strong>Rechtsgrundlage: </strong>Art. 6 Abs. 1 lit. b DSGVO
          (Anbahnung/Erf&uuml;llung) oder Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an effizienter Kommunikation).
        </p>
        <p>
          <strong>Speicherdauer: </strong>Wir l&ouml;schen Anfragen, sobald sie
          nicht mehr erforderlich sind, und bewahren sie nur im Rahmen
          gesetzlicher Aufbewahrungspflichten auf.
        </p>
        <ol>
          <li>
            <strong>Sicherheitsma&szlig;nahmen</strong>{" "}
            <strong>(SSL/TLS)</strong>
          </li>
        </ol>
        <p>
          Diese Website nutzt in der Regel eine{" "}
          <strong>SSL-/TLS-Verschl&uuml;sselung</strong>, um &uuml;bertragene
          Inhalte gegen unbefugte Zugriffe zu sch&uuml;tzen.
        </p>
        <ol>
          <li>
            <strong>Ihre</strong>
            <strong> Rechte</strong>
          </li>
        </ol>
        <p>
          Sie haben &ndash; soweit die gesetzlichen Voraussetzungen vorliegen
          &ndash; folgende Rechte:
        </p>
        <ol>
          <ul>
            <li>
              <strong>Auskunft</strong> (Art. 15 DSGVO)
            </li>
            <li>
              <strong>Berichtigung</strong> (Art. 16 DSGVO)
            </li>
            <li>
              <strong>L&ouml;schung</strong> (Art. 17 DSGVO)
            </li>
            <li>
              <strong>Einschr&auml;nkung</strong> <strong>der</strong>{" "}
              <strong>Verarbeitung</strong> (Art. 18 DSGVO)
            </li>
            <li>
              <strong>Daten&uuml;bertragbarkeit</strong> (Art. 20 DSGVO)
            </li>
            <li>
              <strong>Widerspruch</strong> gegen Verarbeitungen auf Basis von
              Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)
            </li>
          </ul>
        </ol>
        <p>
          <strong>Widerspruchsrecht:</strong> Wenn wir Daten auf Grundlage
          berechtigter Interessen verarbeiten, k&ouml;nnen Sie aus Gr&uuml;nden,
          die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch
          einlegen.
        </p>
        <p>
          <strong> 11. Beschwerderecht</strong> <strong>bei</strong>{" "}
          <strong>der</strong> <strong>Aufsichtsbeh&ouml;rde</strong>
        </p>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbeh&ouml;rde
          zu beschweren. Zust&auml;ndig ist in der Regel die
          Aufsichtsbeh&ouml;rde Ihres &uuml;blichen Aufenthaltsortes oder
          unseres Sitzes.
        </p>
        <p>
          F&uuml;r Niedersachsen (falls Sitz in Niedersachsen):{" "}
          <strong>Die</strong> <strong>Landesbeauftragte</strong>{" "}
          <strong>f&uuml;r</strong> <strong>den</strong>{" "}
          <strong>Datenschutz Niedersachsen (LfD Niedersachsen)</strong>
        </p>
        <ol>
          <li>
            <strong>&Auml;nderungen</strong> <strong>dieser</strong>{" "}
            <strong>Datenschutzerkl&auml;rung</strong>
          </li>
        </ol>
        <p>
          Wir passen diese Datenschutzerkl&auml;rung an, wenn sich die Website
          oder die Datenverarbeitungen &auml;ndern.
        </p>
      </div>
    </div>
  );
}
