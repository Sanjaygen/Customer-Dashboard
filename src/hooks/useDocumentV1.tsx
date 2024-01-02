import { FormInputValue } from "@/page/document/helper-component/customerDetails/types";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";

const initialState = {
  modalOpen: false,
  searchInput: "",
  filterCustomerData: [],
  page: 0,
  rowsPerPage: 5,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "MODAL":
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case "SET_SELECTED_CUSTOMERS":
      return {
        ...state,
        selectedCustomers: action.payload,
      };
    case "RESET_CUSTOMERS":
      return {
        ...state,
        selectedCustomers: null,
      };
    // case "SEARCH_TERM":
    //   return {
    //     ...state,
    //     searchTerm: action.payload,
    //   };
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    case "CHANGE_PAGE":
      return { ...state, page: action.payload };
    case "CHANGE_ROWS_PER_PAGE":
      return { ...state, rowsPerPage: action.payload, page: 0 };
    default:
      return state;
  }
};

const StateProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { modalOpen, selectedCustomers, searchInput } = state;


  const form = useForm<FormInputValue>({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      phoneNumber: 0,
      companyName: "",
      status: true,
    },
  });

  const { updateCustomer } = useUpdateCustomer();
  const { data: customers } = useCustomers();

  const toggleModal = () => {
    dispatch({ type: "MODAL" });
  };

  const closeModal = () => {
    dispatch({ type: "MODAL" });
    dispatch({ type: "RESET_CUSTOMERS" });
  };

  const SetselectedCustomers = (customer: any) => {
    dispatch({ type: "SET_SELECTED_CUSTOMERS", payload: customer });
  };

  const handleToggle = async (customer: any) => {
    try {
      const updateValue = { ...customer, status: !customer.status };
      await updateCustomer(customer.id, updateValue);
      dispatch({ type: "SET_SELECTED_CUSTOMERS", payload: updateValue });
    } catch (error) {
      console.log("Customer Status Not Update", error);
    }
  };

  const onSubmit = async (data: FormInputValue) => {
    try {
      if (selectedCustomers) {
        await updateCustomer(selectedCustomers.id, data);
      } else {
        console.log("error");
      }
      closeModal();
      //   dispatch({ type: "MODAL" });
      //   dispatch({ type: "RESET_CUSTOMERS" });
    } catch (error) {
      console.log("Updating Failed", error);
    }
  };

  const handleUpdate = (customer: any) => {
    SetselectedCustomers(customer);

    form.reset({
      fname: customer.fname,
      lname: customer.lname,
      email: customer.email,
      companyName: customer.companyName,
      phoneNumber: customer.phoneNumber,
      status: customer.status,
    });
    dispatch({ type: "MODAL" });
  };

  const router = useRouter();

  const navigateToUser = (customer: any) => {
    router.push(`/dashboard/${customer.id}`);
  };

  const handleSearchInput = (event: any) => {
    dispatch({ type: "SET_SEARCH_INPUT", payload: event.target.value });
  };

  const filterCustomerData = customers
    ? searchInput.length >= 3
      ? customers.filter((customer: any) =>
          Object.values(customer).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : customers
    : [];

//   const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target || {};
//     if (value.length >= 3) {
//         dispatch({ type: 'SEARCH_TERM', payload: value });
//     } else {
//         dispatch({ type: 'SEARCH_TERM', payload: '' });
//     }
// };

  const handleChangePage = (newPage: any) => {
    dispatch({ type: "CHANGE_PAGE", payload: newPage });
  };

  const handleChangeRowsPerPage = (event: any) => {
    const newRowsPage = parseInt(event.target.value, 10);
    dispatch({
      type: "CHANGE_ROWS_PER_PAGE",
      payload: newRowsPage,
    });
  };

  const pathid = usePathname(); 
  const customerId = parseInt(pathid.split("/").pop() || "");
  const customer = customers && customers.find((item: any) => item.id === customerId);

  return {
    modalOpen,
    toggleModal,
    onSubmit,
    handleUpdate,
    SetselectedCustomers,
    form,
    customers,
    navigateToUser,
    handleToggle,
    closeModal,
    filterCustomerData,
    handleSearchInput,
    page: state.page,
    rowsPerPage: state.rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    customer,
  };
};
export default StateProvider;

//update Customers Data

const CustomerUpdateData = (customerId: any, updatedData: any) => {
  return axios.put(`http://localhost:4000/customer/${customerId}`, updatedData);
};

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  const updateCustomerMutation = useMutation(
    ({ customerId, updatedData }: any) =>
      CustomerUpdateData(customerId, updatedData)
  );
  const updateCustomer = async (customerId: any, updatedData: any) => {
    try {
      await updateCustomerMutation.mutateAsync({ customerId, updatedData });
      queryClient.invalidateQueries("customer");
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return { updateCustomer, updateCustomerMutation };
};

//Add Customers Data

const CustomerDataAdd = async (customerData: any) => {
  const response = await axios.post("http://localhost:4000/customer", customerData);
  return response.data;
};

export const useCustomerDataAdd = () => {
  return useMutation(CustomerDataAdd, {
    onSuccess: (data) => {
      console.log("Data added successfully:", data);
    },
    onError: (error) => {
      console.error("Error adding data:", error);
    },
  });
};


//Customers Data Get

const fetchCustomer = async () => {
  const response = await axios.get("http://localhost:4000/customer");
  return response.data;
};

export const useCustomers = () => {
  const queryClient = useQueryClient();
  return useQuery("customer", fetchCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries("customer");
    },
    onError: (error) => {
      console.log("Data fetching error", error);
    },
  });
};


//Delete Customer data

const deleteCustomer = async (customerId: any) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/customer/${customerId}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed customer delete", error);
  }
};

  export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries("customer");
    },
    onError: (error) => {
      console.log(" Deleted failed", error);
    },
  });

  return {
    deleteCustomer: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
};  
