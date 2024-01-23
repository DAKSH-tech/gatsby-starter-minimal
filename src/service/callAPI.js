const callAPI = (token1, token2) => {
    const url = 'https://cdn.contentstack.io/v3/content_types/tiles_div/entries/blt18c0ed9bbe7e3bf7?environment=development';
  
    const headers = new Headers({
      'Content-Type': 'application/json',
      'api_key': token1,
      'access_token': token2,
      'branch':'main'
    });
  
    const requestOptions = {
      method: 'GET',
      headers: headers,
    };
  
    return fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for the calling code to handle
      });
  };
  
  export default callAPI;
  