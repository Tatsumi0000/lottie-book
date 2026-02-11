import { en } from "vuetify/locale";

export default {
  $vuetify: {
    ...en,
    play: "PLAY",
    message: {
      notfound: {
        file: "File not found.",
        content: "Content not found.",
        currentanimationcheckyourdirector:
          "No animation assets found for the current theme. Please check your directory settings.",
      },
      error: {
        filetype: "Invalid file type. Please upload a JSON file.",
        syntax: "JSON syntax error occurred.",
        readorparse: "Failed to read or parse the file.",
      },
    },
  },
};
