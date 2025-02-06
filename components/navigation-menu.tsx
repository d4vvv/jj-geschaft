"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavigationMenu() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center space-x-4 sm:space-x-8">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Main
          </Link>
          <Link
            href="/why"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/why" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Why
          </Link>
          <Link
            href="/portfolio"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/portfolio" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/contact" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

