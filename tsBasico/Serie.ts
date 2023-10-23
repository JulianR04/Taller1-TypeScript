export class Serie {
    
  public id: number;
  public title: string;
  public channel: string;
  public seasons: number;
  public description: string;
  public program: string;
  public images: string;
    
  
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
