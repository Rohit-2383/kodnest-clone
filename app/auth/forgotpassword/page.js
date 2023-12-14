
import Image from "next/image"
import * as classes from "@/app/utils/styles"
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export default function ForgotPass() {
    return (
        <div className="mx-auto flex h-screen items-center justify-center bg-[#001C2D]">
            <div className="bg-[#F5F5F7] px-14 py-12 gap-4 max-w-lg ">
                <div>
                    <Image className="mx-auto"
                        src={'/logo.png'}
                        alt="logo"
                        width={120}
                        height={110}
                    />
                </div>
                <div className="text-primary text-center">
                    <h2 className="font-bold text-2xl mt-3 mb-2">Forgot Password?</h2>
                    <p className="text-xs space-x-2 mb-3">Forgot your password? No problem! Enter your email to receive a <br />reset link</p>
                </div>
                <form>
                    <input
                        type="email"
                        placeholder="email"
                        className={classes.spacing_1}
                    /><br />
                    <button className={`${classes.btn_1}`}>GENERATE OTP</button>
                    <Link href={'/auth/signin'}>
                        <p className="text-primary flex gap-4 items-center justify-center pt-3 py-2 hover:underline"><IoIosArrowBack /> Back to login</p>
                    </Link>
                </form>
            </div>
        </div>
    )
}

