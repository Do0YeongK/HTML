import { create } from "zustand";

interface SignInStore {
  email: string;
  password: string;
  setEmail: (email:string) => void;
  setPassword: (password: string) => void;
}

const useStore = create<SignInStore>((set) => ({
  email: '', 
  password: '',
  setEmail: (email) => set((state) => ({ ...state, email: email })),
  setPassword: (password) => set((state) => ({ ...state, password })),
}));

/*
  set할 매개변수 state -> {email, password, setEmail}
  ...state -> {email, password, setEmail}
  ...state, email: email -> {email: 'email', password, setEmail}

  (+) [email: email] 과 같이 변수명과 상태명이 같은 경우 ': 값' 삭제가능 => [email]
*/

export default useStore;
