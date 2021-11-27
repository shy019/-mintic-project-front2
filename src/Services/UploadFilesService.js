import http from "./http-common";
import {
  USER_API_BASE_URL,
  CONFIG_TOKEN
} from '../Util/Constants';

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post(USER_API_BASE_URL + "/products/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();