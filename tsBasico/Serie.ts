export class Serie {
    
  id: number;
  title: string;
  channel: string;
  seasons: number;
  description: string;
  program: string;
  images: string;
    
  
  constructor(id: number, title: string, channel: string, seasons: number, description: string, program: string, images: string){
    this.id = id;
    this.title = title;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.program = program; 
    this.images = images;
  }

}
