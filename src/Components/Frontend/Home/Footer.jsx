import React from 'react'
import logo from '../../../assets/images/logo.png'

const Footer = () => {
  return (
    <>
    
    <footer className="bg-primary py-8 mt-32">
        <div className="container mx-auto px-4">
            <div className="mb-8 flex bg-black -mt-32 rounded-2xl">
              <div className="w-7/12 flex items-center justify-center">
                <h2 className=" text-white footer-heading p-14">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                </div>
                <div className="w-5/12 flex flex-col space-y-4 items-center justify-center">
                <form action="" className="w-full footer-button flex justify-center">
                 {/* <!-- Email Icon SVG --> */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                 <path d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z" fill="black" fill-opacity="0.4"/>
               </svg>

  {/* <!-- Input Field --> */}
  <input 
    type="email" 
    placeholder="Enter your email address" 
    className="w-full h-full bg-transparent outline-none placeholder:text-sm"
  />
                </form>                
                <button className="footer-button text-small">Subscribe to Newsletter</button>
                </div>
            </div>

    <div className="flex mb-8">
    {/* <!-- SHOP.CO section takes 2/5 of the space on large screens --> */}
    <div className="w-full lg:w-4/12 my-4">
    <a href="">
                <img src={logo} alt="logo" className="w-36" />  
            </a>
    <p className="text-small mt-4">
        We have clothes that suit your style and which you’re proud to wear. From women to men.
    </p>
    <div className="flex gap-3 mt-6">
 
        <a href="https://facebook.com" target="_blank" className="p-2 bg-white text-black border border-black rounded-full transition duration-300 hover:bg-black hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.06 3.72 9.26 8.5 9.93v-7.03h-2.5v-2.9h2.5V9.55c0-2.48 1.48-3.85 3.74-3.85 1.08 0 2.21.2 2.21.2v2.43h-1.24c-1.22 0-1.6.76-1.6 1.54v1.87h2.72l-.43 2.9h-2.29v7.03c4.78-.67 8.5-4.87 8.5-9.93z"/>
            </svg>
        </a>
 
        <a href="https://twitter.com" target="_blank" className="p-2 bg-white text-black border border-black rounded-full transition duration-300 hover:bg-black hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.24 4.24 0 0 0 1.85-2.34c-.82.48-1.74.83-2.72 1.02a4.2 4.2 0 0 0-7.16 3.82c-3.49-.17-6.6-1.84-8.68-4.37a4.2 4.2 0 0 0-.57 2.11c0 1.46.74 2.75 1.86 3.51a4.2 4.2 0 0 1-1.9-.52v.05a4.22 4.22 0 0 0 3.38 4.12c-.45.13-.92.2-1.41.2-.34 0-.68-.03-1.01-.1a4.23 4.23 0 0 0 3.94 2.94 8.44 8.44 0 0 1-5.24 1.8c-.34 0-.67-.02-1-.07a11.92 11.92 0 0 0 6.49 1.9c7.78 0 12.04-6.44 12.04-12.03 0-.18-.01-.37-.02-.55A8.6 8.6 0 0 0 24 5.3c-.89.4-1.83.66-2.81.77a4.23 4.23 0 0 0 1.85-2.34z"/>
            </svg>
        </a>
    
        <a href="https://github.com" target="_blank" className="p-2 bg-white text-black border border-black rounded-full transition duration-300 hover:bg-black hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.13-1.48-1.13-1.48-.92-.64.07-.63.07-.63 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.37 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.67-.1-.25-.44-1.27.1-2.65 0 0 .83-.27 2.72 1.02A9.42 9.42 0 0 1 12 6.43a9.42 9.42 0 0 1 2.48.34c1.89-1.29 2.72-1.02 2.72-1.02.54 1.38.2 2.4.1 2.65.63.69 1.02 1.58 1.02 2.67 0 3.85-2.35 4.7-4.58 4.95.36.3.68.89.68 1.8v2.67c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
            </svg>
        </a>

        <a href="https://instagram.com" target="_blank" className="p-2 bg-white text-black border border-black rounded-full transition duration-300 hover:bg-black hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm8.5 2h-8.5A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
        </a>
    </div>
</div>

    {/* <!-- Other sections evenly divided --> */}
     <div className="w-8/12 flex items-center justify-end gap-4 lg:ml-28">
    <div className="w-full lg:w-4/12">
        <h3 className="font-bold mb-4">COMPANY</h3>
        <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Features</a></li>
            <li><a href="#" className="hover:text-gray-900">Works</a></li>
            <li><a href="#" className="hover:text-gray-900">Career</a></li>
        </ul>
    </div>
    <div className="w-full lg:w-4/12">
        <h3 className="font-bold mb-4">HELP</h3>
        <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Customer Support</a></li>
            <li><a href="#" className="hover:text-gray-900">Delivery Details</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
        </ul>
    </div>
    <div className="w-full lg:w-4/12">
        <h3 className="font-bold mb-4">FAQ</h3>
        <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Account</a></li>
            <li><a href="#" className="hover:text-gray-900">Manage Deliveries</a></li>
            <li><a href="#" className="hover:text-gray-900">Orders</a></li>
            <li><a href="#" className="hover:text-gray-900">Payments</a></li>
        </ul>
    </div>
    <div className="w-full lg:w-4/12">
        <h3 className="font-bold mb-4">RESOURCES</h3>
        <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Free eBooks</a></li>
            <li><a href="#" className="hover:text-gray-900">Development Tutorial</a></li>
            <li><a href="#" className="hover:text-gray-900">How to - Blog</a></li>
            <li><a href="#" className="hover:text-gray-900">YouTube Playlist</a></li>
        </ul>
    </div>
    </div>
    </div>
    </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4">
                <div className="text-sm">
                    &copy; 2023 SHOP.CO. All rights reserved.
                </div>
                <div className="flex -space-x-4 rounded-3xl mb-4 md:mb-0">
                  
                
                    <img src="{{'Badge.png' |  asset_url}}" alt="logo" className="h-14" />  
                 
                    <img src="{{'Badge1.png' |  asset_url}}" alt="logo" className="h-14" />  
          
                    <img src="{{'Badge2.png' |  asset_url}}" alt="logo" className="h-14" />  
            
                    <img src="{{'Badge3.png' |  asset_url}}" alt="logo" className="h-14" />  
                    <img src="{{'Badge4.png' |  asset_url}}" alt="logo" className="h-14" />  
                </div>
            </div>
    </footer>
    </>
  )
}

export default Footer