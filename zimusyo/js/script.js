"use strict";

  window.addEventListener("load", () => {
    // 少し間を置いてから雲を開く
    setTimeout(() => {
      document.body.classList.add("is-loaded");
    }, 300);
  });

