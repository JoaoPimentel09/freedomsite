import Image from "next/image"

export function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp%20%289%29-LcpJf5vhq2uquV9l74UrM7XdOf8L1R.png"
        alt="WhatsApp Icon"
        width={24}
        height={24}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
