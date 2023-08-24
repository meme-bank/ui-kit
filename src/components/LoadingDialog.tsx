import * as React from "react"
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription, DialogFooter } from "./ui/dialog"
import { Loader2 } from "lucide-react"

export const LoadingDialog: React.FC = () => {
    return (
        <Dialog open>
            <DialogContent autoClose>
                <DialogHeader>
                    <DialogTitle>Загрузка...</DialogTitle>
                    <DialogDescription>Заварите чайку, пока мы что-то грузим )</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Loader2 className="aspect-square w-8 h-8 animate-spin" />
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}