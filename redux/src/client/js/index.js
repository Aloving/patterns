/**
 * Application entry point
 */

// Load application styles
import '../styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

import {store} from './store';
import {app} from './app'

import {fetchUsers} from './actions/users';

app.render(store.getState());
store.subscribe(() => app.render(store.getState()));
store.dispatch(fetchUsers());
