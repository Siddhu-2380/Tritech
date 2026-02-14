export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="container mx-auto flex items-center justify-center px-4 md:justify-between">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    © 2026 FinGrow. All rights reserved.
                </p>
                <div className="hidden space-x-4 md:flex">
                    <a href="#" className="text-sm text-slate-500 hover:text-teal-600 dark:text-slate-400">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-sm text-slate-500 hover:text-teal-600 dark:text-slate-400">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
