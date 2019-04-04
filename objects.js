var playlist = new Object({ keys: `0` })

function updatePlayist(playlist,artistName,songTitle) {
  playlist[artistName]=songTitle
  return playlist
}