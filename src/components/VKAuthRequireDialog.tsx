import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { VKAuthButton } from "./ui/vk-auth-button"
import { VKIcon } from "./ui/vk-icon"

export const VKAuthRequireDialog: React.FC<{ connect?: () => void }> = ({ connect }) => {
    return (
        <Dialog open>
            <DialogContent autoClose>
                <DialogHeader>
                    <DialogTitle>
                        <span className="ms-flex ms-items-center ms-justify-center sm:ms-justify-start ms-gap-2">
                            <VKIcon className="ms-h-4 ms-w-4" />
                            Подключение VK ID
                        </span>
                    </DialogTitle>
                    <DialogDescription className="ms-space-y-2">
                        <p>Для использования НБМ, требуется подключить Ваш аккаунт VK ID к Вашей учётной записи НБМ<sup className="ms-text-muted-foreground">Sanctum</sup>. Это требуется для проверки подлинности учётной записи, а также для осуществления привязки государств и организаций к группам VK.</p>
                        <p>Также регистрация новых учётных записей доступна только через предварительную авторизацию через VK ID</p>
                        <p>Для Подключения VK ID к Вашей учётной записи нажмите на кнопку ниже</p>
                        <p>Спасибо, что используете НБМ ;)</p>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <VKAuthButton onClick={connect} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}