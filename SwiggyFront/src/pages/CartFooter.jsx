import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import order2 from '../images/order2.avif'
import sandwitch from '../images/sandwitch.avif'
library.add(fab, fas, far)

export default function CartFooter() {
    let [label, setLabel] = useState(false)
    let [activebtn, setActivebtn] = useState(0)
    let arr = ['Phone No', 'Name', 'Email']
    let loginarr = [{title : 'LOG IN',des : 'Have An Account?'}, {title : 'SIGN UP',des : 'New To Swiggy?'}]
    console.log(activebtn)
    return (
        <section className=' bg-[#E9ECEE]'>
            <div className='max-w-[1320px] mx-auto'>
                <div className='flex py-[50px] justify-between'>
                    <div className='basis-[60%]'>
                        <div className='relative bg-white py-[40px] pl-[40px]'>
                            <div className='bg-[#282C3F] h-[40px] w-[40px] flex justify-center items-center text-white absolute left-[-2%] font-bold'>
                                <FontAwesomeIcon icon="fa-solid fa-shop" />
                            </div>
                            <h3 className='font-semibold'>Oops, something went wrong. Please clear your cart and try again.</h3>
                            <button className='bg-[#FA7F1A] mt-[20px] uppercase text-white text-[14px] font-medium px-[30px] py-[10px]'>Retry</button>
                        </div>

                        <div className='relative bg-white py-[40px] px-[40px] mt-[20px]'>
                            <div className='flex justify-between'>
                                <div className='basis-[70%]'>
                                    <div className='bg-[#282C3F] h-[40px] w-[40px] flex justify-center items-center text-white absolute left-[-2%] font-bold'>
                                        <FontAwesomeIcon icon="fa-regular fa-user" />
                                    </div>
                                    <h3 className='font-semibold text-[18px]'>Account</h3>
                                    <p className='text-[14px] text-[#7E808C]'>To place your order now, log in to your existing account or sign up.</p>
                                    <div className='flex gap-4 my-4'>
                                        {
                                            loginarr.map((v, i) => {
                                                return (
                                                    <button className={`${(activebtn == i) ? 'bg-[#60B246] text-white' : 'border border-[#60B246] text-[#60B246]'} mt-[20px]  text-[12px] px-[30px] py-[5px]`} onClick={() => setActivebtn(i)}>
                                                        {v.des}
                                                        <p className='text-[14px] font-medium'>{v.title}</p>
                                                    </button>
                                                )
                                            })
                                        }

                                    </div>
                                    <div className='w-[80%]'>
                                        <div style={{display:(activebtn == 1) ? 'block' : 'none'}}>
                                            <p className='text-[14px] mb-[15px]'>Sign up or <span className='text-[#FC8019]'>log in to you account</span></p>
                                            <form action="">
                                                {
                                                    arr.map((v, i) => {
                                                        return (
                                                            <div className='border py-[10px] pl-[10px] relative'>
                                                                <label htmlFor="" className={`${(label == i) ? 'top-[10px] text-[12px]' : 'top-[24px] text-[15px]'} duration-300 text-[#9496A0]  absolute`}>{v}</label>
                                                                <input type="text" className='h-[50px] w-full outline-none' onClick={() => setLabel(i)} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </form>
                                            <p className='text-[15px] font-semibold my-[25px] text-[#818ED5]'>Have a referral code?</p>
                                            <button className='text-white bg-[#60B246] w-full py-[10px]'>Continue</button>
                                            <p className='text-[12px] mt-[5px]'>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
                                        </div>

                                        <div style={{display:(activebtn == 0) ? 'block' : 'none'}}>
                                            <p className='text-[14px] mb-[15px]'>Enter login details or <span className='text-[#FC8019]'>create an account</span></p>
                                            <form action="">
                                                <div className='border py-[10px] pl-[10px] relative'>
                                                    <label htmlFor="" className={`${(label) ? 'top-[10px] text-[12px]' : 'top-[24px] text-[15px]'} duration-300 text-[#9496A0]  absolute`}>Phone No</label>
                                                    <input type="text" className='h-[50px] w-full outline-none' onClick={() => setLabel((label) ? false : true)} />
                                                </div>
                                            </form>
                                            <button className='text-white bg-[#60B246] w-full py-[10px] mt-[20px]'>Login</button>
                                            <p className='text-[12px] mt-[5px]'>By creating on login,I accept the Terms & Conditions & Privacy Policy</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={sandwitch} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='relative bg-white py-[30px] pl-[40px] mt-[20px]'>
                            <div className='shadow-[0px_0px_3px_1px_#93959F] bg-white h-[40px] w-[40px] flex justify-center items-center absolute left-[-2%] font-bold'>
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                            </div>
                            <h3 className='font-semibold text-[#93959F] text-[18px]'>Delivery Adress</h3>
                        </div>

                        <div className='relative bg-white py-[30px] pl-[40px] mt-[20px]'>
                            <div className='shadow-[0px_0px_3px_1px_#93959F] bg-white h-[40px] w-[40px] flex justify-center items-center absolute left-[-2%] font-bold'>
                                <FontAwesomeIcon icon="fa-solid fa-wallet" />
                            </div>
                            <h3 className='font-semibold text-[#93959F] text-[18px]'>Payment</h3>
                        </div>
                    </div>
                    <div className='basis-[30%]'>
                        <h1 className='text-[#7E808C] text-[28px] font-semibold'>Cart Empty</h1>
                        <img src={order2} className='w-[70%] mt-[40px] mb-[10px]' alt="" />
                        <p className='text-[#99A7BD] text-[14px]'>
                            Good food is always cooking!<br /> Go ahead, order some yummy<br /> items from the menu.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


