import axios from "axios";

export const apiGetWorkExperience = () => {
  return axios.get("https://api.morgansundqvist.se/work-experience");
};
