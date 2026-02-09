Bilkul! Yahan **Windows ke liye Surge website hosting ka pura step-by-step README** hai, jisme sab steps ek hi flow me, concise aur clear diye gaye hain. Aap ise apne GitHub repo me seedha laga sakte hain:

---

# README.md

````markdown
# Static Website Hosting on Surge (Windows)

Ye guide Windows PC par apni static website Surge par host karne ka poora process batati hai.

---

## Requirements

- Node.js aur npm installed honi chahiye. CMD me check karen:

  ```cmd
  node -v
  npm -v
````

* Website files ka folder jisme `index.html` file zaroori hai.

Agar Node.js nahi hai, to [nodejs.org](https://nodejs.org/en/download/) se latest LTS version download karen.

---

## Step-by-Step Hosting Guide

1. **CMD open karen:**
   `Windows + R` → type `cmd` → Enter

2. **Surge install karen:**
   CMD me ye command chalayein:

   ```cmd
   npm install -g surge
   ```

3. **Website folder me jayein:**
   Example agar folder Desktop pe hai:

   ```cmd
   cd Desktop
   cd mywebsite
   ```

4. **Folder ke andar files check karen:**

   ```cmd
   dir
   ```

   Yahan `index.html` dikhna chahiye.

5. **Surge deploy command chalayen:**

   ```cmd
   surge
   ```

   * Apna **email** daalein
   * **Password** set karen (pehli baar)
   * Folder path confirm karen (default current folder hota hai)
   * Apni website ka **domain name** choose karen (default `mywebsite.surge.sh` ya koi custom)

6. **Deployment success hone par URL milega:**
   Browser me URL open karke apni website live dekhein.

7. **Website update karne ke liye:**
   Files me changes karen, phir:

   ```cmd
   surge
   ```

   Same domain pe website update ho jayegi.

---

## Password Bhool Jaane Par

CMD me likhein:

```cmd
surge logout
surge
```

Phir email pe aayega password reset link.

---

## Troubleshooting Tips

* `index.html` folder me zaroor hona chahiye
* Agar npm permission error de to CMD Administrator mode me chalayein
* CMD me sahi folder me hone ka dhyan rakhein

---

## Useful Links

* [Download Node.js for Windows](https://nodejs.org/en/download/)
* [Surge Help Docs](https://surge.sh/help/getting-started-with-surge)

---

## Author

Aliyan Shaikh
