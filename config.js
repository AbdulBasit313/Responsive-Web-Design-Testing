const data = {
  // directory name where you want to store all of your images
  dirName: './folderName',
  // website url
  url: 'https://www.google.com/',
  // in case if you want to see only on one device
  device: {
    name: 'Laptop-1', width: 1366, height: 768
  },
  // devices list
  devices: [
    {
      name: 'desktopLarge', width: 1920, height: 1080
    },
    {
      name: 'laptopLarge', width: 1440, height: 768
    },
    {
      name: 'laptop', width: 1020, height: 768
    },
    {
      name: 'tablet', width: 768, height: 800
    },
    {
      name: 'mobileLarge', width: 425, height: 640
    },
    {
      name: 'mobileMedium', width: 375, height: 640
    },
    {
      name: 'mobileSmall', width: 320, height: 667
    },
  ]
}

module.exports = data
