export class Project
{
    private id: number; // This is used to order items
    private title: string;
    private description: string;
    private imageUrl: string;
    private url: string;

    public constructor({id, title, description, imageUrl, url}: {
        id: number;
        title: string,
        description: string,
        imageUrl: string,
        url: string
    })
    {
        this.id = id
        this.title = title
        this.description = description
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

    public getImageUrl(): string {
        return this.imageUrl
    }

    public getUrl(): string {
        return this.url
    }
}