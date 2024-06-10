import { RxCrossCircled } from "react-icons/rx";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function CheckoutFailure() {

    return(
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center text-white">
                <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">
                    <h1 className="bg-red-500 absolute text-center top-0 w-full py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg"> Transaction Failed</h1>

                    <div className="px-4 flex flex-col items-center justify-center space-y-2">
                        <div className="text-center space-y-2">
                            <h2 className="text-lg font-semibold">
                                Oops! your payment failed
                            </h2>
                            <p>
                                Please try again later
                            </p>
                        </div>

                        <RxCrossCircled className=" text-red-500 text-7xl" />
                    </div>

                    <Link to="/checkout" className="bg-red-500 hover:bg-red-700 transition-all ease-in-out duration-300 absolute bottom-0 w-full py-3 text-xl font-semibold text-center rounded-br-lg rounded-bl-lg">
                        <button>
                            Try again
                        </button>
                    </Link>
                </div>

            </div>
        </HomeLayout>
    )
}

export default CheckoutFailure;