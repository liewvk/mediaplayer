// src/mplayer_backend/main.mo
import MediaRepository "./MediaRepository"; // Use a relative path

actor {
  stable var videoFiles : [Text] = ["sample_video.mp4"];
  stable var audioFiles : [Text] = ["sample_audio.mp3"];

  public query func getVideos() : async [Text] {
    return videoFiles;
  };

  public query func getAudios() : async [Text] {
    return audioFiles;
  };

  public query func getFileBytes(name : Text) : async Blob {
    return MediaRepository.getPlaceholderBlob(name);
  };
}




