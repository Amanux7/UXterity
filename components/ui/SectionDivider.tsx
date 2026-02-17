export default function SectionDivider({ className = "" }: { className?: string }) {
    return (
        <div className={`py-20 ${className}`}>
            <div className="container-fluid">
                <div className="relative h-px">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-empire-gold/50 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                </div>
            </div>
        </div>
    );
}
