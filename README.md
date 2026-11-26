# GlutenPilot v1.3.0 — Barcode only

English, mobile-first PWA. No account or app backend. Scan a barcode; Open Food Facts is checked first and USDA FoodData Central (exact GTIN only, DEMO_KEY limits) is a fallback if ingredients are missing. If no reliable information is retrieved, read the current package manually. No ingredient-photo/OCR feature or manufacturer/web search links. Database product pictures are optional.

## Result meanings
- Red: possible gluten ingredient, allergen or warning found.
- Green: explicit gluten-free wording in the database with an ingredient list and no detected conflicting terms. **Not a safety guarantee.**
- Amber: insufficient information, wheat-free only, oats, other ambiguity or possible cross-contact.

Affirmative free-from wording (including Weizenfrei, Weizenfree, wheat-free, gluten-free, glutenfrei, without gluten) is not itself a warning. Independent ingredients, allergen tags and trace warnings remain active. Negated claims are treated cautiously. Always verify the actual package. Wheat allergy is distinct from coeliac disease. Database records can be stale, incomplete or incorrect.

## Install / update
Upload all ZIP contents, including icons/, to your existing GitHub Pages repository root. Open HTTPS in Safari or Chrome and allow camera access. More → Check for updates → Update now. Your previous storage key is unchanged; old recipes, shopping lists and diary entries remain in the JSON export even though their screens are removed. Recheck old saved scans; old results are not recalculated automatically.

Data: Open Food Facts (ODbL; https://world.openfoodfacts.org/), USDA FoodData Central (https://fdc.nal.usda.gov/). ZXing browser 0.1.5 via jsDelivr is the fallback scanner. Internet required for lookups and first fallback library load. Local data is not encrypted. Real hardware and live API results require device testing.
