import { Separator } from "@radix-ui/react-dropdown-menu"
import * as React from "react"
import { Button } from "./ui/button"

export const Footer: React.FC = () => {
    return (
        <footer className="ms-container ms-p-2 ms-mx-auto ms-flex ms-flex-col ms-gap-4">
            <div className="ms-text-muted-foreground ms-flex-row ms-gap-2 ms-flex-wrap">
                <Button asChild variant={"link"} className="ms-text-muted-foreground hover:ms-text-vk-azure ms-h-auto ms-py-1 ms-px-0.5"><a target="_blank" href="https://vk.com/club206737619">Мы ВКонтакте</a></Button>
                <Button asChild variant={"link"} className="ms-text-muted-foreground hover:ms-text-primary ms-h-auto ms-py-1 ms-px-0.5"><a target="_blank" href="https://www.npmjs.com/org/meduza-bank">Мы в NPM</a></Button>
                <Button asChild variant={"link"} className="ms-text-muted-foreground hover:ms-text-primary ms-h-auto ms-py-1 ms-px-0.5"><a target="_blank" href="https://github.com/meme-bank">Мы в Github</a></Button>
            </div>
            <Separator className="ms-w-full" />
            <p className="ms-text-sm ms-text-muted-foreground">© Народный Банк Мемов, 2020-{new Date().getFullYear()}, Права не защищены, но пиздить не хорошо!</p>
        </footer>
    )
}