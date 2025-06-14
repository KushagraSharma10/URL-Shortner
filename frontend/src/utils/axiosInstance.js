import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});


// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  // For successful responses
  response => response,
  
  // For error responses
  error => {
    let errorMessage = "An unexpected error occurred";
    let statusCode = 500;
    
    if (error.response) {
      // The server responded with an error status code
      statusCode = error.response.status;
      
      // Extract error message from response if available
      if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.response.data && typeof error.response.data === 'string') {
        errorMessage = error.response.data;
      }
      
      // Handle specific status codes
      switch (statusCode) {
        case 400:
          errorMessage = errorMessage || "Bad request - please check your input";
          break;
        case 401:
          errorMessage = "Authentication required - please log in";
          // You could redirect to login page here
          break;
        case 403:
          errorMessage = "You don't have permission to access this resource";
          break;
        case 404:
          errorMessage = "The requested resource was not found";
          break;
        case 422:
          errorMessage = "Validation failed - please check your input";
          break;
        case 429:
          errorMessage = "Too many requests - please try again later";
          break;
        case 500:
        case 502:
        case 503:
        case 504:
          errorMessage = "Server error - please try again later";
          break;
        default:
          errorMessage = errorMessage || `Error ${statusCode}`;
      }
    } else if (error.request) {
      // Request was made but no response received
      errorMessage = "No response from server - please check your connection";
      statusCode = 0;
    } else {
      // Error in setting up the request
      errorMessage = error.message || "Failed to make request";
    }
    
    // Create enhanced error object
    const enhancedError = {
      message: errorMessage,
      statusCode,
      data: error.response?.data,
    //   originalError: error,
    //   isAxiosError: true,
      timestamp: new Date().toISOString()
    };
    
    // Log error for debugging (can be removed in production)
    console.error("API Error:", enhancedError);
    
    return Promise.reject(enhancedError);
  }
);


export default axiosInstance;
