import axios from "axios";
import {
  CONFIG_TOKEN
} from '../Util/Constants';

export default axios.create({
  baseURL: "http://localhost:8090",
  CONFIG_TOKEN
});