import axios from "axios";
import showMessage from "@/utils/showMessage";

const ins = axios.create()//创建一个axios实例
ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duretion: 1500
    })
    console.log(resp);
    return null;
  }
  // console.log(resp.data.data);
  return resp.data.data;//一下午的教训
});
export default ins;