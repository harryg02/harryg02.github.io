# Impact Report Portfolio Integration - Step-by-Step Instructions

## STEP 1: Export PDF Pages as Images (5 minutes)

You need to convert the PDF into 4 PNG/JPG images. Choose ONE method:

### Option A: Use an Online Tool (Easiest)
1. Go to https://www.ilovepdf.com/pdf_to_jpg or https://smallpdf.com/pdf-to-jpg
2. Upload `impact-report-usletter-Dec4.pdf`
3. Select "Extract single pages" (not merge)
4. Download the 4 images
5. Rename them to:
   - `impact-report-1.png` (cover page)
   - `impact-report-2.png` (page 2 - meals/recidivism)
   - `impact-report-3.png` (page 3 - facilities/budget)
   - `impact-report-4.png` (page 4 - workforce/pastoral)
6. Move all 4 files to: `/var/home/me/Development/harryg02.github.io/images/ExodusPlace.org/`

### Option B: Use Preview/Acrobat (Mac/Windows)
**Mac:**
1. Open `impact-report-usletter-Dec4.pdf` in Preview
2. File → Export → Format: PNG
3. Save all pages
4. Rename as above and move to `images/ExodusPlace.org/`

**Windows:**
1. Open PDF in Adobe Acrobat/Reader
2. File → Export To → Image → PNG
3. Export all pages
4. Rename and move as above

---

## STEP 2: Add HTML to Exodus Place Page (2 minutes)

1. Open `exodusplace.org.html`
2. Find line 469 (the Brand Guidelines image section)
3. After the closing `</div>` on line 469, **paste the entire contents** of `impact-report-section.html`

**Visual Guide:**
```
Line 467: <img class="..." src=".../Exodus-Place-Brand-Guidelines.png" ...>
Line 468:   <p class="...">Brand Guidelines</p>
Line 469: </div>

👉 PASTE IMPACT REPORT SECTION HERE 👈

Line 470:
Line 471: <!-- text block -->
Line 472: <div class="lg:mx-[9vh]...">
```

---

## STEP 3: Verify It Works (1 minute)

1. Open `exodusplace.org.html` in your browser
2. Scroll to the bottom
3. You should see:
   - Brand Guidelines section
   - **NEW: Impact Report Design section** with 4 report pages
   - Results and Impact section (already existed)

---

## WHAT THIS ACCOMPLISHES FOR ADOBE

✅ **Shows data visualization skill** - The pie chart and statistical layouts prove you can visualize complex data
✅ **Shows translation ability** - You took spreadsheet metrics and made them donor-friendly
✅ **Directly maps to JD requirement** - Adobe wants "infographics, data visualizations" - you now show exactly that
✅ **Stronger than web-only portfolio** - Most applicants show web redesigns; you show print design + data viz

---

## TROUBLESHOOTING

**Problem:** Images not showing
**Fix:** Check file paths. Make sure:
- Images are in `/images/ExodusPlace.org/`
- File names exactly match: `impact-report-1.png`, `impact-report-2.png`, etc.

**Problem:** Section looks broken
**Fix:** Make sure you pasted the ENTIRE HTML block from `impact-report-section.html`

**Problem:** PDF download doesn't work
**Fix:** Verify `impact-report-usletter-Dec4.pdf` is in the root directory (`/var/home/me/Development/harryg02.github.io/`)

---

## ESTIMATED TIME: 10 MINUTES TOTAL

Once complete, the Exodus Place page will be your **strongest Adobe evidence**.
