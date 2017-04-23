// import Datastore from 'nedb';
//
// let db = {};
// db.gradovi = new Datastore({ filename: '/db/gradovi/gradovi.db', autoload: true });
// db.gradovi.insert({grad: 'Beograd'});
//
// export default {
//   gradovi: db.gradovi
// }

import dbSetup from '../../../trafostanice/db/dbSetup';
// dbSetup.addGrad('Novi sad');
// dbSetup.addGrad('Beograd');
// dbSetup.addGrad('Loznica');
// dbSetup.addGrad('Nis');
// dbSetup.updateTrafostanica({ id: 'GO27ihuxFGDBVK6A', naziv: 'Nis trafostanica', grad_id: '1z8TUcqefpbuQ5LB', voltaza: '10'});
// dbSetup.updateTrafostanica({ id: 'Y8olq5jeQPCxyQBP', naziv: 'Beograd trafostanica', grad_id: 'r1SH5VNvIHoDNyMR', voltaza: '20'});
// dbSetup.updateTrafostanica({ naziv: 'Loznica trafostanica', grad_id: 'XKBVrL3WMIMsUyiA', voltaza: '30'});
// dbSetup.updateTrafostanica({ id: 'zOdAF6Q4OBOW14Xt', naziv: 'Novi sad trafostanica', grad_id: 'XkkkLOCFvrqyprSy', voltaza: '110'});

export default dbSetup;
