const puppeteer = require('puppeteer')
const fs = require('fs')
const { url, devices, dirName } = require('./config')

const takeScreenshot = async (url, device, dirName) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const { name, width, height } = device

  // Setting-up viewports 
  await page.setViewport({ width, height })

  const newLocation = name

  const options = {
    path: `${dirName}/${newLocation}.png`,
    fullPage: true,
    omitBackground: true,
  }

  await page.goto(url,
    { waitUntil: 'networkidle2' }
  )

  await page.screenshot(options)
  browser.close()
}

const takeMultipleScreenShots = async (url, devices, dirName) => {
  await createDirectory(dirName)
  for (let device of devices) {
    await takeScreenshot(url, device, dirName)
  }
}

// create a directory if doesnt't exits
const createDirectory = async (name) => {
  if (!fs.existsSync(name)) {
    fs.mkdirSync(name)
  }
}

takeMultipleScreenShots(url, devices, dirName)
