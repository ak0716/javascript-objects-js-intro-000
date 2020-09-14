var playlist = {
  'Bonobo': 'Cirrus',
  'The Rolling Stones': 'Gimme Shelter'
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName]:songTitle})
  return
}

updatePlaylist(playlist, 'Arcade Fire', 'Keep The Car Running')
