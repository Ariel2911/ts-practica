import { useReducer } from "react";
import { Sub } from '../../types';

interface FormState {
  inputValue: Sub
};

const INICIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: '',
};

type FormReducerAction = {
  type: 'change-value',
  payload: {
   inputName: string
   inputValue: string 
  };
} | {
 type: 'clear'
};

const formReducer = (state: FormState['inputValue'], action: FormReducerAction) => {
  switch(action.type) {
    case 'change-value':
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]: inputValue,
      };

    case 'clear':
      return INICIAL_STATE;
  };
};

const useNewSubForm = () => {
  return useReducer(formReducer, INICIAL_STATE);
};

export default useNewSubForm;