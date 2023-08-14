// main.ts
import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
	loadRemoteEntry({ type: 'script', remoteEntry: `http://localhost:4204/remoteEntry.js`, remoteName: 'react'}),
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));