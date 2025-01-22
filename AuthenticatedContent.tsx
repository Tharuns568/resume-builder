"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "../../contexts/AuthContext"

export function AuthenticatedContent() {
  const { user, logout } = useAuth()

  return (
    <>
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm md:text-base text-gray-700">Welcome, {user}</span>
          <Link href="/resume-builder" passHref>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Build Your Resume</Button>
          </Link>
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/signup" passHref>
            <Button variant="outline">Sign Up</Button>
          </Link>
          <Link href="/login" passHref>
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      )}
    </>
  )
}

