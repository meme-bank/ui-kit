import * as React from "react";
// import { Input } from "./input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./input-otp";

export type Props = {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
};

// const RE_DIGIT = new RegExp(/^\d+$/);

export const TF2CodeInput: React.FC<Props> = ({ valueLength, value, onChange }) => {
    // const valueItems = React.useMemo(() => {
    //     const valueArray = value.split('');
    //     const items: Array<string> = [];

    //     for (let i = 0; i < valueLength; i++) {
    //         const char = valueArray[i];

    //         if (RE_DIGIT.test(char)) {
    //             items.push(char);
    //         } else {
    //             items.push('');
    //         }
    //     }

    //     return items;
    // }, [value, valueLength]);

    // const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     const { key } = e;
    //     const target = e.target as HTMLInputElement;

    //     if (key === 'ArrowRight' || key === 'ArrowDown') {
    //         e.preventDefault();
    //         return focusToNextInput(target);
    //     }

    //     if (key === 'ArrowLeft' || key === 'ArrowUp') {
    //         e.preventDefault();
    //         return focusToPrevInput(target);
    //     }

    //     const targetValue = target.value;

    //     target.setSelectionRange(0, targetValue.length);
    //     if (key !== 'Backspace' || target.value !== '') {
    //         return;
    //     }

    //     focusToPrevInput(target);
    // };

    // const inputOnChange = (
    //     e: React.ChangeEvent<HTMLInputElement>,
    //     idx: number
    // ) => {
    //     const target = e.target;
    //     let targetValue = target.value.trim();
    //     const isTargetValueDigit = RE_DIGIT.test(targetValue);

    //     if (!isTargetValueDigit && targetValue !== '') {
    //         return;
    //     }

    //     targetValue = isTargetValueDigit ? targetValue : ' ';

    //     const targetValueLength = targetValue.length;

    //     if (targetValueLength === 1) {
    //         const newValue =
    //             value.substring(0, idx) + targetValue + value.substring(idx + 1);

    //         onChange(newValue);

    //         if (!isTargetValueDigit) {
    //             return;
    //         }

    //         focusToNextInput(target);
    //     } else if (targetValueLength === valueLength) {
    //         onChange(targetValue);

    //         target.blur();
    //     }
    // };

    // const focusToNextInput = (target: HTMLElement) => {
    //     const nextElementSibling =
    //         target.nextElementSibling as HTMLInputElement | null;

    //     if (nextElementSibling) {
    //         nextElementSibling.focus();
    //     }
    // };
    // const focusToPrevInput = (target: HTMLElement) => {
    //     const previousElementSibling =
    //         target.previousElementSibling as HTMLInputElement | null;

    //     if (previousElementSibling) {
    //         previousElementSibling.focus();
    //     }
    // };

    // const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    //     const { target } = e;

    //     const prevInputEl =
    //         target.previousElementSibling as HTMLInputElement | null;

    //     if (prevInputEl && prevInputEl.value === '') {
    //         return prevInputEl.focus();
    //     }

    //     target.setSelectionRange(0, target.value.length);
    // }

    // return (
    //     <div className={"ms-flex ms-gap-1"}>
    //         {valueItems.map((digit, idx) => (
    //             <Input
    //                 key={idx}
    //                 type="text"
    //                 inputMode="numeric"
    //                 autoComplete="one-time-code"
    //                 pattern="\d{1}"
    //                 maxLength={valueLength}
    //                 className={"ms-aspect-square ms-w-auto ms-text-center"}
    //                 value={digit}
    //                 onChange={(e) => inputOnChange(e, idx)}
    //                 onKeyDown={inputOnKeyDown}
    //                 onFocus={inputOnFocus}
    //                 placeholder={"-"}
    //             />
    //         ))}
    //     </div>
    // );

    return (
        <InputOTP maxLength={valueLength} value={value} onChange={onChange}>
            <InputOTPGroup>
                {Array(valueLength).fill(null).map((_, i) => <InputOTPSlot index={i} />)}
            </InputOTPGroup>
        </InputOTP>
    )
};