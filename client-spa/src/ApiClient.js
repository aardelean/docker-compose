import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  // const adjustedPath = path[0] !== '/' ? '/' + path : path;
  // if (__SERVER__) {
  //   const PORT = process.env.PORT || 3000;
  //   const HOST = process.env.HOST || 'http://';
  //   return 'http://' + `${HOST}:${PORT}/api${adjustedPath}`;
  // }
  // return '/api' + adjustedPath;
  return `http://rest-api:8090/api${path}`;
}

class _ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, requestData = {}) => {
        const { params, data } = requestData;

        return new Promise((resolve, reject) => {
          const url = formatUrl(path);
          const request = superagent[method](url);

          if (params) {
            request.query(params);
          }

          if (__SERVER__) {
            copyHeadersToRequest({request, headers: req.headers});
          }

          if (data) {
            request.send(data);
          }

          request.end((err, {status, body, text} = {}) => {
            if (status === 401) {
              return reject({status: 401});
            }

            if (err) {
              return reject(body || err);
            }
            resolve(body || text);
          });
        });
      });
  }
}

function copyHeadersToRequest({request, headers}) {
  Object.keys(headers || {}).forEach(key => request.set(key, headers[key]));
}

const ApiClient = _ApiClient;

export default ApiClient;
