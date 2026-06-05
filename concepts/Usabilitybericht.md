# Usabilitybericht – Crimson Moonflare Band-Website

**Modul:** M322  
**Autorin:**  
**Datum:** 1. Juni 2026

---

## 1. Projektübersicht

### 1.1 Beschreibung der Webseite

Die evaluierte Website wurde für die fiktive Band **Crimson Moonflare** entwickelt, die im Metalcore- und Alternative-Bereich verankert ist. Die Band verbindet harte, emotionale Musik mit Themen wie mentale Gesundheit, Selbstfindung und Rebellion – und spricht damit ein junges, international vernetztes Publikum an.

**Zweck:** Die Website dient als erster digitaler Anlaufpunkt für neue Besucher, die die Band über Spotify oder Instagram entdeckt haben. Sie soll sofort vermitteln, wer die Band ist und was sie ausmacht, gleichzeitig aber auch bestehenden Fans einen direkten Weg zu Tickets und Merchandise bieten.

**Zielgruppe:** Junge Erwachsene zwischen 18 und 25 Jahren (primär), sowie Teenager zwischen 13 und 17 Jahren (sekundär). Die Zielgruppe ist international und greift vorwiegend über das Smartphone auf die Website zu.

**Kernfunktionen:**

- **Band-Identität / Bio** – Bandgeschichte, Mitglieder, künstlerische Vision
- **Musik / Diskografie** – Releases mit Tracklisten und Streaming-Verlinkungen (geplant)
- **Tour / Live** – Konzerttermine mit Statusanzeige und Ticket-Kaufflow
- **Shop** – Merchandise-Produkte und Tickets mit simuliertem Checkout (Stripe-Integration geplant)
- **Kontakt / Booking** – Kontaktformular für Veranstalter und Fans

Die Angular-Applikation wurde mit Mobile-First-Ansatz entwickelt und legt besonderen Wert auf eine dunkle, kontrastreiche Ästhetik, die zur Markenidentität der Band passt.

---

## 2. Ergebnisse – Heuristische Evaluation

### 2.1 Vorgehen und verwendete Heuristiken

Die heuristische Evaluation wurde als Expertenevaluation nach den **10 Usability-Heuristiken von Jakob Nielsen** durchgeführt. Die Evaluatorin hat die Website systematisch Seite für Seite durchgegangen und dabei gezielt nach Verstössen gegen die definierten Heuristiken gesucht. Der Schweregrad wurde auf einer Skala von 1 (kosmetisches Problem) bis 4 (Usability-Katastrophe) bewertet. Evaluiert wurden alle im Scope definierten Bereiche: Startseite, Sidebar, Musikseite, Shopseite und Kontaktseite.

### 2.2 Ergebnistabelle

| # | Wo? (URL/Screen) | Problembeschreibung | Heuristik (Hx) | Schweregrad (1–4) |
|---|---|---|---|---|
| 1 | sidebar | 2025 © aber wir sind im 2026 | H1 – Sichtbarkeit des Systemstatus | 1 |
| 2 | sidebar | now playing buttons don't work | H1 – Sichtbarkeit des Systemstatus | 3 |
| 3 | music page | some buttons don't work | Sichtbarkeit des Systemstatus / H4 – Konsistenz und Standards | 3 |
| 4 | home | home screen could give more infos | H6 – Erkennen statt Erinnern | 1 |
| 5 | überall | wenig kontrast, könnte bei hellem enviroment schwer zu lesen sein | H8 – Ästhetisches und minimalistisches Design | 2 |

### 2.3 Kommentar

Die Heuristik **H1 – Sichtbarkeit des Systemstatus** wurde am häufigsten benannt (Probleme 1, 2 und 3). Bei näherer Betrachtung relativieren sich mehrere Befunde jedoch im Kontext des Projekts:

- **Problem 1 (Copyright-Jahr):** Das Copyright-Jahr bezieht sich auf das Jahr der Erstveröffentlichung bzw. Urheberrechtserteilung, nicht auf das laufende Kalenderjahr. «© 2025» ist daher korrekt und entspricht gängiger Praxis – kein Handlungsbedarf.
- **Probleme 2 & 3 (nicht funktionale Buttons):** Der Mini-Player in der Sidebar und die Track-Play-Buttons auf der Musikseite sind bewusst als visuelle Vorschau einer geplanten Funktion eingebaut – die Audio-Integration ist für ein kommendes Website-Update vorgesehen. Die Streaming-Buttons (Spotify, YouTube, Apple Music) sind vorhanden und auffindbar; echte Verlinkungen sind für eine fiktive Band naturgemäss nicht möglich. Die heuristische Beobachtung ist nachvollziehbar und bleibt im Protokoll, da das Fehlen einer Reaktion auf Klicks kurzfristig irritieren kann – die geplante Implementierung wird dies beheben.
- **Problem 4 (Startseite):** Die Startseite ist bewusst auf den ersten visuellen Eindruck ausgerichtet; zusätzliche Textinhalte würden den Hero-Bereich überladen. Die dafür vorgesehene «Who We Are»-Seite erfüllt genau diesen Informationsbedarf – die Navigation dorthin ist klar und direkt erreichbar.
- **Problem 5 (Kontrast):** Der Kontrast der Website wurde vor dem Launch gezielt angepasst, um für den allgemeinen Nutzer eine vollständige Lesbarkeit aller Textelemente sicherzustellen. Für Nutzer mit erhöhtem Kontrastbedarf ist ein High-Contrast-Modus in Planung. Die Beobachtung ist als Sensibilisierung für unterschiedliche Nutzungskontexte wertvoll, stellt aber keinen aktuellen Mangel dar.

---

## 3. Ergebnisse – Nutzertest

### 3.1 Vorgehen

Der Nutzertest wurde als **Think-Aloud-Session** durchgeführt. Die Testperson kommentierte die Website laut, während sie vorgegebene Aufgaben erledigte. Die Rollenverteilung war wie folgt: Eine Person moderierte und stellte Aufgaben, eine weitere Person übernahm die Rolle der stillen Beobachterin und notierte Verhalten, Aussagen und Schwierigkeiten.

**Eingesetzte Tasks (aus dem Evaluationsplan, Abschnitt 15.3):**

- **Task 1:** Ersteindruck & Band-Identität – Wer ist Crimson Moonflare? (Smartphone, max. 2 Min.)
- **Task 2:** Konzertticket finden und kaufen (Smartphone/Desktop, max. 3 Min.)
- **Task 3:** Merch-Produkt kaufen (Desktop, max. 3 Min.)
- **Task 4:** Musik entdecken, ausgehend vom Shop ohne Browser-Zurück-Button (Smartphone, max. 1 Min.)
- **Task 5:** Kontakt/Booking-Anfrage stellen (Desktop, max. 2 Min.)

### 3.2 Ergebnistabelle (Think-Aloud-Evaluation)

| # | Task | Beobachtetes Verhalten | Auffälligkeiten / Probleme | Ergebnis |
|---|---|---|---|---|
| 1 | Ersteindruck & Band-Identität | Testperson navigiert zur Seite «Who We Are» und liest Informationen über die Band und die Mitglieder. Besucht danach die Live-Seite und sieht die bevorstehenden Tourdaten sowie die Möglichkeit, Tickets zu kaufen. Schaut sich die Musik- und die Newsseite an. | Keine grösseren Probleme. Testperson bekommt ein gutes, kohärentes Bild von der Band. | ✅ Erfolgreich |
| 2 | Konzertticket finden und kaufen | Testperson navigiert zur Live-Seite. Das Konzert im Juni ist ausverkauft; es wird ein alternatives Datum in Paris ausgewählt. Findet die Ticket-Kaufseite erfolgreich und schliesst den Kauf ab. | Kein Abbruch, keine Verwirrung. Ausverkaufter Status war sofort erkennbar. | ✅ Erfolgreich |
| 3 | Merch kaufen | Testperson navigiert zur Shop-Seite, wählt Artikel aus, klickt auf «Buy Now», füllt das Formular aus und schliesst den Kauf erfolgreich ab. | Keine Probleme festgestellt. Der Ablauf ist flüssig und intuitiv. | ✅ Erfolgreich |
| 4 | Musik entdecken (ab Shop, Smartphone) | Testperson navigiert von der Startseite zur Musikseite und findet die Releases. Streaming-Service-Buttons (Spotify, YouTube, Apple Music) sind vorhanden und auffindbar. | Testperson sucht nach songgenauen Direktlinks und ist kurz unsicher; erwartet, einzelne Tracks direkt abspielen zu können. Da es sich um eine fiktive Band handelt, sind keine realen Streaming-Profile verlinkbar. | ⚠️ Teilerfolg |
| 5 | Kontakt / Booking | Testperson findet die Kontaktseite, sieht Formular, Themenauswahl und sendet die Buchungsanfrage erfolgreich ab. | Keine Probleme. Das Formular ist klar und einfach zu bedienen. | ✅ Erfolgreich |

### 3.3 Kommentar

Die Testperson war vor allem überrascht davon, dass die Streaming-Buttons auf der Musikseite nicht auf Spotify oder YouTube weiterleiten – sie hatte erwartet, direkt von der Website aus Tracks aufrufen zu können. Dieser Befund bestätigt heuristisches Problem 3: Die Buttons sind visuell vorhanden, tun aber nichts. Es ist festzuhalten, dass die Verlinkung zu Streaming-Plattformen im Evaluationsplan (Abschnitt 15.2) unter «Musik / Diskografie» explizit als zu prüfender Bereich aufgeführt ist – die fehlende Integration ist damit keine absichtliche Auslassung aus dem Scope, sondern ein noch offener Entwicklungsstand.

Das fehlende E-Mail-Validierungsfeld im Ticket-Formular ist im Kontext des Prototyps einzuordnen: Der echte Zahlungsprozess mit Stripe-Integration wurde bewusst aus dem Testscope ausgenommen (vgl. 15.2: «Echter Zahlungsprozess – Stripe-Integration ist simuliert, kein realer Checkout»). Die fehlende Validierung ist daher eine bekannte Einschränkung des aktuellen Entwicklungsstands, sollte aber vor einem echten Launch behoben werden.

Die Testperson war auf der Musikseite kurz unsicher, weil sie erwartet hatte, einzelne Songs direkt abspielen zu können – ein Moment, der die heuristische Kritik an den Play-Icons bestätigt. Die Streaming-Service-Buttons (Spotify, YouTube, Apple Music) wurden gefunden; dass sie zu keinem echten Profil führen, ist der fiktiven Natur des Projekts geschuldet und kein Designfehler. Besser als erwartet lief der gesamte Shop-Flow: Merch-Kauf und Ticket-Checkout wurden ohne Abbruch abgeschlossen, die Formularvalidierung (deaktivierter Button, E-Mail-Inputtyp) wurde nicht beanstandet. Auch Statusanzeigen («Sold Out», «On Sale») und die Navigation zwischen den Seiten wurden positiv wahrgenommen.

---

## 4. Synthese / Massnahmen

### 4.1 Vergleich beider Methoden

**Was beide Methoden gefunden haben:**  
Beide Methoden haben unabhängig voneinander auf die nicht-reagierenden Play-Buttons hingewiesen – die Heuristik als Verstoss gegen H1/H4 (Severity 3), der Nutzertest durch die kurze Unsicherheit der Testperson auf der Musikseite. Dieses Zusammentreffen bestätigt, dass die fehlende Audio-Integration die grösste aktuell spürbare Erwartungslücke darstellt, auch wenn sie für das nächste Update geplant ist.

**Was nur die heuristische Evaluation gefunden hat:**  
Drei weitere Punkte – Copyright-Jahr, Kontrast und Startseiten-Informationsdichte – wurden nur durch die systematische Expertenanalyse benannt. Nach Abgleich mit dem Projektkontext stellen sich diese jedoch als entweder korrekt (Copyright), bereits behoben mit Weiterentwicklung in Planung (Kontrast / High-Contrast-Modus), oder als bewusste Designentscheidung (Startseite) heraus. Die Heuristik hat hier ihren Wert dennoch gezeigt: Sie zwingt dazu, solche Entscheidungen zu begründen und zu dokumentieren.

**Was nur der Nutzertest gefunden hat:**  
Der Nutzertest hat bestätigt, was die Heuristik nicht direkt messen kann: Gesamtnavigation, Shop-Flow und Ticket-Checkout funktionieren aus Nutzersicht intuitiv und ohne Abbruch. Dieser positive Gegenbefund ist mindestens so wertvoll wie die Probleme – er zeigt, dass die Grundstruktur der Website trägt.

### 4.2 Priorisierte Gesamtliste der 5 wichtigsten Usability-Probleme

| Priorität | Problem | Quelle | Status | Begründung |
|---|---|---|---|---|
| 1 | Nicht-reagierende Play-Buttons auf der Musikseite (Tracklist) | Heuristische Evaluation + Nutzertest | Geplant (nächstes Update) | Von beiden Methoden bestätigt: Play-Icons ohne Reaktion erzeugen die stärkste Erwartungslücke. Höchste Priorität für die Audio-Integration. |
| 2 | Nicht-reagierende Steuerelemente im Mini-Player (Sidebar) | Heuristische Evaluation | Geplant (nächstes Update) | Seitenübergreifend sichtbar; Prev/Play/Next-Buttons ohne Funktion fallen besonders auf. Wird mit der Audio-Integration behoben. |
| 3 | Streaming-Buttons ohne Zieldestination (fiktive Band) | Nutzertest | Projektbedingte Einschränkung | Für eine fiktive Band sind keine echten Profil-Links möglich. Ein expliziter Hinweis («Streaming bald verfügbar» o. ä.) könnte die Erwartung besser steuern. |
| 4 | Kontrast unter extremen Umgebungslichtverhältnissen | Heuristische Evaluation | Behoben; High-Contrast-Modus geplant | Für den allgemeinen Nutzer wurde die Lesbarkeit bereits sichergestellt. Ein optionaler High-Contrast-Modus ist als Accessibility-Feature in Planung. |
| 5 | Startseite: Band-Kontext nur über Unterseite erreichbar | Heuristische Evaluation | Bewusste Designentscheidung | Die «Who We Are»-Seite erfüllt diesen Bedarf gezielt; mehr Text auf der Startseite würde den Hero-fokussierten Ersteindruck beeinträchtigen. Kein Handlungsbedarf. |

---

## 5. Reflexion

### 5.1 Was habe ich durch die Evaluation über meine eigene Webseite gelernt?

Die Evaluation hat mir gezeigt, dass ich als Entwicklerin zu sehr in der Designperspektive gefangen war. Mir war wichtig, dass die Website ästhetisch zur Markenidentität von Crimson Moonflare passt – und das ist gelungen. Was ich dabei unterschätzt habe: Interaktive Elemente, die visuell perfekt aussehen, aber keinerlei Funktion haben, zerstören das Vertrauen viel schneller, als ein generisches Design es je könnte. Der Mini-Player und die Play-Buttons auf der Musikseite sind ein klares Beispiel: Sie sehen fertig aus, täuschen aber Funktionalität vor, die noch nicht existiert. Gleichzeitig hat mich der Nutzertest positiv überrascht – der Shop-Flow und die Gesamtnavigation wurden als intuitiv empfunden, was zeigt, dass die Grundstruktur der Website trägt.

### 5.2 Was würde ich beim nächsten Projekt anders machen?

Ich würde **visuelle Platzhalter für geplante Features klarer kennzeichnen** – zum Beispiel mit einem dezenten «Coming Soon»-Zustand statt eines voll gestalteten, aber stummen Buttons. Ein Button, der nichts tut, schafft mehr Verwirrung als sein Fehlen. Ausserdem würde ich frühzeitig einen **Funktionstest aller interaktiven Elemente** als festen Schritt vor jedem Nutzertest einplanen, um den Unterschied zwischen «noch nicht implementiert» und «kaputt» klar zu dokumentieren und kommunizieren.

### 5.3 Persönliche Einschätzung: Welche Methode war wertvoller?

Für mein Projekt war der **Nutzertest die wertvollere Methode** – aber nur in Kombination mit der heuristischen Evaluation. Der Nutzertest hat mir gezeigt, was echte Nutzer tun, fühlen und erwarten. Insbesondere die kurze Unsicherheit beim Klick auf Play-Icons, die nichts taten, war etwas, das ich als Entwicklerin ohne Test nie so direkt wahrgenommen hätte. Die heuristische Evaluation hingegen hat systematisch Probleme aufgedeckt, die im Nutzertest unbemerkt geblieben wären – wie das falsche Copyright-Jahr oder der globale Kontrastverstoss. Keine der beiden Methoden wäre allein ausreichend gewesen: Die Heuristik findet, was falsch ist; der Nutzertest zeigt, was stört – und was überraschend gut funktioniert.
