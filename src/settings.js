module.exports = {
  server: "http://pharmacy.emre.sh",
  endpoints: {
    districts: "/api/v1/istanbul/",
    pharmacies: "/api/v1/istanbul/%s"
  },
  request_headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}