export const baseUrl = "https://service.deepanwita.fun/";
export const end_pont = {
  // <====Accounts======>
  register: "accountapp/register/",
  login: "accountapp/login/",
  logout: "accountapp/logout/",
  profile: "accountapp/user/",
  // <====Services==========>
  allservices: "service/api/services/all-services/",
  allcatitem: "catagory/api_catagory/lists/all-categories/",
  pincodeserv: "service/api/public_route/",
  // <============Booking================>
  booking: "bookings/api/customer/",
  showbooking: "bookings/api/customer/my-bookings/",
  deletebookings:"bookings/api/customer",
  // <====Service Provider Form======>
  providerreg: "provider/api/providers/",
  providerprofileget: "provider/api/providers/my-profile/",
  prvdetailsupdate: "provider/api/providers/",
  prvdetailsupdateput: "provider/api/providers/",
  profiledelete: "provider/api/providers/",
  Order: "provider/api/ViewBookings/my-bookings/",
  bookaccept:"provider/api/ViewBookings",
  bookreject:"provider/api/ViewBookings",
  bookcomplete:"provider/api/ViewBookings",
  //=======Ratings =======>
    rating:"bookings/api/customer"
};
