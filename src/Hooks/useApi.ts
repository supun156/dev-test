import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRequest, get, post, put } from "../API/commonApi";
// import { RootStore } from "../store/store";

function useApi() {
  const dispatch = useDispatch();
  const [actions, setActions] = useState<any>();
  const [baseUrl, setBaseUrl] = useState<any>(null);
  const [postValues, setPostValues] = useState({});
  const [method, setMethod] = useState("POST");
  const [customInput, setCustomInput] = useState(null);

  const valueRef = useRef<any>();
  const processPromise = () => {
    const promise = callAPI();
    valueRef.current = promise;
    return promise.then((res) => res).catch((error) => error.response);
  };

  const callAPI = () => {
    switch (method) {
      case "POST":
        return post();

      case "GET":
        return get({ path: "gdfshgdg" });

      case "PUT":
        return put();

      case "DELETE":
        return deleteRequest();

      default:
        return get({ path: "gdfshgdg" });
    }
  };

  const processPromiseAPI = (promiseMethod: any) => {
    switch (promiseMethod) {
      case "POST":
        return post()
          .then((res) => res)
          .catch((error) => error.response);
      case "GET":
        return get({ path: "gdfshgdg" })
          .then((res) => res)
          .catch((error) => error.response);
      case "PUT":
        return put()
          .then((res) => res)
          .catch((error) => error.response);
      case "DELETE":
        return deleteRequest()
          .then((res) => res)
          .catch((error) => error.response);
      default:
        return get({ path: "gdfshgdg" })
          .then((res) => res)
          .catch((error) => error.response);
    }
  };

  useEffect(() => {
    if (baseUrl) {
      const requestApiCall = async () => {
        dispatch({ type: actions.request });
        if (customInput) {
          dispatch({
            type: `${actions.request}_CUSTOM_CONTENT`,
            payload: { customInput },
          });
        }

        try {
          const result = await processPromise();

          switch (result.status) {
            case 200:
            case 201:
              dispatch({
                type: actions.success,
                payload: result.data,
              });

              if (customInput) {
                dispatch({
                  type: `${actions.success}_CUSTOM_CONTENT`,
                  payload: { customInput, data: result.data },
                });
              }

              break;

            case 204:
              dispatch({
                type: actions.success,
                payload: null,
              });

              if (customInput) {
                dispatch({
                  type: `${actions.success}_CUSTOM_CONTENT`,
                  payload: { customInput },
                });
              }

              break;

            default:
              dispatch({
                type: actions.fail,
                payload: result.data && (result.data.message || result.data),
              });

              if (customInput) {
                dispatch({
                  type: `${actions.fail}_CUSTOM_CONTENT`,
                  payload: { customInput },
                });
              }
              break;
          }
        } catch (error) {
          dispatch({
            type: actions.fail,
            payload: error,
          });

          if (customInput) {
            dispatch({
              type: `${actions.fail}_CUSTOM_CONTENT`,
              payload: { customInput },
            });
          }
        }
        setBaseUrl(null);
      };

      requestApiCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseUrl]);

  const submitForm = (
    url: string,
    request: string,
    success: string,
    fail: string,
    postValues: any,
    method: string,
    customInput?: any
  ) => {
    const newActions = { request, success, fail };

    setMethod(method);
    setActions(newActions);
    setPostValues(postValues);
    setCustomInput(customInput);
    setBaseUrl(url);
  };

  const cancel = () => {};

  return [submitForm, cancel, processPromiseAPI] as const;
}

export default useApi;
