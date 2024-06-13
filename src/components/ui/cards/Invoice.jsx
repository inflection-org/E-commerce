import React from 'react'

function Invoice() {
  return (
    <div className=' md:px-32'>
      <div className='block md:flex justify-between'>
        <h1 className='text-3xl font-semibold'>Invoice</h1>
        <h1 className='text-xl  text-gray md:text-black md:text-3xl font-semibold'>
          Tax invoice/Payment Receipt
        </h1>
      </div>
      {/* ******************address********************* */}
      <div className='md:flex w-full px-2 justify-between py-12 mt-5 bg-light_gray'>
        <div className='w-full'>
          <h1>
            <span className='font-bold'> Order ID </span>#77667
          </h1>
          <h1>
            <span className='font-bold'> Date </span>12 jun 2021
          </h1>
          <h1>
            <span className='font-bold'> Payment Due </span>12 jun 2021
          </h1>
        </div>
        <div className='mt-3 md:mt-0'>
          <h1 className='font-bold'> Customer Details </h1>
          <p>Name: prakhar maurya</p>
          <p>Email: 000.excel@gmail.com</p>
          <p>Billing Address: Khalwapur Khamaria</p>
          <p>Uttar Pradesh - 221306</p>
          <p>Payer Phone: +919369568303</p>
          <p>Payer Email: 000.excel@gmail.com</p>
        </div>
      </div>
      <div>
        {/* **************table*************** */}
        <div className='flex justify-center py-6'>
          <div>
            <table class='table-auto '>
              <thead className='rounded-lg  bg-orange'>
                <tr class='text-white '>
                  <th class='px-4 py-2 border-2 border-gray  font-bold text-left'>
                    Name
                  </th>
                  <th class='px-4 py-2 border-2 border-gray  font-bold md:w-80 text-left'>
                    Design Name
                  </th>
                  <th class='px-4 py-2 border-2 border-gray  font-bold md:w-40 text-left'>
                    Prince
                  </th>
                  <th class='px-4 py-2 border-2 border-gray  font-bold  md:w-40 text-left'>
                    Discount
                  </th>
                  <th class='px-4 py-2 border-2 border-gray  font-bold md:w-40  text-left'>
                    D.Price
                  </th>
                  <th class='px-4 py-2 border-2 border-gray  font-bold md:w-40  text-left'>
                    GST 18%
                  </th>
                  <th class='px-4 py-2 border-2 border-gray  font-bold md:w-40  text-left'>
                    Total-Amount
                  </th>
                </tr>
              </thead>
              <tbody className=''>
                <tr class='bg-white'>
                  <td class=' border border-gray/70 px-4 py-2'>#</td>
                  <td class=' border border-gray/70 px-4 py-2 text-center'>
                    hvhv
                  </td>
                  <td class=' border border-gray/70 px-4 py-2'>Prince</td>
                  <td class=' border border-gray/70 px-4 py-2'>Discount</td>
                  <td class=' border border-gray/70 px-4 py-2'>D.Price</td>
                  <td class=' border border-gray/70 px-4 py-2'>GST 18%</td>
                  <td class=' border border-gray/70 bg-light_gray px-4 py-2'>
                    Total-Amount
                  </td>
                </tr>
                <tr class='bg-white'>
                  <td class=' border border-gray/70 px-4 py-2'>#</td>
                  <td class=' border border-gray/70 px-4 py-2 text-center'>
                    hvhv
                  </td>
                  <td class=' border border-gray/70 px-4 py-2'>Prince</td>
                  <td class=' border border-gray/70 px-4 py-2'>Discount</td>
                  <td class=' border border-gray/70 px-4 py-2'>D.Price</td>
                  <td class=' border border-gray/70 px-4 py-2'>GST 18%</td>
                  <td class=' border border-gray/70 px-4 py-2 '>
                    Total-Amount
                  </td>
                </tr>
                <tr class='bg-white'>
                  <td class=' border border-gray/70 px-4 py-2'>#</td>
                  <td class=' border border-gray/70 px-4 py-2 text-center'>
                    hvhv
                  </td>
                  <td class=' border border-gray/70 px-4 py-2'>Prince</td>
                  <td class=' border border-gray/70 px-4 py-2'>Discount</td>
                  <td class=' border border-gray/70 px-4 py-2'>D.Price</td>
                  <td class=' border border-gray/70 px-4 py-2'>GST 18%</td>
                  <td class=' border border-gray/70 px-4 py-2 bg-light_gray'>
                    Total-Amount
                  </td>
                </tr>
                <tr class='bg-white'>
                  <td class=' border border-gray/70 px-4 py-2'>#</td>
                  <td class=' border border-gray/70 px-4 py-2 text-center'>
                    hvhv
                  </td>
                  <td class=' border border-gray/70 px-4 py-2'>Prince</td>
                  <td class=' border border-gray/70 px-4 py-2'>Discount</td>
                  <td class=' border border-gray/70 px-4 py-2'>D.Price</td>
                  <td class=' border border-gray/70 px-4 py-2'>GST 18%</td>
                  <td class=' border border-gray/70 px-4 py-2'>Total-Amount</td>
                </tr>
                <tr class='bg-white'>
                  <td class=' border border-gray/70 px-4 py-2'>#</td>
                  <td class=' border border-gray/70 px-4 py-2 text-center'>
                    hvhv
                  </td>
                  <td class=' border border-gray/70 px-4 py-2'>Prince</td>
                  <td class=' border border-gray/70 px-4 py-2'>Discount</td>
                  <td class=' border border-gray/70 px-4 py-2'>D.Price</td>
                  <td class=' border border-gray/70 px-4 py-2'>GST 18%</td>
                  <td class=' border border-gray/70 px-4 py-2 bg-light_gray'>
                    Total-Amount
                  </td>
                </tr>
                <tr class='bg-white'>
                  <td class=' border border-gray/70 px-4 py-2'>#</td>
                  <td class=' border border-gray/70 px-4 py-2 text-center'>
                    hvhv
                  </td>
                  <td class=' border border-gray/70 px-4 py-2'>Prince</td>
                  <td class=' border border-gray/70 px-4 py-2'>Discount</td>
                  <td class=' border border-gray/70 px-4 py-2'>D.Price</td>
                  <td class=' border border-gray/70 px-4 py-2'>GST 18%</td>
                  <td class=' border border-gray/70 px-4 py-2'>Total-Amount</td>
                </tr>
                <tr class='bg-white'>
                  <td class='border border-gray/70 px-4 py-2'>#</td>
                  <td class='border border-gray/70 px-4 py-2 text-center'>
                    hvhv
                  </td>
                  <td class='border border-gray/70 px-4 py-2'>Prince</td>
                  <td class='border border-gray/70 px-4 py-2'>Discount</td>
                  <td class='border border-gray/70 px-4 py-2'>D.Price</td>
                  <td class='border border-gray/70 px-4 py-2'>GST 18%</td>
                  <td class='border border-gray/70 px-4 py-2 bg-light_gray'>
                    Total-Amount
                  </td>
                </tr>
              </tbody>
            </table>
            <table className=' flex justify-end font-bold '>
              <tbody>
                <tr class='bg-white '>
                  <td class='border border-gray/70 px-4 w-[159px] py-2 '>
                    Subtotal
                  </td>
                  <td class='border border-gray/70 px-4 w-[156px] py-2'>
                    1230.0
                  </td>
                  <td class='border border-gray/70 px-4 w-[158px] py-2'>
                    2364.0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* ********************************************* */}
        <hr></hr>
        <div className='block md:flex justify-between py-5'>
          <div className=''>
            <h1 className='font-bold'> RUSG AI</h1>
            <p> Khalwapur, Khamaria, Uttar Pradesh - 221306</p>
            <p> GSTIN: 09AESPG2413F1ZM</p>
            <p>PAN: AESPG2413F</p>
            <p> Email: team@rugsai.in</p>
          </div>
          <div className='mt-3 md:mt-0'>
            <span className='font-bold'>Payment Mode :</span> card
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
  )
}

export default Invoice
