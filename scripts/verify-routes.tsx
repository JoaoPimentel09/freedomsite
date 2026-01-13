"use client"

import { useState } from "react"
import { paginasVariacoes } from "@/lib/pageurl_variacoes"

// This is a client component that can be temporarily added to your app
// to verify that all routes are accessible
export default function VerifyRoutes() {
  const [results, setResults] = useState<{ route: string; status: string }[]>([])
  const [checking, setChecking] = useState(false)

  // Function to flatten the paginasVariacoes object into an array of routes
  const flattenRoutes = (obj: any, prefix = ""): string[] => {
    let routes: string[] = []

    for (const key in obj) {
      if (typeof obj[key] === "string") {
        routes.push(obj[key])
      } else if (typeof obj[key] === "object") {
        routes = [...routes, ...flattenRoutes(obj[key], `${prefix}${key}.`)]
      }
    }

    return routes
  }

  const checkRoutes = async () => {
    setChecking(true)
    const allRoutes = flattenRoutes(paginasVariacoes)
    const uniqueRoutes = [...new Set(allRoutes)]

    const results = []

    for (const route of uniqueRoutes) {
      try {
        // Use fetch to check if the route is accessible
        const response = await fetch(route, { method: "HEAD" })
        results.push({
          route,
          status: response.ok ? "✅ Accessible" : `❌ Error (${response.status})`,
        })
      } catch (error) {
        results.push({
          route,
          status: "❌ Error (Network error)",
        })
      }
    }

    setResults(results)
    setChecking(false)
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Route Accessibility Verification</h1>
      <button onClick={checkRoutes} disabled={checking} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        {checking ? "Checking..." : "Check All Routes"}
      </button>

      {results.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Results:</h2>
          <div className="border rounded-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.map((result, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{result.route}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{result.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
