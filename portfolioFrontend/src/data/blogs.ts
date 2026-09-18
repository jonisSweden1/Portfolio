import type { Component } from "react"

export class Blog
{
    private id: number
    private title: string
    private author: string
    private releaseDate: Date
    private blogSite: Component

    public constructor({id, title, author, releaseDate, blogSite} :
        {
            id: number,
            title: string
            author: string
            releaseDate: Date
            blogSite: Component
        }
    ) 
    {
        this.id = id
        this.title = title
        this.author = author
        this.releaseDate = releaseDate
        this.blogSite = blogSite
    }

    public getId() : number {
        return this.id
    }

    public getTitle() : string {
        return this.title
    }

    public getAuthor() : string {
        return this.author
    }

    public getReleaseDate(): Date {
        return this.releaseDate
    }

    public renderBlogSite() : Component
    {
        return this.blogSite
    }
}

export const blogs: Blog[] = [
    
]