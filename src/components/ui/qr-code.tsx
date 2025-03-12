import vkQr from "@vkontakte/vk-qr";
import * as React from "react";
import MeduzaLogo from "@/../img/svg/icon-swag.svg"
import { Skeleton } from "./skeleton";

export const QrCode: React.FC<{ text: string; suffix?: string; logo?: string; }> = ({ text, suffix, logo }) => {
    if (!text) return (
        <Skeleton className="aspect-square rounded-md w-52 max-w-full" />
    )

    const elem = vkQr.createQR(
        text,
        {
            isShowLogo: true,
            ecc: 1,
            qrSize: 256,
            logoData: logo || MeduzaLogo,
            suffix: suffix || "qrcode"
        }
    );

    return (
        <div className="ms:p-4 ms:rounded-md ms:border ms:bg-white ms:aspect-square ms:w-52 ms:max-w-full">
            <img src={
                `data:image/svg+xml;base64,${Buffer.from(
                    elem.trim()
                ).toString("base64")
                }`
            } alt={"QR Code: " + text} />
        </div>
    );
};