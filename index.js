window.onload = function () {

    const maxXOffset = 10
    const baseXOffset = 10
    const maxYOffset = 5
    const baseYOffset = 10

    const layers = [
        {element: document.getElementById("layer1"), speed: 1},
        {element: document.getElementById("layer2"), speed: 0.9},
        {element: document.getElementById("layer3"), speed: 0.45},
        {element: document.getElementById("layer4"), speed: 0.2},
        {element: document.getElementById("layer5"), speed: 0.1},
        {element: document.getElementById("layer6"), speed: 0.05},
        {element: document.getElementById("layer7"), speed: 0.025},
        {element: document.getElementById("layer8"), speed: 0.0125},
        {element: document.getElementById("layer9"), speed: 0.005},
        {element: document.getElementById("layer10"), speed: 0}
    ]


    function interpolate(a, b, t) {
        return a + (b - a) * t
    }

    function translateLayer(layer, xOffset, yOffset) {
        layer.element.style.transform = `translate(${xOffset}vw, ${yOffset}vh)`
    }

    function calculateXOffset(layerSpeed, xPercent) {
        let t = xPercent * layerSpeed
        return interpolate(maxXOffset, -maxXOffset, t) - baseXOffset
    }

    function calculateYOffset(layerSpeed, yPercent) {
        let t = yPercent * layerSpeed
        return interpolate(maxYOffset, -maxYOffset, t) + baseYOffset
    }

    function moveLayer(layer, xPercent, yPercent) {
        let xOffset = calculateXOffset(layer.speed, xPercent)
        let yOffset = calculateYOffset(layer.speed, yPercent)
        translateLayer(layer, xOffset, yOffset)
    }

    function moveLayers(xPercent, yPercent) {
        layers.forEach(layer => moveLayer(layer, xPercent, yPercent))
    }

    function onMouseMoved(event) {
        let x = event.clientX
        let y = event.clientY

        let xPercent = x / window.innerWidth
        let yPercent = y / window.innerHeight

        moveLayers(xPercent, yPercent)
    }

    document.onmousemove = onMouseMoved
}

