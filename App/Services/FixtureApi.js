export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getPhotos: () => {
    const photoData = require('../Fixtures/photos.json')
    return {
      ok: true,
      data: photoData
    }
  }
}
