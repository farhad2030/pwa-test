const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/index.html",
  "/style.css",
  //   "/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
];
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches
      .open(staticDevCoffee)
      .then((cache) => {
        console.log("open cache");
        return cache.addAll(assets);
      })
      .catch((e) => {
        console.log("not catch");
      })
  );
});
self.addEventListener("activate", (activateEvent) => {
  console.log("services worker is open");
});

// self.addEventListener('install', (event) => {
//     console.log('Inside the install handler:', event);
//   });

//   self.addEventListener('activate', (event) => {
//     console.log('Inside the activate handler:', event);
//   });
