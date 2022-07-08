import {useSelector, useDispatch} from 'react-redux';

const useRedux = (selector: any) => {
  const state = useSelector(selector);
  const dispatch = useDispatch();

  return [state, dispatch];
};

export default useRedux;
