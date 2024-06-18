import React from "react";
import { useEffect, useState } from "react";
import { instance } from "@/app/axios/Api";
import { toast } from "react-toastify";
import { MdOutlinePermDeviceInformation } from "react-icons/md";

const AddressBook = () => {
  const [addresses, setAddresses] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [updateAddressId, setUpdateAddressId] = useState("");
  const [state, setState] = useState({
    name: "",
    phone: "",
    state: "",
    phone_opt: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
  });

  const [inputError, setInputError] = useState({
    name: "",
    phone: "",
    state: "",
    phone_opt: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
  });
  const [UpdateAddress, setUpdateAddress] = useState({
    name: "",
    phone: "",
    state: "",
    phone_opt: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
  });

  const Show = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  // **************add address*****************
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(state)
    setState({
      name: "",
      state: "",
      phone: "",
      phone_opt: "",
      address: "",
      city: "",
      country: "",
      pincode: "",
    });
    try {
      // console.log(state)
      const res = await instance.post("/address", {
        name: state.name,
        state: state.state,
        phone: state.phone,
        phone_opt: state.phone_opt,
        address: state.address,
        city: state.city,
        country: state.country,
        pincode: state.pincode,
      });
      // console.log(res.data);
      toast.success(res.data.message);
      setIsOpen(true);
      // search()
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error(error.message);
      }
    }
  };
  // **************update address*****************

  const onsubmit = async (event) => {
    event.preventDefault();
    console.log(UpdateAddress);
    try {
      const res = await instance.patch(
        `/address/${updateAddressId}`,
        UpdateAddress
      );
      // console.log(res.data);
      toast.success(res.data.message);
      setUpdateAddress({
        name: "",
        state: "",
        phone: "",
        phone_opt: "",
        address: "",
        city: "",
        country: "",
        pincode: "",
      });

      setIsShow(false);
      setRefresh(!refresh);
      // search()
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  //   **************get address*****************
  useEffect(() => {
    async function search() {
      try {
        const res = await instance.get("/address/my");
        const d = res.data.map((e) => {
          e.editMode = false;
          return e;
        });
        console.log(d);
        setAddresses(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    search();
  }, [refresh]);
  // ***************delete address******************
  const Remove = async (address_id) => {
    try {
      const { data } = await instance.delete(`/address/${address_id}`);
      console.log(data);
      toast.success(data);
      const remainAddresses = addresses.filter(
        (item) => item.address_id !== address_id
      );
      setAddresses(remainAddresses);
    } catch (err) {
      console.log(err);
      if (err.res.data.message) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="py-5 px-5">
      {/* *************new Address form************* */}
      <div onClick={() => Show()} className="rounded-md bg-white shadow-md">
        <button className=" p-2 w-full h-auto text-gray hover:text-blue text-lg flex items-center">
          <span className="text-2xl mx-2"> + </span>Add New Address
        </button>
      </div>
      {/* ****************new  Address form******************** */}
      {!isOpen && (
        <div className="bg-white rounded-md shadow-md py-4 mt-4 md:px-4">
          <div className="w-full  mx-auto">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-gray text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  {/* *******name******* */}
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray text-xs font-bold mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={state.name}
                        onChange={(e) => {
                          setState({ ...state, name: e.target.value });
                        }}
                        className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Enter Name"
                      />
                    </div>
                    <p className="text-red text-xs">{inputError.name}</p>
                  </div>
                  {/* *******contact******* */}
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray text-xs font-bold mb-2">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={state.phone}
                        onChange={(e) =>
                          setState({ ...state, phone: e.target.value })
                        }
                        className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  {/* ************state******* */}
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray text-xs font-bold mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={state.state}
                        onChange={(e) =>
                          setState({ ...state, state: e.target.value })
                        }
                        className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  {/* *************phone_opt******** */}
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray text-xs font-bold mb-2">
                        Altenete Phone
                      </label>
                      <input
                        type="text"
                        name="phone_opt"
                        value={state.phone_opt}
                        onChange={(e) =>
                          setState({ ...state, phone_opt: e.target.value })
                        }
                        className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Alternate Phone"
                      />
                    </div>
                  </div>
                </div>
                {/* ********Address******** */}
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray text-xs font-bold mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={state.address}
                        onChange={(e) =>
                          setState({ ...state, address: e.target.value })
                        }
                        className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Address"
                      />
                    </div>
                  </div>

                  {/* ***********city******* */}
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray text-xs font-bold mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={state.city}
                        onChange={(e) =>
                          setState({ ...state, city: e.target.value })
                        }
                        className="border-0 px-3 py-3 text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  {/* ***********country******* */}
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray text-xs font-bold mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={state.country}
                        onChange={(e) =>
                          setState({ ...state, country: e.target.value })
                        }
                        className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                  {/* ***********pincode******* */}
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray text-xs font-bold mb-2">
                        Pin Code
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={state.pincode}
                        onChange={(e) =>
                          setState({ ...state, pincode: e.target.value })
                        }
                        className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Pin Code"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8  px-4">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-blue text-white rounded-md hover:bg-green w-28 md:text-base md:p-2"
                  >
                    SAVE
                  </button>
                  <button
                    type="submit"
                    className="text-blue rounded-md hover:font-semibold p-2 md:text-base md:p-2"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* **********Address list******* */}
      <div className="">
        {addresses?.length > 0 ? (
          addresses?.map((addressd, i) => {
            const {
              address_id,
              name,
              address,
              address_line_2,
              city,
              state,
              phone,
              phone_opt,
              pincode,
            } = addressd;
            return (
              <div key={i}>
                <div className=" bg-white rounded-md shadow-md py-4 mt-5 px-4">
                  <p className="font-semibold">Address {i + 1}</p>
                  <p>{name}</p>
                  <p>{address}</p>
                  <p>{address_line_2}</p>
                  <p>{city}</p>
                  <p>{phone}</p>
                  <p>{phone_opt}</p>
                  <p>{pincode}</p>
                  <p>{state}</p>
                  <div className="flex gap-6 mt-5">
                    <button
                      onClick={() => Remove(address_id)}
                      className="bg-blue hover:bg-red text-white w-24 rounded-md hover:text-white p-4 md:text-base md:p-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setIsShow(true);
                        setUpdateAddressId(address_id);
                        setUpdateAddress(addressd);
                      }}
                      className="bg-green text-white w-20  hover:underline rounded-md hover:text-white p-4 md:text-base md:p-2"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                {/* **********Edit Address******* */}
                {isShow && (
                  <div className="lg:fixed absolute  h-[1000px] md:h-screen inset-0 z-50 bg-black/70 ">
                    <div className="bg-white w-full  md:w-[60%] mx-auto rounded-md shadow-md py-4 mt-10 px-4">
                      <div className="w-auto mx-auto">
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                          <form>
                            <h6 className="text-gray text-sm mt-3 mb-6 font-bold uppercase">
                              Update Address
                            </h6>
                            <div className="flex flex-wrap">
                              {/* *******name******* */}
                              <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                  <label className="block uppercase text-gray text-xs font-bold mb-2">
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    value={UpdateAddress.name}
                                    onChange={(e) =>
                                      setUpdateAddress({
                                        ...UpdateAddress,
                                        name: e.target.value,
                                      })
                                    }
                                    className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Enter Name"
                                  />
                                </div>
                              </div>
                              {/* *******contact******* */}
                              <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                  <label className="block uppercase text-gray text-xs font-bold mb-2">
                                    Phone
                                  </label>
                                  <input
                                    type="text"
                                    name="phone"
                                    value={UpdateAddress.phone}
                                    onChange={(e) =>
                                      setUpdateAddress({
                                        ...UpdateAddress,
                                        phone: e.target.value,
                                      })
                                    }
                                    className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Phone"
                                  />
                                </div>
                              </div>
                              {/* ************state******* */}
                              <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                  <label className="block uppercase text-gray text-xs font-bold mb-2">
                                    State
                                  </label>
                                  <input
                                    type="text"
                                    name="state"
                                    value={UpdateAddress.state}
                                    onChange={(e) =>
                                      setUpdateAddress({
                                        ...UpdateAddress,
                                        state: e.target.value,
                                      })
                                    }
                                    className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                              {/* *************phone_opt******** */}
                              <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                  <label className="block uppercase text-gray text-xs font-bold mb-2">
                                    Altenete Phone
                                  </label>
                                  <input
                                    type="text"
                                    name="phone_opt"
                                    value={UpdateAddress.phone_opt}
                                    onChange={(e) =>
                                      setUpdateAddress({
                                        ...UpdateAddress,
                                        phone_opt: e.target.value,
                                      })
                                    }
                                    className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Alternate Phone"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* ********Address******** */}
                            <div className="flex flex-wrap">
                              <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                  <label className="block uppercase text-gray text-xs font-bold mb-2">
                                    Address
                                  </label>
                                  <input
                                    type="text"
                                    name="address"
                                    value={UpdateAddress.address}
                                    onChange={(e) =>
                                      setUpdateAddress({
                                        ...UpdateAddress,
                                        address: e.target.value,
                                      })
                                    }
                                    className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Address"
                                  />
                                </div>
                              </div>

                              {/* ***********city******* */}
                              <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                  <label className="block uppercase text-gray text-xs font-bold mb-2">
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    name="city"
                                    value={UpdateAddress.city}
                                    onChange={(e) =>
                                      setUpdateAddress({
                                        ...UpdateAddress,
                                        city: e.target.value,
                                      })
                                    }
                                    className="border-0 px-3 py-3 text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="City"
                                  />
                                </div>
                              </div>
                              {/* ***********country******* */}
                              <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                  <label className="block uppercase text-gray text-xs font-bold mb-2">
                                    Country
                                  </label>
                                  <input
                                    type="text"
                                    name="country"
                                    value={UpdateAddress.country}
                                    onChange={(e) =>
                                      setUpdateAddress({
                                        ...UpdateAddress,
                                        country: e.target.value,
                                      })
                                    }
                                    className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Country"
                                  />
                                </div>
                              </div>
                              {/* ***********pincode******* */}
                              <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                  <label className="block uppercase text-gray text-xs font-bold mb-2">
                                    Pin Code
                                  </label>
                                  <input
                                    type="text"
                                    name="pincode"
                                    value={UpdateAddress.pincode}
                                    onChange={(e) =>
                                      setUpdateAddress({
                                        ...UpdateAddress,
                                        pincode: e.target.value,
                                      })
                                    }
                                    className="border-0 px-3 py-3  text-gray bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Pin Code"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-4 mt-8  px-4">
                              <button
                                type="submit"
                                onClick={onsubmit}
                                className="bg-blue text-white rounded-md hover:bg-green w-28 md:text-base md:p-2"
                              >
                                SAVE
                              </button>
                              <button
                                onClick={() => setIsShow(false)}
                                className="text-blue rounded-md hover:font-semibold p-2 md:text-base md:p-2"
                              >
                                CANCEL
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="w-full h-[500px] rounded-md shadow-md bg-white mt-5  flex justify-center text-center items-center ">
            <div className="">
              <p className="text-xl">Empty your Address</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressBook;
