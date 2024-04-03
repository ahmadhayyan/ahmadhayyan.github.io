async function revealAllCircles() {
    const start = performance.now();
    // <circle> elements with a radius of 2 (specified by the r attribute) are the smallest size used on the site, so we want the first circle found in the document that doesn't have this smallest radius
    let current = document.querySelector('svg circle:not([r="2"])');
    while (current) {
        const { top, left, height, width } = current.getBoundingClientRect();
        // Here we fire off two mousemove events on the body, which is what the code on the site looks for. The first one must start outside the circle, so we set the mouse event position 1px up and 1px left (although I would guess this is relative to the box that could be drawn around the circle, rather than the actual edge of the circle). The second must be inside, so we set it at around the center of the circle
        const startOptions = { clientX: left - 1, clientY: top - 1 };
        const endOptions = { clientX: left + width / 2, clientY: top + height / 2 };
        document.body.dispatchEvent(new PointerEvent('mousemove', startOptions));
        // This gives the first event time to get through the event loop, but otherwise taking as little time as possible
        await new Promise(resolve => setTimeout(resolve, 0));
        document.body.dispatchEvent(new PointerEvent('mousemove', endOptions));
        // This grabs the first <circle> in the document that doesn't have a radius of 2, to keep the loop going until there are none left
        current = document.querySelector('svg circle:not([r="2"])');
    }
}
