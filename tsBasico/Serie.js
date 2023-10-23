"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, title, channel, seasons, description, program, images) {
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.program = program;
        this.images = images;
    }
}
exports.Serie = Serie;
