/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import { constants } from '../config/constants';
import StorageHelper from '../utils/local-storage-helper';
import { ApiError } from './api-error';

const METHODS = {
  delete: 'delete',
  get: 'get',
  patch: 'patch',
  post: 'post',
  put: 'put',
};

class ApiServiceClass {
  constructor() {
    this.axios = axios.create({
      baseURL: constants.apiBaseURL,
    });
    this._addedHeaders = {};
    this.axios.interceptors.request.use((config) => {
      const token = StorageHelper.getLocalAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    this.axios.interceptors.response.use(
      (res) => res,
      async (err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== '/auth/signin' && err.response) {
          // Access Token was expired
          if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;

            try {
              const rs = await this.axios.post('/auth/refreshtoken', {
                refreshToken: StorageHelper.getLocalRefreshToken(),
              });

              const { accessToken } = rs.data;
              StorageHelper.updateLocalAccessToken(accessToken);

              return this.axios(originalConfig);
            } catch (_error) {
              return Promise.reject(_error);
            }
          }
        }

        return Promise.reject(err);
      },
    );
  }

  async _sendRequest(method, url, config = {}) {
    try {
      const updatedConfig = { ...config };
      updatedConfig.headers = { ...this._addedHeaders, ...(config.headers || {}) };
      if (method === METHODS.get || method === METHODS.delete) {
        return await this.axios[method](url, updatedConfig);
      }
      const body = updatedConfig.body || {};
      delete updatedConfig.body;
      return await this.axios[method](url, body, updatedConfig);
    } catch (error) {
      if (error.response && error.response.data) {
        throw new ApiError({
          message: error.response.data.message, // Si el backend envia un atributo message
          status: error.response.status,
        });
      }
      throw new ApiError({
        status: null,
        code: null,
        message: error.message,
      });
    }
  }

  setHeaders(newHeaders) {
    Object.assign(this._addedHeaders, newHeaders);
  }

  get(url, params = {}, config = {}) {
    return this._sendRequest(METHODS.get, url, { ...config, params });
  }

  post(url, body = {}, config = {}) {
    return this._sendRequest(METHODS.post, url, { ...config, body });
  }

  patch(url, body = {}, config = {}) {
    return this._sendRequest(METHODS.patch, url, { ...config, body });
  }

  put(url, body = {}, config = {}) {
    return this._sendRequest(METHODS.put, url, { ...config, body });
  }

  delete(url, params = {}, config = {}) {
    return this._sendRequest(METHODS.delete, url, { ...config, params });
  }
}

const ApiService = new ApiServiceClass();

export { ApiService };
