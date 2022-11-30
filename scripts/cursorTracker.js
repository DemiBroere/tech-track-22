function cursorTracker() {
    const tracker = document.querySelector(".tracker"); // Selects the tracker from the css. 
    
        document.body.addEventListener("mousemove", e => { // tells the tracker what to do as the mouse moves over the body. 
          tracker.style.left = `${e.clientX}px`;
          tracker.style.top = `${e.clientY}px`;
        })
      }
cursorTracker();