import React, { useEffect } from "react";
import { backendUrl } from "../../server";
import { useSelector } from "react-redux";
import { AiOutlineCamera, AiOutlineDelete } from "react-icons/ai";
import styles from "../../styles/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Button} from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { MdOutlineTrackChanges } from "react-icons/md";

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    

  return (
    <div className="w-full">
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backendUrl}${user?.avatar.url}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-fill px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Enter your password</label>
                  <input
                    type="password"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/* order page */}
      {
        active === 2 && (
          
          <div>
            <AllOrders />
          </div>
        )
      }
      {/* order page */}
      {
        active === 3 && (
          
          <div>
            <AllRefunds />
          </div>
        )
      }
      {
        active === 5 && (
          
          <div>
            <TrackOrder />
          </div>
        )
      }
      {
        active === 6 && (
          
          <div>
            <PaymentMethods />
          </div>
        )
      }
      {
        active === 7 && (
          
          <div>
            <Address />
          </div>
        )
      }
    </div>
  );
};


const AllOrders = () => {
  const orders = [
    {_id:"12967891678d6sa87d6876",
      orderItems:[
        {
          name:"Iphone 14 Pro Max",
        },
      ],
      totalPrice:999,
      orderStatus:"Processing",
    }
  ]

  const columns = [
  { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

  {
    field: "status",
    headerName: "Status",
    minWidth: 130,
    flex: 0.7,
    cellClassName: (params) =>
      params.row.status === "Delivered" ? "greenColor" : "redColor",
  },
  {
    field: "itemsQty",
    headerName: "Items Qty",
    type: "number",
    minWidth: 130,
    flex: 0.7,
  },

  {
    field: "total",
    headerName: "Total",
    type: "number",
    minWidth: 130,
    flex: 0.8,
  },

  {
    field: " ",
    flex: 1,
    minWidth: 150,
    headerName: "",
    type: "number",
    sortable: false,
    renderCell: (params) => (
      <Link to={`/user/order/${params.id}`}>
        <Button>
          <AiOutlineArrowRight size={20} />
        </Button>
      </Link>
    ),
  },
];

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty: item.orderItems.length,
      total: "$" + item.totalPrice,
      status: item.orderStatus,
    })
  })
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
        >

      </DataGrid>
    </div>
  )  
}
const AllRefunds = () => {
  const orders = [
    {_id:"12967891678d6sa87d6876",
      orderItems:[
        {
          name:"Iphone 14 Pro Max",
        },
      ],
      totalPrice:999,
      orderStatus:"Processing",
    }
  ]

  const columns = [
  { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

  {
    field: "status",
    headerName: "Status",
    minWidth: 130,
    flex: 0.7,
    cellClassName: (params) =>
      params.row.status === "Delivered" ? "greenColor" : "redColor",
  },
  {
    field: "itemsQty",
    headerName: "Items Qty",
    type: "number",
    minWidth: 130,
    flex: 0.7,
  },

  {
    field: "total",
    headerName: "Total",
    type: "number",
    minWidth: 130,
    flex: 0.8,
  },

  {
    field: " ",
    flex: 1,
    minWidth: 150,
    headerName: "",
    type: "number",
    sortable: false,
    renderCell: (params) => (
      <Link to={`/user/order/${params.id}`}>
        <Button>
          <AiOutlineArrowRight size={20} />
        </Button>
      </Link>
    ),
  },
];

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty: item.orderItems.length,
      total: "$" + item.totalPrice,
      status: item.orderStatus,
    })
  })
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
        >

      </DataGrid>
    </div>
  )  
}

const TrackOrder = () => {
  const orders = [
    {_id:"12967891678d6sa87d6876",
      orderItems:[
        {
          name:"Iphone 14 Pro Max",
        },
      ],
      totalPrice:999,
      orderStatus:"Processing",
    }
  ]

  const columns = [
  { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

  {
    field: "status",
    headerName: "Status",
    minWidth: 130,
    flex: 0.7,
    cellClassName: (params) =>
      params.row.status === "Delivered" ? "greenColor" : "redColor",
  },
  {
    field: "itemsQty",
    headerName: "Items Qty",
    type: "number",
    minWidth: 130,
    flex: 0.7,
  },

  {
    field: "total",
    headerName: "Total",
    type: "number",
    minWidth: 130,
    flex: 0.8,
  },

  {
    field: " ",
    flex: 1,
    minWidth: 150,
    headerName: "",
    type: "number",
    sortable: false,
    renderCell: (params) => (
      <Link to={`/user/order/${params.id}`}>
        <Button>
          <MdOutlineTrackChanges size={20} />
        </Button>
      </Link>
    ),
  },
];

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty: item.orderItems.length,
      total: "$" + item.totalPrice,
      status: item.orderStatus,
    })
  })
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
        >

      </DataGrid>
    </div>
  )  
}

const PaymentMethods = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba]">Payment Methods</h1>
        <div className={`${styles.button} rounded-md`}>
          <span className="text-[#fff]">
            Add New
          </span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-1024.png" alt="" className="h-[50px] w-[50px]"/>
      </div>
      <h5 className="pl-5 font-[600]">Hussain Intzar</h5>
      <div className="pl-8 flex items-center" >
      <h6>1234 **** **** ****</h6>
      <h5 className="pl-6">08/2034</h5>
      </div>
      <div className="min-w-[10%] flex items-center justify-between pl-8">
        <AiOutlineDelete size={25} className="cursor-pointer" />
      </div>
    </div>
    </div>
  )
}

const Address = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba]">My Addresses</h1>
        <div className={`${styles.button} rounded-md`}>
          <span className="text-[#fff]">
            Add New
          </span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
      <h5 className="pl-5 font-[600]">Default Address</h5>
      <div className="pl-8 flex items-center" >
      <h6>P. Sherman 42, Wallaby Way, Sydney</h6>
      </div>
      <div className="pl-8 flex items-center" >
      <h6>(213) 840-1231</h6>
      </div>
      <div className="min-w-[10%] flex items-center justify-between pl-8">
        <AiOutlineDelete size={25} className="cursor-pointer" />
      </div>
    </div>
    </div>
  )
}


export default ProfileContent;

