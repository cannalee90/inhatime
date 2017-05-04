import _ from 'lodash';

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

export const timeSplit = (data) => {
  const dataArray = data.split(';');
  return _.chain(dataArray)
  .map((day) => {
    const daySplit = day.split(':');
    if (daySplit.length === 1) {
      return false;
    }
    return {
      classTime: daySplit[0],
      classRoom: daySplit[1],
    };
  })
  .filter((datum) => {
    return datum !== false;
  })
  .value();
};

export const codeToKorean = ({ classTime, classRoom }) => {
  const weekDay = ['월', '화', '수', '목', '금', '토', '일'];
  const splitData = classTime.split('T');
  if (classTime === 'D0T0') {
    return classRoom;
  }
  const ret = _.chain(splitData)
  .map((datum) => {
    switch (datum[0]) {
      case 'D':
        return `${weekDay[_.toNumber(datum[1])]}-`;
      default:
        return `${datum.toString()},`;
    }
  })
  .value()
  .join('');
  return `${ret.slice(0, -1)}(${classRoom})`;
};
