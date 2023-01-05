/* eslint-disable unused-imports/no-unused-imports */

import { UserDashboardView } from '@views/user/UserDashboardView';
import renderer from 'react-test-renderer';

test('if dashboard snapshot matches', async () => {
  // create and test for snapshot
  const component = renderer.create(<UserDashboardView></UserDashboardView>).toJSON();
  expect(component).toMatchSnapshot();
});
