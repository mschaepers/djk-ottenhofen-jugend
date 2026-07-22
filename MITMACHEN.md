# Mitmachen – neue Übung anlegen

Du brauchst **keine Programmierkenntnisse**. Alles geht direkt auf der GitHub-Website im Browser. Nach dem Speichern baut sich die Website automatisch neu und die Übung ist nach ca. 1 Minute live – inklusive Filter.

## So legst du eine neue Übung an

1. In diesem Repo den Ordner **`src/uebungen/`** öffnen.
2. Oben rechts **„Add file" → „Create new file"**.
3. Als Dateinamen einen kurzen Namen mit `.md` vergeben, klein und mit Bindestrichen, z. B. `dribbel-parcours.md`.
4. Die **Vorlage** unten hineinkopieren und ausfüllen.
5. Unten **„Commit changes"** klicken und kurz beschreiben, was du gemacht hast.

Das war's. Die Übung erscheint automatisch unter **Übungen** und in den passenden Filtern.

## Vorlage (kopieren & ausfüllen)

```markdown
---
layout: exercise.njk
title: "Name der Übung"
kategorie: technik
altersgruppen: [F, E]
spielstaerke: alle
phase: hauptteil
ziel: "Ein Satz: was trainiert die Übung?"
quelle: "Quelle oder Trainerteam"
quelleUrl: ""
---

## Aufbau
Feldgröße, Spielerzahl, Material.

## Ablauf
Schritt für Schritt, sodass es jeder ohne Rückfrage aufbauen kann.

## Coaching-Punkte
Worauf die Trainer achten.
```

Optional kannst du unten noch `## Varianten` ergänzen.

## Erlaubte Werte (wichtig – sonst greift der Filter nicht)

| Feld | Erlaubte Werte |
|---|---|
| `kategorie` | `koordination` · `technik` · `spielformen` · `kondition` · `aufwaermen-abschluss` |
| `altersgruppen` | Liste aus `bambini, F, E, D, C, B, A` – z. B. `[F, E]` |
| `spielstaerke` | `alle` · `einsteiger` · `fortgeschritten` |
| `phase` | `aufwaermen` · `hauptteil` · `abschluss` |

## Qualitätsregel

Eine Übung muss ohne Rückfrage umsetzbar sein: **entweder** den Ablauf vollständig beschreiben **oder** unter `quelleUrl` einen **direkten Link** zu einer guten Beschreibung angeben. Am besten beides.

## Achtung YAML (der Teil zwischen den `---`)

- Werte mit Sonderzeichen in Anführungszeichen setzen.
- **Kommen im Titel selbst Anführungszeichen vor**, dann den ganzen Wert in **einfache** Anführungszeichen setzen, z. B.:
  `title: 'FUNiño „Schneller Abschluss" (6-Sekunden-Regel)'`
  (Ein doppeltes `"` mitten in einem `"..."`-Wert bricht den Build.)

## Was passiert nach dem Commit?

Ein automatischer Build (GitHub Actions) erzeugt die Website neu und veröffentlicht sie auf GitHub Pages. Wenn etwas nicht erscheint, ist meist ein Tippfehler im YAML die Ursache – dann im Reiter **Actions** die letzte fehlgeschlagene Ausführung ansehen.
