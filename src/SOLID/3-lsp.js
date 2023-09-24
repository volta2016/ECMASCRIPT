//Liskov Subtitution principle
// This principle say the subclasses must be suitable by their base class
// that is to say, the object of a class can be replaced by the object of an
// subclasses without effect on the correction of the program

//it's a param gives us the freedom to call either one or the other

function makeRequest(url, errorHandler) {
  fetch(url)
    .then((response) => response.json())
    .catch((erro) => {
      errorHandler.handle(error);
    });
}

const consoleErrorHandler = {
  handle: function (error) {
    console.log(error);
  },
};

const externalErrorHandler = {
  handle: function (error) {
    sendErrorToExternalService(error);
  },
};

makeRequest("https://my-api.com/data", consoleErrorHandler);
makeRequest("https://my-api.com/data", externalErrorHandler);
