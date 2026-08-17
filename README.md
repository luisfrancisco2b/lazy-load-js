# 🖼️ Lazy Loading Images

A high-performance, responsive web application implementing native JavaScript Intersection Observer API to perform progressive image lazy loading, drastically reducing initial page load overhead and optimizing bandwidth consumption.

---

## 📸 Preview

<p align="center">
  <img src="./img/desktop-preview1.png" alt="Desktop Preview1" width="65%">
  <img src="./img/desktop-preview2.png" alt="Desktop Preview2" width="65%">
  <img src="./img/desktop-preview3.png" alt="Desktop Preview3" width="65%">
</p>

## 🚀 Technologies Used

- **HTML5:** Semantic document structuring utilizing dedicated container wrappers and responsive media placeholders.
- **CSS3:** Clean layout styling incorporating global reset rules (`box-sizing`), custom typography scales, structural Flexbox/block layouts, and high-contrast dark mode visuals.
- **JavaScript (ES6+):** Advanced DOM optimization and asynchronous observer implementations featuring:
  - `IntersectionObserver` API for viewport visibility tracking.
  - Dynamic URL string replacement for progressive image quality upgrading (`w=10` to `w=1000`).
  - Target unobserving (`observer.unobserve()`) to ensure optimal memory management and zero redundant callback executions.

---

## 🧠 Core Learnings & Implementation Concepts

The main objective of this project was to master modern Web Performance Optimization (WPO) techniques by dynamically deferring heavy media assets until required by user scrolling behavior. Key architectural concepts mastered include:

1. **Intersection Observer API Integration:** Leveraging browser-native asynchronous viewport observers (`new IntersectionObserver`) instead of scroll-event listeners, eliminating main-thread thrashing and scroll-jank.

2. **Progressive Image Loading Strategy:** Serving ultra-lightweight placeholder thumbnails initially (`w=10` query parameter) and dynamically swapping them with full-resolution assets (`w=1000`) only when elements intersect with the active viewport threshold (`entry.isIntersecting`).

3. **Lifecycle Unobserving Guard:** Programmatically unregistering observed elements (`observer.unobserve(image)`) immediately after the asset swap triggers, preventing unnecessary execution loops and keeping application memory lean.

---

## 📦 How to Run the Project Locally

### 1. Clone this repository:

```bash
git clone https://github.com/luisfrancisco2b/lazy-load-js
```

### 2. Navigate to the project folder

```bash
cd lazy-load-js
```

### 3. 🚀 Running the Project

```bash
Since this is a front-end application, you can run it directly.

Open the `index.html` file in your browser, or run it using an extension like **Live Server** in VS Code:

http://127.0.0.1:5500/index.html
```

## 👨‍💻 Author
