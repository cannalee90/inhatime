export const concatErrors = (...args) => {
  let errorMessages = [];
  args.forEach((arg) => {
    let error = arg;
    if (typeof arg === 'string') {
      error = [arg];
    } else if (Array.isArray(arg)) {
      error = arg;
    } else if (typeof arg === 'object' && arg.errors) {
      if (typeof arg.errors === 'string') {
        error = [arg.errors];
      } else if (Array.isArray(arg.errors)) {
        error = arg.errors;
      }
    }
    if (error) {
      errorMessages = errorMessages.concat(error);
    }
  });
  return errorMessages;
};

export const concatInfos = (...args) => {
  let infoMessages = [];
  args.forEach((arg) => {
    let info = arg;
    if (typeof arg === 'string') {
      info = [arg];
    } else if (Array.isArray(arg)) {
      info = arg;
    } else if (typeof arg === 'object' && arg.infos) {
      if (typeof arg.infos === 'string') {
        info = [arg.infos];
      } else if (Array.isArray(arg.infos)) {
        info = arg.infos;
      }
    }
    if (info) {
      infoMessages = infoMessages.concat(info);
    }
  });
  return infoMessages;
};
