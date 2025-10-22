import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/axiosInstance/axiosInstance";
import { end_pont } from "../../Api/api_url";
let {
  register,
  login,
  logout,
  allservices,
  allcatitem,
  pincodeserv,
  profile,
  booking,
  showbooking,
  deletebookings,
  providerreg,
  prvdetailsupdate,
  prvdetailsupdateput,
  providerprofileget,
  profiledelete,
  Order,
  bookaccept,
  bookreject,
  bookcomplete,
  rating
} = end_pont;

// console.log("responce subservice",subservices)
///Register
export const regusr = createAsyncThunk("addusr/regusr", async (data) => {
  const res = await axiosInstance.post(register, data);
  //   console.log("Redux Reg Responce", res);
  return res?.data;
});
//Log In
export const logdin = createAsyncThunk("loginusr/logdin", async (data) => {
  const res = await axiosInstance.post(login, data);
  localStorage.setItem("access_token", res?.data?.access_token);
  localStorage.setItem("refresh_token", res?.data?.refresh_token);
  return res?.data;
});
//Profile
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return rejectWithValue("No token found");

      const res = await axiosInstance.get(profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log("redux responce", res);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
//Log Out
export const logoutusr = createAsyncThunk(
  "auth/logoutusr",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");

      if (!token || !refreshToken) {
        return rejectWithValue("No token found");
      }

      const res = await axiosInstance.post(
        logout,
        { refresh_token: refreshToken },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // local storage clear
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");

      return res?.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
//All Services

export const allservice = createAsyncThunk("serv/allservice", async () => {
  const res = await axiosInstance.get(allservices);
  // console.log("Service Responce", res.data);
  return res?.data;
});
// Sub Category
//  <===================>
export const allcat = createAsyncThunk("allcatserv/allcat", async () => {
  const res = await axiosInstance.get(allcatitem);
  return res?.data;
});
// <======Pincode service featch========>
export const pinfilterserv = createAsyncThunk(
  "servpin/pinfilterserv",
  async (pincode) => {
    const res = await axiosInstance.get(`${pincodeserv}?search=${pincode}`);
    return res?.data;
  }
);
// <======Booking Form=======>
export const bookingForm = createAsyncThunk(
  "bookform/bookingForm",
  async (data) => {
    const res = await axiosInstance.post(booking, data);
    console.log("Booking Response Redux", res);
    return res?.data;
  }
);
// customer booking history
export const allbooking = createAsyncThunk(
  "bookhistory/allbooking",
  async () => {
    const res = await axiosInstance.get(showbooking);
    console.log("bookdetalis redux", res);

    return res?.data;
  }
);
//Delete booking customer
export const deletebooking = createAsyncThunk(
  "historybookdelete/deletebooking",
  async (id) => {
    const res = await axiosInstance.delete(`${deletebookings}/${id}/`);
    return id;
  }
);
// <===============Provider Profile Info=======>
// <=========Provider Register Form========>
export const providerform = createAsyncThunk(
  "providerregister/providerform",
  async (data) => {
    const res = await axiosInstance.post(providerreg, data);
    return res?.data;
  }
);
// <===========Provider Profile Get==========>
export const providermprofile = createAsyncThunk(
  "prvprofile/providermprofile",
  async () => {
    const res = await axiosInstance.get(providerprofileget);
    return res?.data;
  }
);
// <=======Detalisupdate=========>
export const updatepatch = createAsyncThunk(
  "prvdetalisupdatesingle/updatepatch",
  async ({ id, data }) => {
    const res = await axiosInstance.patch(`${prvdetailsupdate}${id}/`, data);
    return res?.data;
  }
);
export const updateput = createAsyncThunk(
  "prvdetalisupdateall/updateput",
  async ({ id, data }) => {
    if (!id) throw new Error("Provider ID is required for PUT");
    const res = await axiosInstance.put(`${prvdetailsupdateput}${id}/`, data);
    return res?.data;
  }
);
// <========Provider Profile Delete========>
export const prvprofiledelet = createAsyncThunk(
  "prfdelete/prvprofiledelet",
  async (id) => {
    const res = await axiosInstance.delete(`${profiledelete}${id}/`);
    return id;
  }
);
// <==========Provider all order=====>
export const prvorder = createAsyncThunk("all/prvorder", async () => {
  const res = await axiosInstance.get(Order);
  return res?.data;
});
//Confirm Booking
export const cfrmbook = createAsyncThunk("confirm/cfrmbook", async (id) => {
  const res = await axiosInstance.post(`${bookaccept}/${id}/confirm/`);
  return res?.data;
});
//cancel booking
export const bookedcancel = createAsyncThunk(
  "cancel/bookedcancel",
  async (id) => {
    const res = await axiosInstance.post(`${bookreject}/${id}/cancel/`);
    return res?.data;
  }
);
//complete book
export const bookedcomplete = createAsyncThunk(
  "complete/bookedcomplete",
  async (id) => {
    const res = await axiosInstance.post(`${bookcomplete}/${id}/complete/`);
    return res?.data;
  }
);
//Ratings
export const customerRating =createAsyncThunk("rate/customerRating",async({id,data})=>{
      const res = await axiosInstance.post(`${rating}/${id}/rate/`,data)
      return res?.data
})
let intialvalue = {
  user: null,
  role: null,
  isProvider: false,
  isCustomer: false,
  services: [],
  subsurb: [],
  bookfrm: [],
  pincodefilter: [],
  providerfrm: {},
  providerorder: [],
  isLoading: false,
  ratingsuccess: [],
  error: null,
};
export const ProviderSlice = createSlice({
  name: "addusr",
  initialState: intialvalue,

  reducers: {
    setProviderData: (state, action) => {
      state.providerfrm = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.isProvider = action.payload.isProvider || false;
      state.isCustomer = action.payload.isCustomer || false;
      state.is_admin = action.payload.is_admin || false;
    },

    clearUser: (state) => {
      state.user = null;
      state.user = null;
      state.role = null;
      state.isProvider = false;
      state.isCustomer = false;
      state.is_admin = false;
    },
  },

  extraReducers: (builder) => {
    ///Rating
    builder.addCase(customerRating.pending,(state,action)=>{
       state.isLoading = true
    })
    builder.addCase(customerRating.fulfilled,(state,action)=>{
       state.isLoading = false
       state.ratingsuccess.push(action.payload)
       state.error = null
    })
     builder.addCase(customerRating.rejected,(state,action)=>{
       state.isLoading = false
       state.ratingsuccess = []
       state.error = action.error.message
    })
    //Register Reducer
    builder.addCase(regusr.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(regusr.fulfilled, (state, action) => {
        (state.isLoading = false), (state.error = null);
      }),
      builder.addCase(regusr.rejected, (state, action) => {
        (state.isLoading = false),
          (state.user = null),
          (state.error = action.error.message);
      });
    ///Login Usr
    builder.addCase(logdin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logdin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.isProvider = action.payload.is_provider;
      state.isCustomer = action.payload.is_customer;
      state.is_admin = action.payload.is_admin;
      state.error = null;
    });
    builder.addCase(logdin.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload.message;
    });
    //profile user & provider
    builder.addCase(fetchProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.isProvider = action.payload.is_provider;
      state.isCustomer = action.payload.is_customer;
      state.is_admin = action.payload.is_admin;
      state.error = null;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //logout user
    builder.addCase(logoutusr.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(logoutusr.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
      state.role = null;
      state.isProvider = false;
      state.isCustomer = false;
      state.is_admin = false;
      state.error = null;

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
    });

    builder.addCase(logoutusr.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    //allservice
    builder.addCase(allservice.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(allservice.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.services = action.payload),
        (state.error = null);
    });
    builder.addCase(allservice.rejected, (state, action) => {
      (state.isLoading = false),
        (state.services = []),
        (state.error = action.error.message);
    });
    //all sub service
    builder.addCase(allcat.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(allcat.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subsurb = action.payload;
      state.error = null;
    });
    builder.addCase(allcat.rejected, (state, action) => {
      state.isLoading = false;
      state.subsurb = [];
      state.error = action.error.message;
    });
    //service by pincode
    builder.addCase(pinfilterserv.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(pinfilterserv.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pincodefilter = action.payload;
      state.error = null;
    });
    builder.addCase(pinfilterserv.rejected, (state, action) => {
      state.isLoading = false;
      state.pincodefilter = [];
      state.error = action.error.message;
    });
    // <======Booking Form=======>
    builder.addCase(bookingForm.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(bookingForm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookfrm.push(action.payload);
      state.error = null;
    });
    builder.addCase(bookingForm.rejected, (state, action) => {
      state.isLoading = false;
      state.bookfrm = [];
      state.error = action.error.message;
    });
    //Show All Booking
    builder.addCase(allbooking.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(allbooking.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookfrm = action.payload;
      state.error = null;
    });
    builder.addCase(allbooking.rejected, (state, action) => {
      state.isLoading = false;
      state.bookfrm = [];
      state.error = action.error.message;
    });
    //Delete Booking
    builder.addCase(deletebooking.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(deletebooking.fulfilled, (state, action) => {
      state.isLoading = false;

      state.bookfrm = state.bookfrm.filter(
        (booking) => booking.id !== action.payload
      );
    });

    builder.addCase(deletebooking.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    //  <=====Provider Form=====>
    //<====Register=====>
    builder.addCase(providerform.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(providerform.fulfilled, (state, action) => {
      state.isLoading = false;
      state.providerfrm = action.payload;
      state.error = null;
    });
    builder.addCase(providerform.rejected, (state, action) => {
      (state.isLoading = false), (state.providerfrm = {});
      state.error = action.error.message;
    });
    /// Get
    builder.addCase(providermprofile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(providermprofile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.providerfrm = action.payload;
    });
    builder.addCase(providermprofile.rejected, (state, action) => {
      state.isLoading = false;
      state.providerfrm = [];
      state.error = action.error.message;
    });
    //======>Update<=========
    // <=====Patch and Put providerformupdate====>
    builder.addCase(updatepatch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatepatch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.providerfrm = action.payload;
      state.error = null;
    });

    builder.addCase(updatepatch.rejected, (state, action) => {
      state.isLoading = false;
      state.providerfrm = null;
      state.error = action.error.message;
    });
    builder.addCase(updateput.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateput.fulfilled, (state, action) => {
      state.isLoading = false;
      state.providerfrm = action.payload;
      state.error = null;
    });

    builder.addCase(updateput.rejected, (state, action) => {
      state.isLoading = false;
      state.providerfrm = null;
      state.error = action.error.message;
    });
    // <=====Patch and Put providerformupdate====>
    // ======>Provider Profile Delete<==========//
    builder.addCase(prvprofiledelet.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(prvprofiledelet.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.providerfrm?.id === action.payload) {
        state.providerfrm = null;
      }
      state.error = null;
    });

    builder.addCase(prvprofiledelet.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    // ======>Provider Profile Delete<==========//
    // <====Provider All Bookings=====>
    builder.addCase(prvorder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(prvorder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.providerorder = action.payload;
      state.error = null;
    });
    builder.addCase(prvorder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    // <=====Confirm=====Cancel===Complete=====>
    // Confirm Booking
    builder.addCase(cfrmbook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(cfrmbook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;

      const id = action.payload?.id ?? action.meta.arg;
      state.providerorder = state.providerorder.map((order) =>
        order.id === id ? { ...order, status: "confirmed" } : order
      );
    });
    builder.addCase(cfrmbook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Cancel Booking
    builder.addCase(bookedcancel.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(bookedcancel.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;

      const id = action.payload?.id ?? action.meta.arg;
      state.providerorder = state.providerorder.map((order) =>
        order.id === id ? { ...order, status: "cancelled" } : order
      );
    });

    builder.addCase(bookedcancel.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Complete Booking
    builder.addCase(bookedcomplete.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(bookedcomplete.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;

      const id = action.payload?.id ?? action.meta.arg;
      state.providerorder = state.providerorder.map((order) =>
        order.id === id ? { ...order, status: "completed" } : order
      );
    });
    builder.addCase(bookedcomplete.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export const { setUser, clearUser, setProviderData } = ProviderSlice.actions;
export default ProviderSlice.reducer;
