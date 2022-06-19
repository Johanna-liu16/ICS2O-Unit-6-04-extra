// Copyright (c) 2022 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-04-extra/sw.js", {
    scope: "/ICS2O-Unit-6-04-extra/",
  })
}

;("use strict")

/**
 * This function calculates the volume of a sphere.
 */
window.onload = function() {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const length = params.get('length')
  console.log(length)

  // process
  const area = (Math.pow(length, 2))
  const dimensions = "<ul>\n<li>length = " + length + "</li>\n</ul>"

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}