
import Image from "next/image"
import Link from "next/link"
import * as classes from "@/app/utils/styles"

export default function SignIn() {
    return (
        <div className="w-full mx-auto flex h-screen items-center justify-center bg-[#001C2D] p-4">
            <div className="bg-[#F5F5F7] px-14 py-12 gap-4 max-w-lg">
                <div>
                    <Image className="mx-auto"
                        src={'/logo.png'}
                        alt="logo"
                        width={120}
                        height={110}
                    />
                </div>
                <div className="text-primary text-center">
                    <h2 className="font-bold text-2xl mt-3 mb-2">Welcome Kodnestian!</h2>
                    <p className="text-xs space-x-2 mb-3">Sign In to KodNest and ignite your learning and placement journey</p>
                </div>
                <form>
                    <input
                        type="email"
                        placeholder="email"
                        className={classes.spacing_1}
                    /><br />
                    <input
                        type="password"
                        placeholder="password"
                        className={classes.spacing_1}
                    />
                    <Link href={'./forgotpassword'}>
                        <small className="text-primary hover:underline">Forgot Password?</small>
                    </Link>
                    <Link href={'/pages/mainscreen'}>
                        <button className={`${classes.btn_1}`}>LOGIN</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
