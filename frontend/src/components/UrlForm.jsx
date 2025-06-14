import React from "react";

const UrlForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Enter your URL
        </label>
        <input
          type="url"
          name="url"
          id="url"
          required
          placeholder="https://example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        disabled=""
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
      >
        Shorten URL
      </button>

      {/* {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )} */}

      {/* {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl);
                }}
                className="ml-2 bg-gray-200 p-2 rounded-md hover:bg-gray-300"
              >
                Copy
              </button>
            </div>
          </div>
        )} */}
    </form>
  );
};

export default UrlForm;
