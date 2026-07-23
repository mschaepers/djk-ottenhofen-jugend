# Mitmachen

Du brauchst **keine Programmierkenntnisse**. Alles geht direkt auf der GitHub-Website im Browser. Nach jedem Speichern baut sich die Website automatisch neu (ca. 1 Minute).

Es gibt **drei Arten von Inhalten**:

1. **Übung** – eine einzelne Trainingsübung.
2. **Einheit** – eine komplette Trainingsstunde, die mehrere **Übungen** kombiniert.
3. **Plan** – ein Wochen-/Saisonplan, der mehrere **Einheiten** in Themenblöcke gliedert.

Einheiten verweisen auf Übungen, Pläne auf Einheiten – jeweils über den **Slug** (siehe Abschnitt „Slugs & Verweise" unten). Immer gleich: passenden Ordner öffnen → **„Add file" → „Create new file"** → Vorlage einfügen & ausfüllen → **„Commit changes"**.

---

## 1. Neue Übung anlegen

Ordner: **`src/uebungen/`**. Dateiname z. B. `dribbel-parcours.md`.

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

Optional unten `## Varianten` ergänzen.

**Erlaubte Werte** (sonst greift der Filter nicht):

| Feld | Erlaubte Werte |
|---|---|
| `kategorie` | `koordination` · `technik` · `spielformen` · `kondition` · `aufwaermen-abschluss` |
| `altersgruppen` | Liste aus `bambini, F, E, D, C, B, A` – z. B. `[F, E]` |
| `spielstaerke` | `alle` · `einsteiger` · `fortgeschritten` |
| `phase` | `aufwaermen` · `hauptteil` · `abschluss` |

**Qualitätsregel:** Eine Übung muss ohne Rückfrage umsetzbar sein – **entweder** den Ablauf vollständig beschreiben **oder** unter `quelleUrl` einen direkten Link angeben. Am besten beides.

---

## 2. Neue Trainingseinheit anlegen

Ordner: **`src/einheiten/`**. Dateiname z. B. `f-dribbling-3.md`. Eine Einheit reiht Übungen in Phasen aneinander.

```markdown
---
layout: einheit.njk
title: "F-Jugend · Dribbling 3"
altersgruppen: [F]
dauer: 75
schwerpunkt: "Dribbling / Ballführung"
phasen:
  - name: "Aufwärmen"
    minuten: 18
    uebungen: [teamfarbe]
  - name: "Hauptteil – Dribbelfußball"
    minuten: 30
    uebungen: [dribbling-mit-dribbeltoren, eins-gegen-eins-dynamisch]
  - name: "Abschluss – Funino"
    minuten: 27
    uebungen: [funino]
---

Optionaler Einleitungstext oder Coaching-Hinweis (kann auch leer bleiben).
```

- `uebungen: [...]` enthält die **Slugs** der Übungen (siehe unten). Reihenfolge = Reihenfolge im Training.
- **Ein Schwerpunkt je Einheit**, Abschluss immer eine Spielform (Funino/Kleinfeld).
- **Zwei erlaubte Phasenmodelle** (beide DFB-konform — `phasen:` nimmt beliebig viele Blöcke):
  - **3-Phasen (SBFV):** Aufwärmen → Hauptteil → Abschluss, F-Jugend ≈ 75 Min (18/30/27), Hauptteil größter Block.
  - **4-Block (DFB „Trainingsphilosophie Deutschland"):** Aktivierung → Spielphase 1 → Zwischenblock → Spielphase 2, F/E ≈ 90 Min (15/30/15/30), Bambini ≈ 70 (10/20/20/20).
  Wähl das Modell, das zu dir passt — einfach die passenden `name`/`minuten` je Phase setzen.

---

## 3. Neuen Trainingsplan anlegen

Ordner: **`src/plaene/`**. Dateiname z. B. `f-saison-aufbau.md`. Ein Plan gruppiert Einheiten in Themenblöcke.

```markdown
---
layout: plan.njk
title: "F-Jugend · Grundlagen-Saison"
altersgruppen: [F]
zeitraum: "15 Wochen · 3 Themenblöcke"
bloecke:
  - thema: "Block 1 – Dribbling & Ballführung"
    wochen: "Woche 1–5"
    einheiten: [f-dribbling-1, f-dribbling-2]
  - thema: "Block 2 – Passen & Ballannahme"
    wochen: "Woche 6–10"
    einheiten: [f-passen-1]
---

Optionaler Einleitungstext.
```

- `einheiten: [...]` enthält die **Slugs** der Einheiten.
- **Empfehlung (validiert):** **block-basiert** planen – mehrere Wochen am selben Schwerpunkt statt jede Woche ein neues Thema. Für die Jüngsten locker halten (siehe Recherche des Trainerteams).

---

## Slugs & Verweise (wichtig)

Der **Slug** ist der Dateiname **ohne `.md`** – klein, mit Bindestrichen. Er steht auch am Ende der Adresse der Seite:

- Übung `funino.md` → Slug **`funino`** → Adresse `…/uebungen/funino/`
- Einheit `f-dribbling-1.md` → Slug **`f-dribbling-1`** → Adresse `…/einheiten/f-dribbling-1/`

In `uebungen:` bzw. `einheiten:` müssen die Slugs **exakt** stimmen (Groß/Klein, Bindestriche). Stimmt ein Slug nicht, erscheint auf der Seite ein Hinweis **„⚠️ … nicht gefunden"** – dann Tippfehler im Slug korrigieren.

---

## Achtung YAML (der Teil zwischen den `---`)

- Werte mit Sonderzeichen in Anführungszeichen setzen.
- **Anführungszeichen im Titel:** dann den ganzen Wert in **einfache** Anführungszeichen setzen, z. B. `title: 'FUNiño „Schneller Abschluss" (6-Sekunden-Regel)'`.
- **Einrückung bei Einheiten/Plänen:** Die Einrückung von `phasen:` / `bloecke:` genau wie in der Vorlage lassen (2 Leerzeichen, jeder Eintrag beginnt mit `- `). Falsche Einrückung bricht den Build.

## Was passiert nach dem Commit?

Ein automatischer Build (GitHub Actions) erzeugt die Website neu und veröffentlicht sie. Erscheint etwas nicht, ist meist ein Tippfehler im YAML oder ein falscher Slug die Ursache – im Reiter **Actions** die letzte fehlgeschlagene Ausführung ansehen.
