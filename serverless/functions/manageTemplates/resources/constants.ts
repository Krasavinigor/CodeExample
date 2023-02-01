const constants = {
  statusMessage: {success: "OK", failure: "Bad Request"},
  requestMethod: {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    OPTIONS: "OPTIONS",
  },
  error: {
    internalServerError: "Internal server error",
    incorrectMethod: "Method not allowed",
    initializationError: "Error in Firestore initialization",
  },
};

export default constants;
