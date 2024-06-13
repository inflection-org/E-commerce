import React from "react";

function Invoice() {
  return (
    <div className=" md:px-32">
      <ul className="block md:flex justify-between">
        <li className="text-3xl font-semibold">Invoice</li>
        <li className="text-xl  text-gray md:text-black md:text-3xl font-semibold">
          Tax invoice/Payment Receipt
        </li>
      </ul>
      {/* ******************address********************* */}
      <div className="md:flex w-full px-2 justify-between py-12 mt-5 bg-light_gray">
        <ul className="w-full">
          <li>
            <span className="font-bold"> Order ID </span>#77667
          </li>
          <li>
            <span className="font-bold"> Date </span>12 jun 2021
          </li>
          <li>
            <span className="font-bold"> Payment Due </span>12 jun 2021
          </li>
        </ul>
        <ul className="mt-3 md:mt-0">
          <li className="font-bold">Customer Details</li>
          <li>Name: prakhar maurya</li>
          <li>Email: 000.excel@gmail.com</li>
          <li>Billing Address: Khalwapur Khamaria</li>
          <li>Uttar Pradesh - 221306</li>
          <li>Payer Phone: +919369568303</li>
          <li>Payer Email: 000.excel@gmail.com</li>
        </ul>
      </div>
      <div>
        {/* **************table*************** */}
        <div className="flex justify-center py-6">
          <div>
            <table class="table-auto ">
              <thead className="rounded-lg  bg-orange">
                <tr class="text-white ">
                  <th class="px-4 py-2 border-2 border-gray  font-bold text-left">
                    Name
                  </th>
                  <th class="px-4 py-2 border-2 border-gray  font-bold md:w-80 text-left">
                    Design Name
                  </th>
                  <th class="px-4 py-2 border-2 border-gray  font-bold md:w-40 text-left">
                    Prince
                  </th>
                  <th class="px-4 py-2 border-2 border-gray  font-bold  md:w-40 text-left">
                    Discount
                  </th>
                  <th class="px-4 py-2 border-2 border-gray  font-bold md:w-40  text-left">
                    D.Price
                  </th>
                  <th class="px-4 py-2 border-2 border-gray  font-bold md:w-40  text-left">
                    GST 18%
                  </th>
                  <th class="px-4 py-2 border-2 border-gray  font-bold md:w-40  text-left">
                    Total-Amount
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr class="bg-white">
                  <td class=" border border-gray/70 px-4 py-2">#</td>
                  <td class=" border border-gray/70 px-4 py-2 text-center">
                    hvhv
                  </td>
                  <td class=" border border-gray/70 px-4 py-2">Prince</td>
                  <td class=" border border-gray/70 px-4 py-2">Discount</td>
                  <td class=" border border-gray/70 px-4 py-2">D.Price</td>
                  <td class=" border border-gray/70 px-4 py-2">GST 18%</td>
                  <td class=" border border-gray/70 bg-light_gray px-4 py-2">
                    Total-Amount
                  </td>
                </tr>
                <tr class="bg-white">
                  <td class=" border border-gray/70 px-4 py-2">#</td>
                  <td class=" border border-gray/70 px-4 py-2 text-center">
                    hvhv
                  </td>
                  <td class=" border border-gray/70 px-4 py-2">Prince</td>
                  <td class=" border border-gray/70 px-4 py-2">Discount</td>
                  <td class=" border border-gray/70 px-4 py-2">D.Price</td>
                  <td class=" border border-gray/70 px-4 py-2">GST 18%</td>
                  <td class=" border border-gray/70 px-4 py-2 ">
                    Total-Amount
                  </td>
                </tr>
                <tr class="bg-white">
                  <td class=" border border-gray/70 px-4 py-2">#</td>
                  <td class=" border border-gray/70 px-4 py-2 text-center">
                    hvhv
                  </td>
                  <td class=" border border-gray/70 px-4 py-2">Prince</td>
                  <td class=" border border-gray/70 px-4 py-2">Discount</td>
                  <td class=" border border-gray/70 px-4 py-2">D.Price</td>
                  <td class=" border border-gray/70 px-4 py-2">GST 18%</td>
                  <td class=" border border-gray/70 px-4 py-2 bg-light_gray">
                    Total-Amount
                  </td>
                </tr>
                <tr class="bg-white">
                  <td class=" border border-gray/70 px-4 py-2">#</td>
                  <td class=" border border-gray/70 px-4 py-2 text-center">
                    hvhv
                  </td>
                  <td class=" border border-gray/70 px-4 py-2">Prince</td>
                  <td class=" border border-gray/70 px-4 py-2">Discount</td>
                  <td class=" border border-gray/70 px-4 py-2">D.Price</td>
                  <td class=" border border-gray/70 px-4 py-2">GST 18%</td>
                  <td class=" border border-gray/70 px-4 py-2">Total-Amount</td>
                </tr>
                <tr class="bg-white">
                  <td class=" border border-gray/70 px-4 py-2">#</td>
                  <td class=" border border-gray/70 px-4 py-2 text-center">
                    hvhv
                  </td>
                  <td class=" border border-gray/70 px-4 py-2">Prince</td>
                  <td class=" border border-gray/70 px-4 py-2">Discount</td>
                  <td class=" border border-gray/70 px-4 py-2">D.Price</td>
                  <td class=" border border-gray/70 px-4 py-2">GST 18%</td>
                  <td class=" border border-gray/70 px-4 py-2 bg-light_gray">
                    Total-Amount
                  </td>
                </tr>
                <tr class="bg-white">
                  <td class=" border border-gray/70 px-4 py-2">#</td>
                  <td class=" border border-gray/70 px-4 py-2 text-center">
                    hvhv
                  </td>
                  <td class=" border border-gray/70 px-4 py-2">Prince</td>
                  <td class=" border border-gray/70 px-4 py-2">Discount</td>
                  <td class=" border border-gray/70 px-4 py-2">D.Price</td>
                  <td class=" border border-gray/70 px-4 py-2">GST 18%</td>
                  <td class=" border border-gray/70 px-4 py-2">Total-Amount</td>
                </tr>
                <tr class="bg-white">
                  <td class="border border-gray/70 px-4 py-2">#</td>
                  <td class="border border-gray/70 px-4 py-2 text-center">
                    hvhv
                  </td>
                  <td class="border border-gray/70 px-4 py-2">Prince</td>
                  <td class="border border-gray/70 px-4 py-2">Discount</td>
                  <td class="border border-gray/70 px-4 py-2">D.Price</td>
                  <td class="border border-gray/70 px-4 py-2">GST 18%</td>
                  <td class="border border-gray/70 px-4 py-2 bg-light_gray">
                    Total-Amount
                  </td>
                </tr>
              </tbody>
            </table>
            <table className=" flex justify-end font-bold ">
              <tbody>
                <tr class="bg-white ">
                  <td class="border border-gray/70 px-4 w-[159px] py-2 ">
                    Subtotal
                  </td>
                  <td class="border border-gray/70 px-4 w-[156px] py-2">
                    1230.0
                  </td>
                  <td class="border border-gray/70 px-4 w-[158px] py-2">
                    2364.0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* ********************************************* */}
        <hr></hr>
        <div className="block md:flex justify-between py-5">
          <ul>
            <li className="font-bold"> RUSG AI</li>
            <li> Khalwapur, Khamaria, Uttar Pradesh - 221306</li>
            <li> GSTIN: 09AESPG2413F1ZM</li>
            <li>PAN: AESPG2413F</li>
            <li> Email: team@rugsai.in</li>
          </ul>
          <div className="mt-3 md:mt-0">
            <span className="font-bold">Payment Mode :</span> card
            <p>Declaration</p>
            <p>
              The artworks sold are intendend for end user consumption and not
              for resale.
            </p>
            Please note that this invoice is not a demand for payment<p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
