'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Package, LogOut, Menu, X, Upload, Image as ImageIcon } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [logoUploading, setLogoUploading] = useState(false)
  const [logoUrl, setLogoUrl] = useState('/logo.png')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const isLoginPage = pathname === '/admin/login'

  useEffect(() => {
    // Skip auth check for login page
    if (isLoginPage) {
      setLoading(false)
      return
    }

    fetch('/api/auth/check')
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.push('/admin/login')
        } else {
          setLoading(false)
        }
      })
      .catch(() => {
        router.push('/admin/login')
      })
  }, [router, isLoginPage])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setLogoUploading(true)

    try {
      const formData = new FormData()
      formData.append('logo', file)

      const response = await fetch('/api/upload-logo', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (response.ok) {
        setLogoUrl(`${data.logoUrl}?t=${Date.now()}`)
        alert('Logo uploaded successfully!')
      } else {
        alert(data.error || 'Upload failed')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Upload failed')
    } finally {
      setLogoUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  if (loading && !isLoginPage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Login page - no sidebar
  if (isLoginPage) {
    return <>{children}</>
  }

  // Admin pages with sidebar
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="VisitKitai" className="h-8 w-auto" />
          <span className="text-gray-400">Admin</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-50
            w-64 bg-white border-r transform transition-transform duration-200
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <div className="h-full flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b hidden lg:block">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-primary">Visit</span>
                <span className="text-xl font-bold text-accent-gold">Kitai</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Admin Panel</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              <Link
                href="/admin"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>

              {/* Logo Upload */}
              <div className="mt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/svg+xml,image/webp"
                  onChange={handleLogoUpload}
                  className="hidden"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors
                    ${logoUploading
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {logoUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      <span>Upload Logo</span>
                    </>
                  )}
                </label>
              </div>
            </nav>

            {/* Logout */}
            <div className="p-4 border-t">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 w-full transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-screen">{children}</main>
      </div>
    </div>
  )
}
