export interface Episode {
  id: string;
  name: string;
  artist: string;
  thumbnail: string;
  banner?: string;
  description?: string;
}

export interface Chapter {
  title: string;
  thumbnail: string;
  uploadedDate: string;
}
