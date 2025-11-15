# Zarządzanie Pracami — Instrukcja

## 📁 Struktura Folderów

Wszystkie prace artystyczne przechowywane są w folderze `public/artworks/`:

```
public/artworks/
├── collections/
│   └── iii-materia/
│       ├── materia-01.jpg
│       └── materia-02.jpg
├── obrazy/
│   ├── obraz-01.jpg
│   └── obraz-02.jpg
├── artefakty/
│   └── artefakt-01.jpg
├── rysunki/
│   └── rysunek-01.jpg
└── instalacje/
    └── instalacja-01.jpg
```

## 🖼️ Dodawanie Nowych Prac

### Krok 1: Dodaj Zdjęcie

1. Przejdź do odpowiedniego folderu w `public/artworks/`
2. Dodaj plik JPG lub PNG z pracą
3. Użyj czytelnej nazwy, np. `obraz-03.jpg`

### Krok 2: Zaktualizuj Metadane

Otwórz plik `src/data/artworks.json` i dodaj wpis do odpowiedniej sekcji:

```json
{
  "id": "obraz-03",
  "title": "Tytuł Pracy",
  "medium": "Olej na płótnie",
  "dimensions": "100 x 120 cm",
  "year": "2024",
  "image": "/artworks/obrazy/obraz-03.jpg"
}
```

### Przykład dla Kolekcji

```json
{
  "collections": [
    {
      "id": "nowa-kolekcja",
      "title": "Nazwa Kolekcji",
      "description": "Opis kolekcji",
      "year": "2024",
      "artworks": [
        {
          "id": "praca-01",
          "title": "Tytuł",
          "medium": "Medium",
          "dimensions": "Wymiary",
          "year": "2024",
          "image": "/artworks/collections/nowa-kolekcja/praca-01.jpg"
        }
      ]
    }
  ]
}
```

## 🔄 Aktualizacja Strony

Po dodaniu nowych plików i zaktualizowaniu JSON:

1. **W środowisku lokalnym**: Odśwież przeglądarkę
2. **W GitHub**: Wypchnij zmiany (`git push`)
3. Strona automatycznie wyświetli nowe prace

## 📐 Zalecenia Techniczne

### Rozmiary Obrazów

- **Miniatury w galerii**: 800-1200px na dłuższym boku
- **Widok pełnoekranowy**: 1920-2400px na dłuższym boku
- **Format**: JPG (80-90% jakości) dla zdjęć, PNG dla grafik

### Nazewnictwo

- Małe litery, bez polskich znaków
- Używaj myślników zamiast spacji: `nazwa-pracy.jpg`
- Numery pomocne przy porządkowaniu: `obraz-01.jpg`

### Optymalizacja

Przed dodaniem do repo, zoptymalizuj obrazy:
- Użyj narzędzi typu [TinyPNG](https://tinypng.com/)
- Zachowaj proporcje oryginału
- Docelowy rozmiar pliku: 200-500KB

## 🗑️ Usuwanie Prac

1. Usuń wpis z `src/data/artworks.json`
2. Usuń plik obrazu z folderu `public/artworks/`
3. Wypchnij zmiany

## 🆕 Dodawanie Nowej Kategorii

### W `src/data/artworks.json`:

```json
{
  "nowa-kategoria": [
    {
      "id": "praca-01",
      "title": "Tytuł",
      "medium": "Medium",
      "dimensions": "Wymiary",
      "year": "2024",
      "image": "/artworks/nowa-kategoria/praca-01.jpg"
    }
  ]
}
```

### Dodaj kategorię do nawigacji:

Edytuj `src/components/Navigation.tsx` i dodaj nowy link w sekcji "Twórczość".

### Utwórz folder:

```
public/artworks/nowa-kategoria/
```

## 🐛 Rozwiązywanie Problemów

**Obraz się nie wyświetla?**
- Sprawdź ścieżkę w JSON (musi zaczynać się od `/artworks/`)
- Upewnij się, że plik faktycznie istnieje w `public/artworks/`
- Sprawdź nazwę pliku (wielkość liter ma znaczenie!)

**Zmiany nie są widoczne?**
- Wyczyść cache przeglądarki (Ctrl+F5)
- Sprawdź czy zmiany zostały wysłane do GitHub
- Poczekaj chwilę na odświeżenie strony

## 📧 Pytania?

Jeśli masz pytania dotyczące zarządzania pracami, skontaktuj się z developerem lub sprawdź dokumentację projektu.
