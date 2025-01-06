import { Separator } from "@radix-ui/react-dropdown-menu";
import { GithubIcon, HexagonIcon } from "lucide-react";
import * as React from "react";
import { Button } from "./ui/button";
import { TelegramIcon } from "./ui/telegram-icon";
import { VKIcon } from "./ui/vk-icon";

export const Footer: React.FC = () => {
  return (
    <footer className="ms-container ms-p-2 ms-mx-auto ms-flex ms-flex-col ms-gap-4">
      <div className="ms-text-muted-foreground ms-flex-row ms-gap-2 ms-flex-wrap">
        <Button
          asChild
          variant={"linkWithoutColor"}
          className="ms-text-muted-foreground ms-text-vk-azure ms-h-auto ms-py-1 ms-px-0.5"
        >
          <a target="_blank" href="https://vk.com/club206737619">
            <VKIcon className="ms-h-4 ms-w-4 ms-mr-2 ms-fill-vk-azure" />
            Мы ВКонтакте
          </a>
        </Button>
        <Button
          asChild
          variant={"link"}
          className="ms-text-muted-foreground hover:ms-text-primary ms-h-auto ms-py-1 ms-px-0.5"
        >
          <a target="_blank" href="https://t.me/falleland/20">
            <TelegramIcon className="ms-h-4 ms-w-4 ms-mr-2" />
            Мы в Telegram
          </a>
        </Button>
        <Button
          asChild
          variant={"link"}
          className="ms-text-muted-foreground hover:ms-text-primary ms-h-auto ms-py-1 ms-px-0.5"
        >
          <a target="_blank" href="https://www.npmjs.com/org/meduza-bank">
            <HexagonIcon className="ms-h-4 ms-w-4 ms-mr-2" />
            Мы в NPM
          </a>
        </Button>
        <Button
          asChild
          variant={"link"}
          className="ms-text-muted-foreground hover:ms-text-primary ms-h-auto ms-py-1 ms-px-0.5"
        >
          <a target="_blank" href="https://github.com/meme-bank">
            <GithubIcon className="ms-h-4 ms-w-4 ms-mr-2" />
            Мы в Github
          </a>
        </Button>
      </div>
      <Separator className="ms-w-full" />
      <p className="ms-text-sm ms-text-muted-foreground">
        © Народный Банк Мемов, 2020-{new Date().getFullYear()}, Права не
        защищены, но пиздить не хорошо!
      </p>
    </footer>
  );
};
