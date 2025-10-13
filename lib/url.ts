import qs from "query-string";

// we will create two functions

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}
interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  // append the new key and value
  // parse it into an object
  // response will be an object

  const queryString = qs.parse(params);
  //   taking the current query string
  // updating with the new key and value

  queryString[key] = value;

  // appending to query string and finally appending to the url and forming a new url
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  // remove the new key and value
  // parse it into an object
  // response will be an object

  const queryString = qs.parse(params);
  //   taking the current query string
  // updating with the new key and value
  keysToRemove.forEach((key) => {
    // remove the keys
    delete queryString[key];
  });

  // appending to query string and finally appending to the url and forming a new url
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    {
      skipNull: true,
    }
  );
};
