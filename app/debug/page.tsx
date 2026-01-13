"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function DebugPage() {
  const [currentPath, setCurrentPath] = useState("")
  const [availablePages, setAvailablePages] = useState<string[]>([])

  useEffect(() => {
    // Get the current path
    setCurrentPath(window.location.pathname)

    // Define known pages
    setAvailablePages(["/", "/telecom", "/energia-solar", "/freedomwhite", "/datacenter", "/naopare"])
  }, [])

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Debug Page</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Current Path:</h2>
        <div className="bg-gray-100 p-3 rounded">{currentPath}</div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Test Navigation:</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {availablePages.map((page) => (
            <Link
              key={page}
              href={page}
              className="bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
            >
              {page || "Home"}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Browser Information:</h2>
        <pre className="bg-gray-100 p-3 rounded overflow-auto">
          {JSON.stringify(
            {
              userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "Not available",
              windowLocation:
                typeof window !== "undefined"
                  ? {
                      href: window.location.href,
                      pathname: window.location.pathname,
                      search: window.location.search,
                      hash: window.location.hash,
                    }
                  : "Not available",
            },
            null,
            2,
          )}
        </pre>
      </div>
    </div>
  )
}
