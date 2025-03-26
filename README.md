# UberApp API Documentation

## Endpoints

### POST /create
// ...existing code...

### GET /get-fare

**Description:** Get the fare estimate for a ride.

**Parameters:**
- `pickup` (string, required): The pickup address.
- `destination` (string, required): The destination address.
- `vehicleType` (string, required): The type of vehicle (auto, car, moto).

**Response:**
- `200 OK`: Returns the fare estimate.
- `400 Bad Request`: If any of the parameters are invalid.

**Example Request:**
```http
GET /get-fare?pickup=123%20Main%20St&destination=456%20Elm%20St&vehicleType=car
```

**Example Response:**
```json
{
    "fare": 15.75
}
```
