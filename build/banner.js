'use strict'

const pkg = require('./../package.json')
const year = new Date().getFullYear()

function getBanner() {
  return `/*!
  * Dominik Riedig - Hub v${pkg.version} (${pkg.homepage})
  * Copyright 2020-${year} ${pkg.author}
  * Custom Script, handwritten. All rights reserved.
  */`
}

module.exports = getBanner
