const constants = {
  statusMessage: {success: "OK", failure: "Bad Request"},
  requestMethod: {
    POST: "POST",
    OPTIONS: "OPTIONS",
  },
  error: {
    internalServerError: "Internal server error",
    incorrectMethod: "Method not allowed",
    initializationError: "Error in Firestore initialization",
  },
};

export default constants;
