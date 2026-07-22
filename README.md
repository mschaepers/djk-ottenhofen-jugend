# FE-Jugend Wissensdatenbank – DJK Ottenhofen

Öffentliche Trainer-Wissensdatenbank der F- & E-Jugend (DJK Ottenhofen e.V.) als kleine Website.
Inhalt: Trainingsphilosophie, Spielformen/Formate, Übungssammlung, Sportwissenschaft, Einheit-Vorlage, NLZ-Vergleich.

> Enthält **keine personenbezogenen Daten** (keine Kinder-/Trainernamen). Das Trainingskonzept mit Namen liegt bewusst in einem separaten, **privaten** Repo.

## Website

Die Seite wird mit [Docsify](https://docsify.js.org) direkt aus dem Ordner `docs/` gerendert – **kein Build nötig**. Über GitHub Pages (Quelle: Branch `main`, Ordner `/docs`) ist sie als Website erreichbar.

## Mitmachen (ohne Programmierkenntnisse)

1. Im Ordner `docs/` die passende `.md`-Datei öffnen (z. B. `03_Uebungssammlung.md`).
2. Oben rechts auf das Stift-Symbol (✏️) klicken, Text ergänzen.
3. **Commit changes** – fertig. Die Website aktualisiert sich automatisch.

Neue Übungen immer im gleichen Format anhängen (Ziel · Aufbau · Ablauf · Coaching · Für wen · Quelle) und **entweder den Ablauf vollständig beschreiben oder einen direkten Quell-Link angeben**.

## Lokale Vorschau

```bash
cd docs
python -m http.server 4599
# Browser: http://localhost:4599
```
