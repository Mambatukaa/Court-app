import React from 'react';
import { ActivityIndicator } from 'react-native';

import { gql, useQuery } from '@apollo/client';
import { queries } from '../graphql';
import { CurrentUserQueryResponse } from '../types';
import { colors } from '../../../common/styles';

// tslint:disable-next-line: variable-name
const withCurrentUser = Component => {
  // tslint:disable-next-line: variable-name
  const Container = (props: any) => {
    const { data } = useQuery<CurrentUserQueryResponse>(
      gql(queries.currentUser)
    );

    if (!data || data.loading) {
      return (
        <ActivityIndicator
          size="small"
          color={colors.grdMain}
          style={{ justifyContent: 'center', flex: 1 }}
        />
      );
    }

    const currentUser = data.currentUser;

    const updatedProps = {
      ...props,
      currentUser
    };

    return <Component {...updatedProps} />;
  };

  return Container;
};

export default withCurrentUser;
