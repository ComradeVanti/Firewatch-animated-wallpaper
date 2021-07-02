﻿window.onload = function () {

    const maxMovePercent = 10
    const baseOffset = 10

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

    function translateLayer(layer, offset) {
        layer.element.style.transform = `translate(${offset}vw)`
    }

    function moveLayer(layer, xPercent) {
        let t = xPercent * layer.speed
        let offset = interpolate(maxMovePercent, -maxMovePercent, t) - baseOffset
        translateLayer(layer, offset)
    }

    function moveLayers(xPercent) {
        layers.forEach(layer => moveLayer(layer, xPercent))
    }

    function onMouseMoved(event) {
        let x = event.clientX
        let xPercent = x / window.innerWidth
        moveLayers(xPercent)
    }

    document.onmousemove = onMouseMoved
}

