export const concatErrors = (...args) => {
  let errorMessages = [];
  args.forEach((arg) => {
    let error = arg;
    let valid = false;
    if (typeof arg === 'string') {
      error = [arg];
      valid = true;
    } else if (Array.isArray(arg)) {
      error = arg;
      valid = true;
    } else if (typeof arg === 'object' && arg.errors) {
      if (typeof arg.errors === 'string') {
        error = [arg.errors];
      } else if (Array.isArray(arg.errors)) {
        error = arg.errors;
      }
      valid = true;
    }
    if (error && valid) {
      errorMessages = errorMessages.concat(error);
    }
  });
  return errorMessages;
};

export const concatInfos = (...args) => {
  let infoMessages = [];
  args.forEach((arg) => {
    let info = arg;
    let valid = false;
    if (typeof arg === 'string') {
      info = [arg];
      valid = true;
    } else if (Array.isArray(arg)) {
      info = arg;
      valid = true;

    } else if (typeof arg === 'object' && arg.infos) {
      if (typeof arg.infos === 'string') {
        info = [arg.infos];
      } else if (Array.isArray(arg.infos)) {
        info = arg.infos;
      }
      valid = true;
    }
    if (info && valid) {
      infoMessages = infoMessages.concat(info);
    }
  });
  return infoMessages;
};
