var playlist = {
  'Bonobo' : 'Cirrus',
  'The Rolling Stones' : 'Gimme Shelter'
};

function updatePlaylist(playlist, artistName, songName) {
  return Object.assign({}, playlist, {[artistName]:songName})
}

updatePlaylist(playlist, 'Arcade Fire', 'Keep The Car Running');
