import ajax from "./ajax";

export function upload(obj: any) {
  const data = new FormData();
  data.append("file", obj);
  return ajax.post("/api/upload", data);
}
