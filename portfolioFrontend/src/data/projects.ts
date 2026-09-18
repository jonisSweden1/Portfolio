import highCommandProjectPicture from '../images/Jah3l_.png'
import joyOfCorpsePartyProjectPic from '../images/JoyOfCorpseParty_ProjectPicture.png'
import cyborgOfTimeProjectPic from '../images/CoT.png'
import ragnarokEndOfWorlds from '../images/preview-4m4em958.png'

export enum TypeOfProject{
    Independent,
    School
}

export class Project
{
    private id: number; // This is used to order items
    private title: string;
    private author: string;
    private description: string;
    private typeOfProject: TypeOfProject;
    private imageUrl: string;
    private url: string;

    public constructor({id, title, author, description, typeOfProject, imageUrl, url}: {
        id: number;
        title: string,
        author: string;
        description: string,
        typeOfProject: TypeOfProject
        imageUrl: string,
        url: string
    })
    {
        this.id = id
        this.title = title
        this.author = author
        this.description = description
        this.typeOfProject = typeOfProject
        this.imageUrl = imageUrl
        this.url = url
    }

    public getId(): number {
        return this.id
    }

    public getTitle(): string {
        return this.title
    }

    public getAuthor(): string {
        return this.author
    }

    public getDescription(): string {
        return this.description
    }

    public getTypeOfProject(): TypeOfProject {
        return this.typeOfProject
    }

    public getImageUrl(): string {
        return this.imageUrl
    }

    public getUrl(): string {
        return this.url
    }
}

export const projects: Project[] = [
    new Project({
        id:2, 
        title:"High Command", 
        author: "Perception Studios",
        description:"High Command is a game made in LBS Kreativa Gymnasiet. The game was nominated for best 3D graphics in LBS Awards 2023.", 
        typeOfProject:TypeOfProject.School,
        imageUrl:highCommandProjectPicture,
        url:"https://perception-studios.itch.io/high-command"
    }),
    new Project({
        id:1,
        title:"The Joy of Corpse Party",
        author:"Jonathan Sandström",
        description:"The Joy of Corpse Party is a game made by Jonathan Sandström. This game is going to be published as a working prototype in itch.io soon. But meanwhile, there is a GitHub repository for the project.",
        typeOfProject:TypeOfProject.Independent,
        imageUrl:joyOfCorpsePartyProjectPic,
        url:"https://github.com/jonisSweden1/TheJoyOfCorpseParty"
    }),
    new Project({
        id:0,
        title:"Fast Food Simulator",
        author: "Jonathan Sandström",
        description:"Fast Food Simulator is a game made by Jonathan Sandström. Mostly inspired by Fast Food Simulator by No Ceiling Games. This game is going to be an improvement from that game by fixing the game balance.",
        typeOfProject:TypeOfProject.Independent,
        imageUrl:"",
        url:"https://github.com/jonisSweden1/FastFoodSimulator"
    }),
    new Project({
        id:4,
        title: "Cyborg of Time",
        author: "Specinest Studios",
        description:"Cyborg of Time is a first game project made in LBS Kreativa Gymnasiet. It happened to be my first game project using a SCRUM-method.",
        typeOfProject:TypeOfProject.School,
        imageUrl:cyborgOfTimeProjectPic,
        url: 'https://www.indiedb.com/groups/unity-devs/downloads/cyborg-of-time-full-release'
    }),
    new Project({
        id:3,
        title: "Ragnark - End of Worlds",
        author: "Malko Studios",
        description:"Ragnark - End of Worlds is a game made in LBS Kreativa Gymnasiet. There is no download for the game unfornunatelly, so this is what we got.",
        typeOfProject:TypeOfProject.School,
        imageUrl:ragnarokEndOfWorlds,
        url: "https://gamejolt.com/@MalkoStudios"
    })
]