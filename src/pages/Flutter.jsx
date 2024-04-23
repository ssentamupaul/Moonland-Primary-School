// import { FlutterWaveButton } from "flutterwave-react-v3";
// import React, { useState } from "react";
// import Logo from "../pages/img/logo.png";

// const config = {
//   public_key: "FLWPUBK-0a376d26869c6465fbf5a9eb15ed8267-X",
//   tx_ref: Date.now(),
//   currency: "USD",
//   payment_options: "card,mobilemoney,ussd",
//   customer: {
//     email: "moonlandnps@gmail.com ",
//     phone_number: "256 751 892 892",
//     name: "Moonland Primary School",
//   },
//   customizations: {
//     title: "Donate To Educate The Young Generation",
//     description: "Moonland Primary School",
//     logo: { Logo },
//   },
// };

// export default function Flutter() {
//   const [selectedAmount, setSelectedAmount] = useState(0);

//   const handleAmountSelection = (amount) => {
//     setSelectedAmount(amount);
//   };

//   return (
//     <div>
//       <section className="donate-section">
//         <div className="donate-content text-center">
//           <h2>
//             Support Our <span className="Us">Cause </span>
//           </h2>
//           <p>
//             Your contribution can make a difference in the lives of many. Donate
//             now to support our mission.
//           </p>
//           <h2>Select Donation Amount</h2>
//           <div className="donation-buttons row justify-content-around pb-4  pt-3">
//             <div className="col-md-2 col-sm-4">
//               {" "}
//               <button
//                 className="donation-button btn btn-rounded btn btn-danger mt-3 rounded-pill text-white"
//                 onClick={() => handleAmountSelection(1)}
//               >
//                 Donate $1
//               </button>
//             </div>

//             <div className="col-md-2 col-sm-4">
//               <button
//                 className="donation-button btn btn-rounded btn btn-danger mt-3 rounded-pill text-white"
//                 onClick={() => handleAmountSelection(50)}
//               >
//                 Donate $50
//               </button>
//             </div>

//             <div className="col-md-2 col-sm-4">
//               {" "}
//               <button
//                 className="donation-button btn btn-rounded btn btn-danger mt-3 rounded-pill text-white"
//                 onClick={() => handleAmountSelection(70)}
//               >
//                 Donate $70
//               </button>
//             </div>

//             <div className="col-md-2 col-sm-4">
//               {" "}
//               <button
//                 className="donation-button btn btn-rounded btn btn-danger mt-3 rounded-pill text-white"
//                 onClick={() => handleAmountSelection(90)}
//               >
//                 Donate $90
//               </button>
//             </div>

//             <div className="col-md-2 col-sm-4  ">
//               {" "}
//               <button
//                 className="donation-button btn btn-rounded btn btn-danger mt-3 rounded-pill text-white"
//                 onClick={() => handleAmountSelection(99)}
//               >
//                 Donate $99
//               </button>
//             </div>
//           </div>
//           {selectedAmount > 0 && (
//             <FlutterWaveButton
//               {...config}
//               amount={selectedAmount}
//               text={`Donate $${selectedAmount}`}
//               className="btn donatebtn text-light "
//               callback={(response) => {
//                 console.log(response);
//                 // You can handle the response here if needed
//               }}
//             />
//           )}
//           <p className="account-number">
//             To help young children acquire quality education
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

import { FlutterWaveButton } from "flutterwave-react-v3";
import React, { useState } from "react";
import Logo from "../pages/img/logo.png";

const config = {
  public_key: "FLWPUBK-0a376d26869c6465fbf5a9eb15ed8267-X",
  tx_ref: Date.now(),
  currency: "UGX",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email: "moonlandnps@gmail.com",
    phone_number: "256 751 892 892",
    name: "Moonland Primary School",
  },
  customizations: {
    title: "Donate To Educate The Young Generation",
    description: "Moonland Primary School",
    logo: { Logo },
  },
};

export default function Flutter() {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };

  const handleCustomAmountSubmit = () => {
    const amount = parseFloat(customAmount);
    if (!isNaN(amount) && amount > 0) {
      setSelectedAmount(amount);
    }
  };

  return (
    <div>
      <section className="donate-section">
        <div className="donate-content text-center">
          <h5>
            Your contribution can make a difference in the lives of many. Donate
            now to <span className="Us">support our mission. </span>
          </h5>

          <h2>Select Donation Amount</h2>
          <div className="donation-buttons row justify-content-around pb-4 pt-3">
            <div className="col-md-2 col-sm-4">
              {" "}
              <button
                className="donation-button btn btn-rounded btn btn-danger mt-3 rounded-pill text-white"
                onClick={() => handleAmountSelection(50)}
              >
                Donate $50
              </button>
            </div>

            {/* Add more buttons as needed */}
          </div>
          <div className="custom-donation">
            <input
              type="number"
              className="form-control"
              placeholder="Enter amount to donate in dollars"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
            <button
              className="btn btn-primary mt-3 mb-3 "
              onClick={handleCustomAmountSubmit}
            >
              Donate {customAmount} Amount
            </button>
          </div>
          {selectedAmount > 0 && (
            <FlutterWaveButton
              {...config}
              amount={selectedAmount}
              text={`Press Here to Continue  $${selectedAmount}`}
              className="btn donatebtn text-light "
              callback={(response) => {
                console.log(response);
                // You can handle the response here if needed
              }}
            />
          )}
          <p className="account-number">
            To help young children acquire quality education
          </p>
        </div>
      </section>
    </div>
  );
}
