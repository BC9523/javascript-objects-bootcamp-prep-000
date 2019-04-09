var playlist = {'Saint Raymond':'Come back to you'};

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}