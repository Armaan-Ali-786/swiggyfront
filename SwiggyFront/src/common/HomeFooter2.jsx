import React from 'react'

export default function HomeFooter2() {
  return (
    <section className='bg-[#02060C] py-[60px]'>
        <div className='max-w-[1120px] px-[20px] text-white mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px]'>
            <div>
            <div className='flex items-center gap-[15px]'>
                <svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_674_19294)"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3819 14.7977C20.5245 13.9563 20.3574 13.3121 19.9261 12.9756C19.2787 12.4711 18.3021 12.1959 15.9859 12.204C14.2724 12.2082 12.4327 12.2167 11.6469 12.2205C11.5739 12.2082 11.3093 12.1181 11.297 11.7938L11.2683 6.64781C11.2683 6.3236 11.5207 6.05694 11.8385 6.05694C12.1559 6.05694 12.412 6.31936 12.412 6.64358C12.412 6.64358 12.4285 9.43839 12.4327 10.4314C12.4327 10.5257 12.4897 10.7513 12.7011 10.8089C14.085 11.1822 21.0778 10.883 20.9639 9.57764C20.3536 4.16496 15.8884 -0.0164585 10.4829 4.87055e-05C8.78164 0.00385807 7.16965 0.426698 5.745 1.16952C2.33815 2.98744 -0.0755529 6.63977 0.00180748 10.8542C0.0546894 13.8374 1.98811 19.1396 3.16037 19.923C3.70173 20.2845 4.40996 20.1491 7.58886 20.1368C9.0298 20.1325 10.3732 20.1325 11.0324 20.1325C11.1016 20.1448 11.4599 20.2312 11.4637 20.5677L11.484 24.4782C11.484 24.8024 11.232 25.0691 10.9142 25.0691C10.5968 25.0691 10.3402 24.8109 10.3402 24.4824C10.3402 24.4824 10.3647 22.9108 10.3609 22.328C10.3609 22.1926 10.3689 21.9585 9.98235 21.7862C8.71622 21.2119 4.60532 21.5729 4.37737 22.2129C4.29191 22.4592 4.75185 23.4073 5.46418 24.6259C7.83331 28.4425 10.1571 31.4176 10.5318 31.8937C10.5563 31.9141 10.5766 31.9348 10.5968 31.9471C10.9104 31.5611 19.1078 22.2747 20.3819 14.7977Z" fill="white"></path></g><defs><filter id="filter0_b_674_19294" x="-9.26002" y="-9.26002" width="39.4853" height="50.4673" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="4.63001"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_674_19294"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_674_19294" result="shape"></feBlend></filter></defs></svg> 
                <p className='text-[24px] font-bold'>Swiggy</p>
            </div>
            
            <p className='mt-[10px]'>© 2024 Bundle Technologies<br/> Pvt. Ltd</p>
            </div>
            <div>
                <ul className='text-[14px] leading-8'>
                    <li className='font-semibold mb-[10px] text-[17px] text-white'>Company</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instament</li>
                    <li>Swiggy Genie</li>
                </ul>
            </div>
            <div>
                <ul className='text-[14px] mb-[40px] leading-8'>
                    <li className='font-semibold mb-[10px] text-[17px] text-white'>Contact Us</li>
                    <li>Help & Support</li>
                    <li>Partners with us</li>
                    <li>Ride with us</li>
                </ul>
                <ul className='text-[14px] leading-8'>
                    <li className='font-semibold mb-[10px] text-[17px] text-white'>Legal</li>
                    <li>Terms & Condition</li>
                    <li>Cookies Policy</li>
                    <li>Privacy Policy</li>
                    <li>Investor Relations</li>
                </ul>
            </div>
            <div>
                <ul className='text-[14px] leading-8'>
                    <li className='font-semibold text-[17px] text-white'>We deliver to :</li>
                    <li>Banglore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Kolkata</li>
                    <li>Chennai</li>
                    <select name="" id="" className='bg-black border-2 p-[5px] border-white'>
                        <option value="">589 cities</option>
                    </select>
                </ul>
            </div>
        </div>
    </section>
  )
}
