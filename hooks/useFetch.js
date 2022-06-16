import { useCallback, useEffect, useReducer } from "react";
import { API } from "../API";
import { ACTIONS } from "../context/actions/fetch";
import { fetchReducer, initialState } from "../context/reducer/fetch";

const useFetch = (endpoint) => {
  /*  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
 */
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const getData = useCallback(async () => {
    try {
      const { data } = await API.get(`${endpoint}`);
      /* setData(data.results); */
      dispatch({ type: ACTIONS.SET_DATA, payload: data });
      console.log(data);
    } catch (err) {}
  }, [endpoint]);

  useEffect(() => {
    getData();
  }, [endpoint, getData]);

  return state;
};

export default useFetch;
