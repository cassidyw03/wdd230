fetch('data/price.json')
.then(response => response.json())
.then(data => {
    const table = document.getElementById('pricingTable');
    const reservationData = data.Pricing.Reservation;
    const walkInData = data.Pricing["Walk-In"];

    Object.keys(reservationData).forEach(vehicle => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${vehicle}</td>
            <td>${reservationData[vehicle]["Max Persons"]}</td>
            <td>$${reservationData[vehicle]["Half Day (3 hrs)"]}</td>
            <td>$${reservationData[vehicle]["Full Day"]}</td>
            <td>$${walkInData[vehicle]["Half Day (3 hrs)"]}</td>
            <td>$${walkInData[vehicle]["Full Day"]}</td>
        `;
        table.appendChild(row);
    });
})
.catch(error => console.error('Error loading JSON:', error));