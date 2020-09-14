var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi')

console.log(playlist)

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}

removeFromPlaylist(Slowdive)
