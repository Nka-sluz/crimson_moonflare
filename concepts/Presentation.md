# Präsentation – Usability-Übung Crimson Moonflare

**Dauer:** ca. 2–3 Minuten  
**Format:** Live-Demo der Website, kein Powerpoint

---

## 1. Webseite: Zielgruppe & Ziele

*(Website öffnen, Startseite zeigen)*

Die Website wurde für die fiktive Band **Crimson Moonflare** entwickelt – Metalcore, Alternative, dunkle Ästhetik.

**Zielgruppe:**  
Primär junge Erwachsene zwischen 18 und 25, sekundär Teenager ab 13. International, mobil-affin – sie entdecken die Band über Spotify oder Instagram und landen dann auf der Website.

**Was sie hier erreichen sollen:**  
- Die Band kennenlernen *(kurz zur Bio-Seite wechseln)*  
- Konzerttickets finden und kaufen *(Live-Seite zeigen)*  
- Merchandise kaufen *(Shop kurz zeigen)*  
- Musik entdecken *(Musikseite kurz zeigen)*  
- Über Band-News und Tourtermine informiert bleiben *(News-Seite zeigen)*  
- Kontakt oder Booking-Anfrage stellen

Die gesamte Seite ist Mobile-First entwickelt, weil die Zielgruppe primär am Smartphone unterwegs ist.

---

## 2. Grösstes Problem & Verbesserung

*(Zur Musikseite navigieren, dann Mini-Player in der Sidebar zeigen)*

Das gravierendste Problem, das sowohl die **heuristische Evaluation** als auch der **Nutzertest** unabhängig bestätigt haben:

**Die Play-Buttons hatten keine Funktion** – weder auf der Musikseite noch im Mini-Player in der Sidebar. Die Buttons sahen fertig aus, taten aber nichts.

Das verletzt **H1 – Sichtbarkeit des Systemstatus**: Ein interaktives Element, das auf eine Aktion nicht reagiert, gibt dem Nutzer kein Feedback und erzeugt sofort Misstrauen. Im Nutzertest war die Unsicherheit beim ersten Klick auf einen Track direkt beobachtbar.

**Die Verbesserung:**  
Die vollständige Audio-Integration wurde umgesetzt.

*(Demo: Auf einen Track klicken → er spielt ab. Mini-Player zeigt Titel, Fortschrittsbalken läuft, Prev/Play/Next funktionieren. Beim Wechsel auf eine andere Seite läuft die Musik weiter.)*

Von stummen Dummy-Buttons zu einer funktionierenden Musiksteuerung, die seitenübergreifend aktiv ist.

---

## 3. Wichtigste Erkenntnis

Die wichtigste Erkenntnis aus der ganzen Übung:

**Ein visuell perfekter Button, der nichts tut, zerstört das Vertrauen schneller als ein hässlicher Button, der funktioniert.**

Als Entwicklerin war ich zu sehr in der Designperspektive: Die Website sah fertig aus – und das hat mich geblendet. Die Evaluation hat mich gezwungen, von aussen draufzuschauen.

Dazu: Keine der beiden Methoden wäre allein ausreichend gewesen. Die **Heuristik** findet systematisch, was falsch ist. Der **Nutzertest** zeigt, was wirklich stört – und was überraschend gut funktioniert. Zum Beispiel war der Shop-Flow intuitiver als erwartet, was ohne den Nutzertest unsichtbar geblieben wäre.

Für das nächste Projekt: Interaktive Elemente, die noch nicht funktionieren, klar als «Coming Soon» kennzeichnen – ein leerer Zustand ist ehrlicher als ein stummes Element.
