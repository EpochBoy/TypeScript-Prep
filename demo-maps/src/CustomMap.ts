import { User } from './User';
import { Company } from './Company';

// Instructions on how to become an argument to 'addMarker'
export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
	name: string;
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	// Proper solution using interface to satisfy argument

	addMarker(markerInfo: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: markerInfo.location.lat,
				lng: markerInfo.location.lng,
			},
		});

		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: markerInfo.markerContent(),
			});
			infoWindow.open(this.googleMap, marker);
		});
	}

	// Semi decent solution, but limited by common properties due to OR
	// where only shared properties are accessible and having to use an
	// import statement for each class, so let's make an interface instead.
	// Also tight coupling between Map class and anything we would want to map.
	// addMarker(markerInfo: User | Company): void{
	//     new google.maps.Marker({
	//         map: this.googleMap,
	//         position:{
	//             lat: markerInfo.location.lat,
	//             lng: markerInfo.location.lng,
	//         }
	//     });
	// }

	// Below is the really bad way to implement map markers, repeat code and very dependent.

	// addUserMarker(user: User): void{
	//     new google.maps.Marker({
	//         map: this.googleMap,
	//         position:{
	//             lat: user.location.lat,
	//             lng: user.location.lng,
	//         }
	//     });
	// }

	// addCompanyMarker(company: Company):void{
	//     new google.maps.Marker({
	//         map: this.googleMap,
	//         position:{
	//             lat: company.location.lat,
	//             lng: company.location.lng,
	//         }
	//     })
	// }
}
