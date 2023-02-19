import axios from "axios";
const UpImage = async (files) => {
  if (files) {
    const CLOUD_NAME = "phuong-fpoly";
    const PRESET_NAME = "upload-portfolio";
    const urls = [];
    const FOLDER_NAME = "Ass-ECMA";
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    //khởi tạo đối tượng xử lí biểu mẫu upload ảnh
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);

    for (const file of files) {
      formData.append("file", file);

      const response = await axios.post(api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      urls.push(response.data.secure_url);
    }
    if (urls.length == 1) {
      return urls[0];
    } else {
      return urls;
    }
  }
};

export default UpImage;
