
# MERN Progressive Web Application 

A full-stack **MERN (MongoDB, Express, React, Node.js)** Progressive Web Application with:
- Offline support via Service Workers
- Mobile-friendly UI with home screen install option
- Run as a software in your Laptop/PC

---

## 🚀 Features

- ✅ Full MERN Stack Integration
- ✅ React frontend powered by Vite
- ✅ Express backend with RESTful API
- ✅ MongoDB for data storage
- ✅ Push Notifications using `web-push`
- ✅ Service Worker caching for offline support
- ✅ PWA manifest for Android/iOS installability

---

## 🧱 Tech Stack

| Layer       | Technology                |
|-------------|---------------------------|
| Frontend    | React + Vite + Tailwind CSS |
| Backend     | Node.js + Express         |
| Database    | MongoDB                   |
| Push System | Web Push API + VAPID      |
| Offline     | Service Worker + Cache API |
| Deploy      | Serve or Vercel + Render  |

---


## 🛠️ Setup Instructions For Frontend
```
Step 1:  cd frontend  => run npm i or npm install
```
```
Step 2 : npm run dev 
```

After successfully code run and checking then create `manifest.json` file in `/public` folder in frontend side write your basic app needed data like name, short_name, start_url, display, background_color, theme_color, orientation and add icons with `192 * 192 `and `512 * 512 ` size to show in mobile app.

Now, create a service worker file its a heart of pwa web app. Create in `/public` folder with name like `sw.js`.

In this file write code for what your app show in application or software its also support offline to show data with unstable internet with push notifications.

At the end, add below code in `main.jsx` to check manifest and service worker properly work or not 
```
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('✅ Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}
```

After then add two images for icon make sure its size should be match with `manifest.json` file mention icons image sizes.

If its run successfully then in your laptop `install icon show in your top right side of bar` then click on install and download it.

Next after all successfully work then build your app using `npm run build`

Now install `npm i serve `. Its is zero-config Node.js static server. Testing your frontend like it's in production, especially when you're building a PWA (Progressive Web App).

After install run `serve -s dist` this command that generate two port links to check your app. Use Local link to check in desktop or pc and use Network link to check in your phone. 

| Type       | Link                |
|-------------|---------------------------|
| Local    | http://localhost:3000 |
| Network     | http://192.168.x.x:3000         |

Now use this link to check in your device after checking you can add your web application in your System using to click `Add to Home` button in mobile and in laptop/pc on right side top `install icon` show to download it


## 🛠️ Setup Instructions For backend

```
Step 1:  cd backend
```
```
Step 2 : Install mongoose, dotenv etc packages using npm i 
```
```
Step 3 : nodemon app.js and also connect mongoDB 
```

Now, your app is run in every platform.
