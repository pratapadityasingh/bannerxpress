import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <>
        <section className='border-t'>
            <div className='container mx-auto'>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center  ">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 BannerXpress. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4" href="/terms-conditon">
                    Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
                    Privacy Policy
                </Link>
            </nav>
        </footer>
            </div>
        </section>
        </>
       
    )
}

export default Footer