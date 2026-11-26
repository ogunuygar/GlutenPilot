# GlutenPilot v1.0.0 — mobile PWA (first test release)

A local-first food-label review tool. No login, analytics or app backend. English interface. **Not a safety certification or medical decision tool.** Verify every current package, including allergens and cross-contact warnings; missing database information and OCR errors are possible. Coeliac disease and wheat allergy require different decisions.

## GitHub Pages installation

1. Create a repository named `glutenpilot` (public works with GitHub Free). Only upload these application files, not private backups, health notes, or API keys.
2. Extract the ZIP and upload all contents to the repository root, including the `icons` folder. Do not upload the ZIP itself.
3. Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
4. Open the published HTTPS site in Safari on iPhone or Chrome on Android. Allow camera access when scanning.
5. iPhone: Share → Add to Home Screen. Android: browser menu → Install app / Add to Home screen.

## Workflow

Tap **Scan a product**. The app attempts a valid barcode using the native BarcodeDetector where available and ZXing otherwise. It queries Open Food Facts and, if ingredients are missing, USDA FoodData Central (exact GTIN only, public DEMO_KEY subject to quota). If a barcode cannot be read or sufficient product information is unavailable, scan the current ingredients with the rear camera. Tesseract.js reads German, English and Turkish; compare all extracted text against the packaging. If the photo is unclear or cannot be verified, read the full label manually. No positive safety verdict is issued. Product lookup may fail or be incomplete; use current manufacturer information. Internet is required for database lookups and may be required for camera/OCR library downloads.

## Updates

Keep `version.json`, `sw.js`, `app.js`, and the CSS/JS query versions in `index.html` in sync for every release. Publish all files. More → App updates → Check for updates → Update now (when available). Closing all app tabs can also activate a waiting worker. The service worker caches only the application shell, not external APIs or OCR assets. After a successful first load, the shell, local lists and restaurant cards are usable offline. Updates do not clear localStorage. Data is not encrypted and may be erased by browser settings; export data from More. Moving from file:// to the published HTTPS site does not transfer local data automatically. Export is a JSON reference; this version has no restore/import screen.

## Data sources and external code

- Open Food Facts: https://world.openfoodfacts.org/ — product data (ODbL), images subject to their own terms; source links are shown in results.
- USDA FoodData Central: https://fdc.nal.usda.gov/ — fallback; DEMO_KEY rate limits and regional coverage apply.
- ZXing browser 0.1.5 (jsDelivr), Tesseract.js 5.1.1 (jsDelivr and its model/core downloads). OCR runs locally; external downloads require connectivity. Barcode lookups send barcodes to the selected provider. No private photos are uploaded by the app.

## Release limitations

This is the first PWA package. Real phone camera permissions, Safari/Android hardware, live databases and OCR need real-device testing. Do not rely on an automated result for dietary safety.
