// Check if browser supports service workers
if ("serviceWorker" in navigator) {
  // Supported
  // So register the service worker first
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("cache-worker.js", { scope: "/" })
      .then((reg) => {
        // Service worker registered
      })
      .catch((err) => {
        console.log("Error while registering service worker : ", err);
      });
  });
} else {
  console.log("Service Worker is not supported by browser.");
}
