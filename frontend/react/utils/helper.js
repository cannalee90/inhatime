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

export const getClassDayInWord = (idx) => {
  const weekDay = ['웹', '월', '화', '수', '목', '금', '토', '일'];
  return weekDay[idx];
};

export const getClassDayIdx = (splitedTime) => {
  return _.toNumber(splitedTime[0].replace('D', ''));
};


export const getClassTimeBegin = (splitedTime) => {
  return _.toNumber(splitedTime[1]);
};

export const getClassTimeLast = (splitedTime) => {
  return _.toNumber(splitedTime.pop());
};

export const timeSplit = (data) => {
  const dataArray = data.split(';');
  return _.chain(dataArray)
  .map((day) => {
    const daySplit = day.split(':');
    if (daySplit.length === 1) {
      return false;
    }
    const splitedTime = daySplit[0].split('T');
    const classDayIdx = getClassDayIdx(splitedTime);
    const classDayInWord = getClassDayInWord(classDayIdx);
    const classTimeBegin = getClassTimeBegin(splitedTime);
    const classTimeLast = getClassTimeLast(splitedTime);
    return {
      classTime: daySplit[0],
      classDayIdx,
      classDayInWord,
      classTimeBegin,
      classTimeLast,
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

export const calOffset = (arr, offset = 10) => {
  return _.chain(arr)
  .transform((result, elem) => {
    // let acc = 0;
    // if (_.last(result)) {
    //   acc = _.last(result);
    // }
    return result.push(_.last(result) + elem);
  }, [offset])
  .value();
};

export const setWidths = (nodes) => {
  return _.chain(nodes)
  .map((th) => {
    return th.offsetWidth;
  })
  .value();
};

export const setHeights = (nodes) => {
  return _.chain(nodes)
  .map((tr) => {
    return tr.offsetHeight;
  })
  .value();
};

export const weekDayInWord = ['', '월', '화', '수', '목', '금', '토'];


export const calTotalCredit = (courses) => {
  return courses.entrySeq().map(([courseId, course]) => {
    return course.credit;
  }).reduce((credit, acc) => {
    return acc + credit;
  }, 0);
};
