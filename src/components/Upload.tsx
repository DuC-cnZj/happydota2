import { Upload, message, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../utils/token";
import { upload } from "../api/upload";

interface UploadAvatarProps {
  value?: string;
  onChange?: (id: number) => void;
  logout: () => void;
  previewImage?: string;
  setPreviewImage: (image: string) => void;
  previewVisible: boolean;
  setPreviewVisible: (v: boolean) => void;
}

const UploadImage: React.FC<UploadAvatarProps> = ({
  value,
  onChange,
  logout,
  previewImage,
  setPreviewImage,
  previewVisible,
  setPreviewVisible,
}) => {
  const handleCancel = () => setPreviewVisible(false);
  let h = useHistory();

  const [fileList, setFileList] = useState<any[]>([]);

  const triggerChange = (id: number) => {
    onChange?.(id);
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = ({ fileList, file }: { file: any; fileList: any[] }) => {
    console.log(file);
    setFileList(fileList);
    if (file.status === "done") {
      console.log(file.response)
      triggerChange(file.response.data.data.id);
      setPreviewImage(file.response.data.data.path);
    }
    if (file.status === "error") {
      if (file.response && file.response.data && file.response.data.code === 401) {
        message.error("登录过期, 请重新登录");
        setTimeout(() => {
          logout();
          h.push("/");
        }, 1000);
      }
    }
    if (file.status === "removed") {
      triggerChange(0);
      setPreviewImage("");
    }
  };

  const handlePreview = async (file: any) => {
    setPreviewVisible(true);
    setPreviewImage(file.response.data.data.path);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        customRequest={(opt: any) => {
          upload(opt.file)
            .then((res) => {
              console.log("upload success", res)
              opt.onSuccess(res)
            })
            .catch((e) => {
              console.log("upload error", e)
              opt.onError(e, e.response)
            });
        }}
        beforeUpload={beforeUpload}
        listType="picture-card"
        fileList={fileList}
        maxCount={1}
        onPreview={handlePreview}
        onChange={handleChange}
        headers={{ Authorization: getToken() }}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal
        width={600}
        visible={previewVisible}
        title="预览"
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="preview_image" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadImage;
