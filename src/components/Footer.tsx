import { Separator } from "@radix-ui/react-dropdown-menu"
import * as React from "react"
import { Button } from "./ui/button"

export const Footer: React.FC = () => {
    return (
        <footer className="container p-2 mx-auto flex flex-col gap-4">
            <div className="text-muted-foreground flex-row gap-2 flex-wrap">
                <Button asChild variant={"link"} className="text-muted-foreground hover:text-vk-azure"><a href="https://vk.com/club206737619">Мы ВКонтакте</a></Button>
                <Button asChild variant={"link"} className="text-muted-foreground hover:text-primary-foreground"><a href="https://www.npmjs.com/org/meduza-bank">Мы в NPM</a></Button>
                <Button asChild variant={"link"} className="text-muted-foreground hover:text-primary-foreground"><a href="https://github.com/meme-bank">Мы в Github</a></Button>
            </div>
            <Separator />
            <p className="text-sm text-muted-foreground">© Народный Банк Мемов, 2020-{new Date().getFullYear()}, Права не защищены, но пиздить не хорошо!</p>
        </footer>
    )
}