# Redux Persist Shopping Cart 🛒

## Step-by-Step Guide to Complete the Assignment

---

## 📦 Step 0: Install Dependencies

```bash
npm install
# or
npm install redux-persist
```

---

## 🔑 Key Files Modified

### 1. `src/redux/store.js` — TASK 1
This is the most important file. Here's what changed and WHY:

```javascript
// BEFORE (no persistence):
const store = configureStore({
  reducer: { cart: cartReducer }
});
export default store;

// AFTER (with redux-persist):
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", storage, whitelist: ["cart"] };
const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: { cart: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: { ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"] } })
});

export const persistor = persistStore(store);
export default store;
```

### 2. `src/redux/provider.js` — TASK 2
Wrap the app with PersistGate:

```javascript
// BEFORE:
<Provider store={store}>{children}</Provider>

// AFTER:
<Provider store={store}>
  <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
    {children}
  </PersistGate>
</Provider>
```

---

## 🚀 How to Run

```bash
npm run dev
# Open http://localhost:3000
```

---

## ✅ Test Cases

| Test | Steps | Expected |
|------|-------|----------|
| 1 | Add item → Refresh | Item still in cart |
| 2 | Add 3 items → Refresh | All 3 items persist |
| 3 | Change quantity → Refresh | Quantity preserved |
| 4 | Remove item → Refresh | Item gone |
| 5 | Clear cart → Refresh | Empty cart |

**Check localStorage in DevTools:**
```javascript
JSON.parse(localStorage.getItem('persist:root'))
```

---

## 💡 Key Concepts Explained

### redux-persist
A library that automatically saves Redux state to localStorage and restores it on page load.

### persistConfig
```javascript
{
  key: "root",       // localStorage key will be "persist:root"
  storage,           // use browser localStorage
  whitelist: ["cart"] // ONLY save cart (ignore other slices)
}
```

### persistReducer
Wraps your reducer to intercept `PERSIST` and `REHYDRATE` actions, handling save/load from localStorage.

### PersistGate
A React component that delays rendering until persisted state has been loaded from localStorage into Redux. Prevents the "flash" of empty cart on refresh.

### Rehydration
The process of loading saved state from localStorage back into Redux when the app starts. Happens automatically.

---

## 🎁 Bonus Features Included

- **Bonus 2**: "Clear Cart" button also calls `persistor.purge()` to clear localStorage
- Cart badge in navbar updates in real-time
- Quantity controls with +/- buttons
- Delete individual items

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with ReduxProvider
│   ├── page.js            # Home page
│   ├── products/
│   │   └── page.js        # 6 products with Add to Cart
│   └── cart/
│       └── page.js        # Cart with quantity controls
├── components/
│   └── Navbar.js          # Navbar with cart badge
└── redux/
    ├── provider.js        # ✅ TASK 2: PersistGate
    ├── store.js           # ✅ TASK 1: redux-persist config
    └── slices/
        └── cartSlice.js   # Cart reducer & actions
```
