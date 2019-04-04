var playlist = new Object({ keys: `0` })

function updatePlayist(playlist,artist,song) {
  playlist[artist]=song
  return playlist
}