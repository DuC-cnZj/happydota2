import ajax from './ajax'

export function upload(obj: any) {
    let data = new FormData();
    data.append("file", obj)
    return ajax.post('/api/upload', data)
}
  