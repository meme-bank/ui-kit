import * as React from "react"
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription, DialogFooter } from "./ui/dialog"
import { Loader2 } from "lucide-react"

export const LoadingDialog: React.FC = () => {
    return (
        <Dialog open>
            <DialogContent autoClose>
                <DialogHeader>
                    <DialogTitle>Загрузка...</DialogTitle>
                    <DialogDescription>Заварите чайку, пока мы что-то грузим ;)</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div className="ms-flex ms-items-center ms-justify-center">
                        <Loader2 className="ms-aspect-square ms-w-8 ms-h-8 ms-animate-spin" />
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}