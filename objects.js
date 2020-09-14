var playlist = {
  'Bonobo': 'Cirrus',
  'The Rolling Stones': 'Gimme Shelter'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]:songTitle})
}

updatePlaylist(playlist, 'Arcade Fire', 'Keep The Car Running')
