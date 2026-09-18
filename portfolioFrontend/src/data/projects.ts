import highCommandProjectPicture from '../images/Jah3l_.png'
import joyOfCorpsePartyProjectPic from '../images/JoyOfCorpseParty_ProjectPicture.png'

export enum TypeOfProject{
    Independent,
    School,
    CompanyWork
}

export class Project
{
    private id: number; // This is used to order items
    private title: string;
    private description: string;
    private typeOfProject: TypeOfProject;
    private imageUrl: string;
    private url: string;

    public constructor({id, title, description, typeOfProject, imageUrl, url}: {
        id: number;
        title: string,
        description: string,
        typeOfProject: TypeOfProject
        imageUrl: string,
        url: string
    })
    {
        this.id = id
        this.title = title
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
        description:"High Command is a game made in LBS Kreativa Gymnasiet. The game was nominated for best 3D graphics in LBS Awards 2023", 
        typeOfProject:TypeOfProject.School,
        imageUrl:highCommandProjectPicture,
        url:"https://perception-studios.itch.io/high-command"
    }),
    new Project({
        id:1,
        title:"The Joy of Corpse Party",
        description:"The Joy of Corpse Party is a game made by Jonathan Sandström. This game is going to be published as a working prototype in itch.io soon. But meanwhile, there is a GitHub repository for the project.",
        typeOfProject:TypeOfProject.Independent,
        imageUrl:joyOfCorpsePartyProjectPic,
        url:"https://github.com/jonisSweden1/TheJoyOfCorpseParty"
    }),
    new Project({
        id:0,
        title:"Fast Food Simulator",
        description:"Fast Food Simulator is a game made by Jonathan Sandström. Mostly inspired by Fast Food Simulator by No Ceiling Games. This game is going to be an improvement from that game by fixing the game balance.",
        typeOfProject:TypeOfProject.Independent,
        imageUrl:"",
        url:"https://github.com/jonisSweden1/FastFoodSimulator"
    })
]