# Employee Performance Tracker

Single-page app: staff scan a QR code and submit a bill + customer feedback; admins see the dashboard.

- **Hosting:** Vercel (static, no build step)
- **Database + admin login:** Firebase (Firestore + Authentication)
- **Code:** GitHub

Files: `index.html` (the app), `firebase-config.js` (your Firebase keys), `firestore.rules` (security), `vercel.json`, `firebase.json`.

## 1. Firebase (once)

1. https://console.firebase.google.com > **Add project** (free Spark plan is enough).
2. **Build > Firestore Database > Create database**, production mode, pick a region near you (e.g. `asia-south1` Mumbai).
3. **Build > Authentication > Get started > Email/Password > Enable.**
   Then **Users > Add user**: your admin email + a strong password. This is the admin login.
4. **Project settings > General > Your apps > Web (`</>`)**, register an app, copy the `firebaseConfig` values into `firebase-config.js`, and set `adminEmail` to the admin email.
5. Open `firestore.rules`, replace `admin@yourcompany.com` with the same admin email, then publish the rules:
   - paste them in **Firestore > Rules > Publish**, or
   - `npm i -g firebase-tools && firebase login && firebase use --add && firebase deploy --only firestore:rules`

## 2. GitHub

```bash
cd employee-performance-tracker
git init
git add .
git commit -m "Employee performance tracker"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/<you>/employee-performance-tracker.git
git push -u origin main
```
(or with GitHub CLI: `gh repo create employee-performance-tracker --private --source=. --push`)

## 3. Vercel

1. https://vercel.com/new > import the GitHub repo.
2. Framework preset **Other**, leave Build Command and Output Directory empty, **Deploy**.
3. Every `git push` to `main` now redeploys automatically.

## 4. After the first deploy

1. Open `https://<your-app>.vercel.app/#admin` and sign in with the admin email password.
2. **Data tab** (default passcode `1234`, change it): set branches, departments, company name; add staff.
3. Print QR codes from the dashboard (Staff tab > QR, or "Open QR code"). They must be generated from the Vercel URL.
4. Moving old data from the local version: in the old copy use **Data > Export backup**, then **Data > Import backup** here.
5. Harden the API key: Google Cloud Console > APIs & Services > Credentials > the browser key > **Website restrictions** > add your Vercel domain.

## How data is protected

| Who | Can do |
|---|---|
| Anyone with the QR link (not logged in) | look up one employee by number, create one entry + photo. Cannot read, list, edit or delete anything |
| Admin (logged in with the admin email) | everything |

- A bill number can only be used once per branch (the document id is built from branch + bill number, and the form cannot overwrite).
- NIC numbers are stored in a separate admin-only collection (`staffPrivate`).
- To stop junk submissions at scale, add Firebase App Check (reCAPTCHA) later.
- Firestore free tier: 50k reads/day. The dashboard reads all entries each time it opens; if you grow past a few thousand entries, add a date filter on the query.
