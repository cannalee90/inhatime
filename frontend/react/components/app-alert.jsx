import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import AlertRender from './error-render';

const AppAlert = (props) => {
  let { errors, infos } = props;
  const { state } = props;
  errors = errors || state.errors;
  infos = infos || state.infos;
  errors = _.uniq(errors);
  infos = _.uniq(infos);
  return (
    <div>
      <AlertRender
        messages={errors}
      />
      <AlertRender
        type='success'
        messages={infos}
      />
    </div>
  );
};

AppAlert.propTypes = {
  errors: PropTypes.array,
  infos: PropTypes.array,
  state: PropTypes.object,
};

export default AppAlert;
