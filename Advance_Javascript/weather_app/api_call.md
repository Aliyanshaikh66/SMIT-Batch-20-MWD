Bilkul, sirf simple API call `fetch()` se:

```javascript id="simple-fetch"
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data);
}

getData();
```

Ya agar function bhi na banana ho:

```javascript id="direct-fetch"
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();

console.log(data);
```

### Samajhne ka shortcut

```javascript id="fetch-flow"
const response = await fetch(URL); // API call
const data = await response.json(); // JSON data nikalo

console.log(data);
```

* `fetch(URL)` → API ko request bhejta hai.
* `await` → response ka wait karta hai.
* `response.json()` → response ko JavaScript object/array mein convert karta hai.
* `console.log(data)` → data dekhne ke liye.

Interview mein aksar itna basic pattern hi poocha jata hai.
