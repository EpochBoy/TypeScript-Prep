import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);

console.log('test');

// customMap.addUserMarker(user);
// customMap.addCompanyMarker(company);

// const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: {
//         lat: user.location.lat,
//         lng: user.location.lng,
//     }
// });
