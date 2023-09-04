import { Separator } from "@radix-ui/react-dropdown-menu"
import * as React from "react"
import { Button } from "./ui/button"

export const Footer: React.FC = () => {
    return (
        <footer className="container p-2 mx-auto flex flex-col gap-4">
            <div className="text-muted-foreground flex-row gap-2 flex-wrap">
                <Button asChild variant={"link"} className="text-muted-foreground hover:text-vk-azure h-auto py-1 px-0.5"><a target="_blank" href="https://vk.com/club206737619">Мы ВКонтакте</a></Button>
                <Button asChild variant={"link"} className="text-muted-foreground hover:text-primary h-auto py-1 px-0.5"><a target="_blank" href="https://www.npmjs.com/org/meduza-bank">Мы в NPM</a></Button>
                <Button asChild variant={"link"} className="text-muted-foreground hover:text-primary h-auto py-1 px-0.5"><a target="_blank" href="https://github.com/meme-bank">Мы в Github</a></Button>
            </div>
            <Separator className="w-full" />
            <p className="text-sm text-muted-foreground">© Народный Банк Мемов, 2020-{new Date().getFullYear()}, Права не защищены, но пиздить не хорошо!</p>
        </footer>
    )
}