import React from "react";

function BaseShowDatesCol() {
	return (
		<React.Fragment>
			<h1 className="ShowDates font-weight-big"> SHOW DATES</h1>
			<table className="table table-dark table-striped fs-5">
				<thead>
					<tr>
						<th scope="col">DATE</th>
						<th scope="col">VENUE</th>
						<th scope="col">LOCATION</th>
					</tr>
				</thead>
				<tbody className="table-group-divider fs-5">
					<tr>
						<td>Friday, June 3</td>
						<td>Perqs Bar</td>
						<td>Huntington Beach, CA</td>
					</tr>
					<tr>
						<td>Saturday, June 4</td>
						<td>Chain Reaction</td>
						<td>Anaheim, CA</td>
					</tr>
					<tr>
						<td>Thursday, June 23 </td>
						<td>James Joyce</td>
						<td>Santa Barbara, CA</td>
					</tr>
					<tr>
						<td>Friday, July 1 </td>
						<td>Berkeley Untapped</td>
						<td>Denver, CO</td>
					</tr>
					<tr>
						<td>Saturday, July 2 </td>
						<td>146 Taphouse</td>
						<td>Salida, CO</td>
					</tr>
					<tr>
						<td>Thursday, July 7</td>
						<td>Cutting Room</td>
						<td>New York, NY</td>
					</tr>
					<tr>
						<td>Saturday, July 9</td>
						<td>Kingfish</td>
						<td>Fayetteville, AR</td>
					</tr>
					<tr>
						<td>Thursday, July 14 </td>
						<td>Deep Ellum Art Company</td>
						<td>Dallas, TX</td>
					</tr>
					<tr>
						<td>Sunday, July 17 </td>
						<td>Yucca Taproom</td>
						<td>Phoenix, AZ</td>
					</tr>
				</tbody>
			</table>
		</React.Fragment>
	);
}

export default BaseShowDatesCol;
