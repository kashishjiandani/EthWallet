import React, { useState } from 'react';
import money from '../assets/img/money.jfif';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleFormSubmit = () => {
    // Validate wallet address
    if (!walletAddress.trim()) {
      Swal.fire('Error', 'Wallet address field cannot be empty', 'error');
      return;
    }

    // Validate wallet address format (example: 0x...)
    const addressRegex = /^(0x[a-fA-F0-9]{40})$/;
    if (!addressRegex.test(walletAddress)) {
      Swal.fire('Error', 'Invalid wallet address format', 'error');
      return;
    }

    // Validate amount
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0 || parsedAmount > 10000) {
      Swal.fire('Error', 'Invalid amount. Please enter a number between 0 and 10,000', 'error');
      return;
    }

    // If all validations pass, you can proceed with the form submission logic
    // For now, show a success message
    Swal.fire('Success', 'Form submitted successfully!', 'success');
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center py-10 ">
        <div className="mt-32 bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-[70%] overflow-hidden mb-10">
          <div className="md:flex w-full">
            <div className="md:block w-1/2">
              <img src={money} alt="money" className="h-[600px]" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">TRANSACTION</h1>
                <p>Enter information regarding your transaction</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5 mt-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Wallet Address
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter your wallet address"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Amount
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter the amount you want to transfer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      onClick={handleFormSubmit}
                      className="block w-full max-w-xs mx-auto mt-5 bg-gray-900 hover:bg-slate-500  text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
