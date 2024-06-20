import axios from "axios";

const axiosInstance = axios.create({
  // firebase deployed
    baseURL:  'https://api-kfj7qm37fq-uc.a.run.app',
});

export { axiosInstance };
