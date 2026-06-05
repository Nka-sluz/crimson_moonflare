# Evaluationsplan – Crimson Moonflare Band-Website

**Projekt:** Crimson Moonflare – Band-Website (Prototyp)  
**Autorin:** 
**Stand:** Mai 2026  
**Prototyp-URL:** `http://localhost:4200`

---

## 1. Testziel(e)

Der Test soll konkrete Antworten auf folgende Fragen liefern:

1. **Ersteindruck:** Können neue Besucher aus der Zielgruppe (18–25 Jahre) innerhalb von **2 Minuten** verstehen, wer Crimson Moonflare ist, welchen Musikstil die Band vertritt und was sie ausmacht – ohne externe Hilfe?

2. **Konzert & Tickets:** Können bestehende Fans die Tourdaten der Band finden und von der Live-Seite aus innerhalb von **3 Minuten** ohne Abbruch ein Ticket für ein konkretes Konzert kaufen?

3. **Shop & Merch:** Können Nutzer im Shop-Bereich ein Merch-Produkt ihrer Wahl finden, die Detailseite aufrufen und den Kauf-Flow einleiten – alles innerhalb von **3 Minuten** ohne externe Hilfe?

4. **Mobile Navigation:** Können Nutzer auf dem Smartphone, nachdem sie den Shop-Bereich geöffnet haben, innerhalb von **1 Minute** ohne den Browser-Zurück-Button zur Musik-Seite navigieren – und dort erkennen, welche Releases die Band veröffentlicht hat?

---

## 2. Zu prüfende Abläufe (Scope)

### ✅ Im Scope (wird evaluiert)

| Bereich | Geprüfte Abläufe |
|---|---|
| **Startseite** | Hero-Eindruck, Band-Identität, Social-Links, Tour-Strip, Navigation |
| **Bio / Über uns** | Bandgeschichte, Mitglieder, künstlerische Vision – Verständlichkeit |
| **Musik / Diskografie** | Releases finden, Einbettung von Playern, Verlinkung zu Streaming |
| **Tour / Live** | Konzerttermine lesen, Status-Anzeige (On Sale / Few Left / Sold Out), Ticket-Kauf-Flow |
| **Shop – Merch-Tab** | Produktübersicht, Produktdetail aufrufen, Kauf-Button |
| **Shop – Tickets-Tab** | Ticket-Übersicht im Shop, Buy-Button, Checkout-Flow |
| **Kontakt / Booking** | Kontaktformular finden und ausfüllen |
| **Responsive Verhalten** | Mobile (iPhone 13), Tablet (iPad Air), Desktop (1440 px) |

### ❌ Nicht im Scope (bewusst ausgeklammert)

- **Newsletter-Signup** – noch nicht im Prototyp implementiert
- **Echter Zahlungsprozess** – Stripe-Integration ist simuliert, kein realer Checkout
- **Nutzer-Account / Login** – nicht vorgesehen
- **Suchfunktion** – nicht vorhanden
- **News / Blog-Detailseiten** – Inhalt ist Platzhalter, Usability nicht testbar
- **Performance-Tests** – kein Fokus dieser Evaluation

---

## 3. Evaluationsmethode

### 3a – Heuristische Expertenevaluation (mit Klassenkamerad)

Ein Klassenkamerad bewertet den Prototyp eigenständig anhand der **10 Nielsen-Heuristiken**. Er navigiert frei durch alle In-Scope-Bereiche und notiert Probleme direkt im Issue Log (siehe Abschnitt 6). Die Evaluation dauert ca. **20–30 Minuten**. Es findet kein Gespräch während des Tests statt; danach werden Befunde gemeinsam besprochen und priorisiert.

Fokus-Heuristiken für dieses Projekt:
- **H1** Sichtbarkeit des Systemstatus (z. B. aktiver Nav-Link, Ticket-Status)
- **H4** Konsistenz und Standards (z. B. Buttons auf Live- vs. Shop-Seite)
- **H6** Wiedererkennung statt Erinnerung (z. B. Breadcrumb, aktive Seite)
- **H8** Ästhetisches und minimalistisches Design

### 3b – Nutzertest mit einer Testperson ohne IT-Hintergrund

Eine Testperson aus der Zielgruppe (18–25 Jahre, beruflich nicht IT-affin) führt die definierten Tasks (Abschnitt 4) durch. Die Moderatorin beobachtet still, greift **nicht ein** und notiert laut ausgesprochene Gedanken (Thinking Aloud). Die Testperson soll dabei kommentieren, was sie denkt – nicht was sie tut. Anschliessend wird der SUS-Fragebogen ausgefüllt.

Ablauf:
1. Begrüssung & Erklärung (5 Min.)
2. Warm-up-Frage: Wie oft besuchst du Websites von Bands oder Künstlern?
3. Tasks nacheinander vorlesen und durchführen lassen (20–25 Min.)
4. SUS-Fragebogen ausfüllen (5 Min.)
5. Abschlussgespräch: Was hat gefallen, was war schwierig? (5 Min.)

---

## 4. Tasks (Aufgaben)

> **Hinweis zur Formulierung:** Tasks sind aus Nutzersicht formuliert und geben keine Lösungshinweise. Die Moderatorin liest jeden Task laut vor und übergibt das Gerät.

---

### Task 1 – Ersteindruck & Band-Identität

> *Du hast den Bandnamen «Crimson Moonflare» auf Spotify gesehen und willst herausfinden, was das für eine Band ist. Schau dir die Website an und erzähl mir nach 2 Minuten, was du über die Band weisst.*

**Ziel:** Prüft, ob der Hero-Bereich und die Bio-Seite die Band-Identität klar und schnell vermitteln.  
**Gerät:** Smartphone  
**Erwartete Dauer:** max. 2 Min.  
**Abbruchkriterium:** Testperson findet nach 3 Min. keine relevanten Informationen.

---

### Task 2 – Konzertticket finden und kaufen

> *Du erfährst, dass Crimson Moonflare bald auf Tour geht. Finde heraus, ob die Band in einer Stadt in deiner Nähe spielt, und zeig mir, wie du für dieses Konzert ein Ticket kaufen würdest.*

**Ziel:** Prüft die Usability des Live-Bereichs: Tour-Übersicht lesen, Status erkennen, Ticket-Flow starten.  
**Gerät:** Smartphone oder Desktop  
**Erwartete Dauer:** max. 3 Min.  
**Abbruchkriterium:** Testperson bricht nach 4 Min. ab oder gelangt nicht zum Checkout.

---

### Task 3 – Merch-Produkt kaufen

> *Du möchtest jemandem ein Geburtstagsgeschenk machen und hast gehört, dass die Band cooles Merch verkauft. Such dir etwas Passendes aus dem Shop aus und zeig mir, wie du es kaufen würdest.*

**Ziel:** Prüft die Shop-Navigation: Merch-Tab, Produktübersicht, Produktdetailseite, Kauf-Button.  
**Gerät:** Desktop  
**Erwartete Dauer:** max. 3 Min.  
**Abbruchkriterium:** Testperson findet nach 4 Min. keinen Weg zum Produkt oder bricht den Kauf ab.

---

### Task 4 – Musik entdecken (Smartphone, ab Shop)

> *Du hast gerade Merch angeschaut und erinnerst dich, dass die Band kürzlich etwas Neues veröffentlicht hat. Finde heraus, was Crimson Moonflare bisher veröffentlicht hat – ohne den Zurück-Button deines Browsers zu benutzen.*

**Ziel:** Prüft Testziel 4: Ist das mobile Navigationsmenü auffindbar, wenn man tief in der Website ist? Erkennt die Testperson den aktiven Nav-Link, sobald sie auf der Musik-Seite ist? Zusätzlich: Sind Releases und Streaming-Links auf der Musik-Seite verständlich.  
**Gerät:** Smartphone (Startpunkt: Shop-Seite)  
**Erwartete Dauer:** max. 1 Min.  
**Abbruchkriterium:** Testperson findet nach 2 Min. die Musik-Seite nicht oder nutzt den Browser-Zurück-Button.

---

### Task 5 – Kontakt / Booking

> *Du organisierst ein kleines Konzert in deiner Stadt und möchtest anfragen, ob die Band auftreten könnte. Finde heraus, wie du die Band kontaktieren kannst, und zeig mir, was du tun würdest.*

**Ziel:** Prüft die Auffindbarkeit des Kontaktbereichs und die Verständlichkeit des Formulars.  
**Gerät:** Desktop  
**Erwartete Dauer:** max. 2 Min.  
**Abbruchkriterium:** Testperson findet nach 3 Min. keinen Weg zum Kontaktformular.

---

## 5. Rollen

Da es sich um ein Einzelprojekt handelt, übernimmt die Projektautorin alle drei Rollen gleichzeitig. Ein Klassenkamerad übernimmt den Part des Testnutzers.

| Rolle | Person | Aufgabe |
|---|---|---|
| **Moderatorin** | Nataliia Kakhnych | Führt durch den Test, liest Tasks vor, greift nicht ein, stellt nur neutrale Nachfragen |
| **Beobachterin** | Nataliia Kakhnych | Beobachtet Verhalten, notiert Stockungen, Fehler und spontane Kommentare der Testperson |
| **Protokollantin** | Nataliia Kakhnych | Hält alle gefundenen Issues direkt im Issue Log fest (Schweregrad, Beschreibung, Kontext) |
| **Testperson (Heuristik)** | Klassenkamerad | Führt eigenständige Expertenevaluation durch |
| **Testperson (Nutzertest)** | Externe Person ohne IT-Bezug | Führt Tasks durch, kommentiert laut |

---

## 6. Bewertungssystem (Schweregrad)

| Schweregrad | Bedeutung | Beispiel |
|---|---|---|
| **1** | Kosmetisches Problem – nur beheben, wenn Zeit vorhanden | Kleiner Abstand falsch, Farbe leicht inkonsistent |
| **2** | Kleines Problem – niedrige Priorität | Button-Label unklar, aber Aufgabe trotzdem lösbar |
| **3** | Grosses Problem – hohe Priorität | Nutzer findet wichtige Seite nur mit Umwegen |
| **4** | Katastrophe – muss vor Launch behoben werden | Nutzer kann Task nicht abschliessen, Kauf bricht ab |

---

## 7. Verwendeter Fragebogen

Nach dem Nutzertest wird der **SUS-Fragebogen (System Usability Scale)** eingesetzt. Er besteht aus 10 standardisierten Aussagen, die auf einer 5-Punkt-Skala bewertet werden, und liefert einen Gesamtwert von 0–100 zur Gesamtbewertung der Usability.

> Der Fragebogen wird in einer späteren Lektion tatsächlich ausgefüllt und ausgewertet.
