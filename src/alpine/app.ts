import Spruce from '@ryangjchandler/spruce';
import 'alpinejs';

import Users from './users';
import Settings from './settings';

export default function app(api) {
  Spruce.store('root', { api, view: 'users', modal: '' });
  Spruce.store('users', Users);
  Spruce.store('settings', Settings);
}
