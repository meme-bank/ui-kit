import { cn, useIsomorphicLayoutEffect } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { Check, RotateCcwSquare, RotateCwSquare, Upload } from "lucide-react";
import React, { useState } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import Cropper, { Area, Point, Size } from "react-easy-crop";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Slider } from "./slider";

export type CropArea = Area;
export type CropAreaAspectType = "background" | "avatar";
type OnDrop = <T extends File>(
  acceptedFiles: T[],
  fileRejections: FileRejection[],
  event: DropEvent
) => void;
export type OnUpload = (file: File, area: CropArea) => void;

export const CropperControls = React.forwardRef<
  unknown,
  {
    type: CropAreaAspectType;
    image: string;
    onDrop?: OnDrop;
    onUpload: (area: Area) => void;
  }
>((props, ref) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);
  const [area, setArea] = useState<Area>();
  const [openReupload, setReupload] = useState(false);
  const [mediaSize, setMediaSize] = useState<Size>();

  const aspect: Record<CropAreaAspectType, number> = {
    avatar: 1 / 1,
    background: 5 / 2,
  };

  const classes = {
    containerClassName: cn(
      "ms:bg-background ms:h-full ms:w-full ms:overflow-hidden ms:select-none ms:touch-none ms:cursor-move ms:flex ms:items-center ms:justify-items"
    ),
    cropAreaClassName: cn(
      "ms:absolute ms:text-background/50 ms:left-1/2 ms:top-1/2 ms:outline-2 ms:outline-foreground ms:outline ms:-translate-y-1/2 ms:overflow-hidden ms:shadow-[0_0_0_calc(100vw_+_100vh)] ms:-translate-x-1/2",
      aspect[props.type] === 1 / 1 ? "ms:rounded-full" : "ms:rounded-md"
    ),
    mediaClassName: cn(
      "ms:bg-background ms:max-w-full ms:max-h-full ms:border-border ms:m-auto ms:absolute ms:left-0 ms:top-0 ms:bottom-0 ms:right-0"
    ),
  };

  useIsomorphicLayoutEffect(() => {
    if (mediaSize) {
      const container = document.querySelector(`.reactEasyCrop_Container`);
      container?.setAttribute("data-vaul-no-drag", "true");
      const cropper = container?.querySelector(`.reactEasyCrop_CropArea`);
      cropper?.setAttribute("data-vaul-no-drag", "true");
      const image = container?.querySelector(`.reactEasyCrop_Image`);
      image?.setAttribute("data-vaul-no-drag", "true");
    }
  }, [mediaSize]);

  const getCropSize = (mediaSize: Size): Size => {
    const { height, width } = mediaSize;
    if (height * aspect[props.type] > width)
      return {
        height: width / aspect[props.type],
        width,
      };
    return {
      height,
      width: height * aspect[props.type],
    };
  };

  return (
    <div data-vaul-no-drag className="ms:h-full ms:min-h-96">
      <div data-vaul-no-drag className="ms:flex ms:flex-col ms:h-full ms:gap-2">
        <div
          data-vaul-no-drag
          className="ms:relative ms:flex-1 ms:overflow-hidden"
        >
          <div
            data-vaul-no-drag
            className="ms:absolute ms:top-0 ms:bottom-0 ms:left-0 ms:right-0"
          >
            <Cropper
              crop={crop}
              onCropChange={setCrop}
              image={props.image}
              disableAutomaticStylesInjection
              zoom={zoom}
              aspect={aspect[props.type]}
              classes={classes}
              rotation={rotate}
              zoomWithScroll={false}
              onZoomChange={setZoom}
              maxZoom={2.5}
              onCropComplete={(_, area) => {
                setArea(area);
              }}
              cropSize={mediaSize && getCropSize(mediaSize)}
              onMediaLoaded={({ height, width }) => {
                setMediaSize({
                  height,
                  width,
                });
              }}
              mediaProps={{
                ...mediaSize,
              }}
            />
          </div>
        </div>
        <div className="ms:flex ms:gap-2">
          {props.onDrop && (
            <Dialog nested open={openReupload} onOpenChange={setReupload}>
              <DialogTrigger asChild>
                <Button size={"icon"} variant={"outline"}>
                  <Upload className="ms:h-[1.2rem] ms:w-[1.2rem]" />
                </Button>
              </DialogTrigger>
              <DropDialogContent
                close={() => setReupload(false)}
                onDrop={props.onDrop}
              />
            </Dialog>
          )}
          <Button
            type="button"
            onClick={() => setRotate(val => val + 90)}
            variant={"outline"}
            size={"icon"}
          >
            <RotateCwSquare className="ms:h-[1.2rem] ms:w-[1.2rem]" />
          </Button>
          <Button
            type="button"
            onClick={() => setRotate(val => val - 90)}
            variant={"outline"}
            size={"icon"}
          >
            <RotateCcwSquare className="ms:h-[1.2rem] ms:w-[1.2rem]" />
          </Button>
          <Slider
            className="ms:flex-1 no-ms:hover:hidden"
            step={0.125}
            max={2.75}
            min={1}
            defaultValue={[1]}
            value={[zoom]}
            onValueChange={val => setZoom(val[0])}
          />
          <DialogClose asChild onClick={() => props.onUpload(area as Area)}>
            <Button
              size={"icon"}
              className="ms:sm:px-3 no-ms:hover:ml-auto ms:sm:w-auto ms:sm:py-2 ms:sm:justify-start"
            >
              <Check className="ms:h-[1.2rem] ms:w-[1.2rem] ms:sm:w-4 ms:sm:h-4 ms:sm:mr-3" />
              <span className="ms:hidden ms:sm:inline">Отправить</span>
            </Button>
          </DialogClose>
        </div>
      </div>
    </div>
  );
});

CropperControls.defaultProps = { type: "avatar" };

export const CropperDialogContent: React.FC<{
  type: CropAreaAspectType;
  onUpload: OnUpload;
  openState?: boolean;
  image?: string;
}> = ({ type, onUpload, openState, image }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>();

  useIsomorphicLayoutEffect(() => {
    if (!image) return;
    const fetchImage = async () => {
      const resp = await fetch(image).then(resp => resp.blob());
      setFile(new File([resp], image));
      setImageUrl(image);
    };
    fetchImage();
  }, [image]);

  useIsomorphicLayoutEffect(() => {
    if (typeof openState === void 0) return;
    if (!openState) {
      setFile(null);
      setImageUrl(null);
    }
  }, [openState]);

  const onDrop = React.useCallback<OnDrop>(files => {
    setFile(files[0]);
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setImageUrl(reader.result as string);
      },
      false
    );
    reader.readAsDataURL(files[0]);
  }, []);

  if (imageUrl && file)
    return (
      <DialogContent
        noScroll
        className="ms:h-full ms:flex ms:flex-col ms:md:h-[50rem]"
      >
        <div className="ms:h-full ms:flex ms:flex-col">
          <DialogHeader>
            <DialogTitle>Выберите отображаемую область</DialogTitle>
            <DialogDescription>
              НБМ вам предоставит удобный интерфейс для выбора
            </DialogDescription>
          </DialogHeader>
          <div
            data-vaul-no-drag
            className="ms:p-2 ms:md:p-0 ms:h-full ms:flex-1"
          >
            <CropperControls
              image={imageUrl}
              type={type}
              onDrop={onDrop}
              onUpload={area => onUpload(file, area)}
            />
          </div>
        </div>
      </DialogContent>
    );

  return <DropDialogContent onDrop={onDrop} />;
};

const DropDialogContent: React.FC<{ onDrop: OnDrop; close?: () => void }> = ({
  onDrop,
  close,
}) => {
  const { getInputProps, getRootProps, open, isDragActive } = useDropzone({
    noClick: true,
    multiple: false,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    onDrop: close
      ? (...args) => {
        onDrop(...args);
        close();
      }
      : onDrop,
  });

  return (
    <DialogContent {...getRootProps()}>
      <DialogHeader>
        <DialogTitle>Выберите изображение</DialogTitle>
        <DialogDescription>
          {!isDragActive &&
            "Для этого нажмите кнопку ниже или перетащить файл в эту область"}
          {isDragActive && "Теперь можете отпустить"}
        </DialogDescription>
      </DialogHeader>
      <input {...getInputProps()} />
      <DialogFooter>
        <Button type="button" onClick={open} disabled={isDragActive}>
          <Upload className="ms:mr-2 ms:w-4 ms:h-4" />
          Выбрать изображение
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
