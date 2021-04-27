import React, { useEffect, createElement } from "react";
import Vditor from "vditor";
import "../styles/my-editor.scss";
import { getToken } from "../utils/token";

interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}

const MyEditor: React.FC<IProps> = ({ value, onChange }) => {
  useEffect(() => {
    console.log("editor init");
    const vditor = new Vditor("vditor", {
      counter: {
        enable: true,
      },
      upload: {
        multiple: false,
        format: (files: File[], responseText: string): string => {
          const {
            data: { path },
          } = JSON.parse(responseText);

          let res = {
            msg: "",
            code: 0,
            errFiles: [],
            data: {
              succMap: {
                file: path,
              },
            },
          };
          return JSON.stringify(res);
        },
        accept: "image/*",
        headers: {
          Authorization: getToken(),
        },
        fieldName: "file",
        url: process.env.REACT_APP_BASE_URL + "/api/upload",
      },
      theme: "dark",
      icon: "material",
      height: 360,
      toolbarConfig: {
        pin: true,
      },
      input: (value: string, previewElement?: HTMLElement) => {
        console.log("input", value);
        onChange?.(value);
      },
      blur: (value: string, previewElement?: HTMLElement) => {
        console.log("blur", value);
        onChange?.(value);
      },
      preview: {
        actions: ["desktop"],
        delay: 500,
        hljs: {
          style: "fruity",
        },
      },
      toolbar: [
        "preview",
        "emoji",
        "headings",
        "bold",
        "italic",
        "strike",
        "line",
        "fullscreen",
        "quote",
        "list",
        "ordered-list",
        "check",
        "inline-code",
        "undo",
        "redo",
        "upload",
        "link",
        "table",
        "|",
        "edit-mode",
        "export",
        "help",
      ],
      cache: {
        enable: true,
        id: "intro_cache",
      },
      after() {
        vditor.setValue(value ? value : "");
      },
    });

    // return vditor.destroy()
  }, []);
  return createElement("div", { id: "vditor" });
};

export default MyEditor;
