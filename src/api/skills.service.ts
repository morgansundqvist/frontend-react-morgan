import axios from "axios";

export const apiGetSkills = () => {
  return axios.get("https://api.morgansundqvist.se/skills");
};
