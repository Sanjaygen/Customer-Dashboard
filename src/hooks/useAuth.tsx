import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "react-query";

//SignUp Register

const SignUpRegister = (resData: any) => {
  return axios.post("http://localhost:4000/signUp", resData);
};

export const useSignUpData = () => {
  const queryClient = useQueryClient();

  return useMutation(SignUpRegister, {
    onSuccess: (data) => {
      console.log('Sign-up successful:', data);
      queryClient.invalidateQueries('signUp');
    },
    onError: (error) => {
      console.error('Error during sign-up:', error);
    },
  });
};

//SignIn Validation   

const saveSignIn = async (payload: any) => {
  try {
    const response = await axios.get("http://localhost:4000/signUp", payload);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const userData = response.data;
    return Array.isArray(userData) ? userData : [];
  } catch (error) {
    throw new Error("Signin failed");
  }
};

export const useSaveSignIn = () => {
  const router = useRouter();
  const { mutate } = useMutation(saveSignIn, {
    onSuccess: (users, payload) => {
      const user = users.find((u) => u.email === payload.email);
      if (user && user.password === payload.password) {
        router.push("/dashboard");
        console.log("SignIn successful", payload);
      } else {
        console.log("Sign in Failed");
        alert("Username or password is incorrect");
      }
    },
    onError: (error) => {
      console.error("Sign-in failed", error);
    },
  });

  return { mutate };
};



//User Profile Dataa

const UserProfile = async (id: any) => {
  const response = await axios.get(`http://localhost:4000/customer/${id}`);
  return response.data;
};

export const useUserProfile = (id: any) => {
  return useQuery(['customer', id], () => UserProfile(id), {
    onSuccess: (data) => {
      console.log('User profile data:', data);
    },
    onError: (error) => {
      console.error('Error fetching user profile:', error);
    },
  });
};