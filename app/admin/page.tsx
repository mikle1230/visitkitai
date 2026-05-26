'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, EyeOff, Search, Package } from 'lucide-react'
import { Tour } from '@/lib/tours'

export default function AdminDashboard() {
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchTours()
  }, [])

  const fetchTours = async () => {
    try {
      const res = await fetch('/api/tours')
      const data = await res.json()
      setTours(data.tours || [])
    } catch (error) {
      console.error('Failed to fetch tours:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This action cannot be undone.`)) return

    try {
      const res = await fetch(`/api/tours/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setTours(tours.filter((t) => t.id !== id))
      }
    } catch (error) {
      console.error('Failed to delete tour:', error)
    }
  }

  const toggleStatus = async (tour: Tour) => {
    const newStatus = tour.status === 'published' ? 'draft' : 'published'
    try {
      const res = await fetch(`/api/tours/${tour.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        setTours(tours.map((t) => (t.id === tour.id ? { ...t, status: newStatus } : t)))
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    }
  }

  const filteredTours = tours.filter(
    (tour) =>
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.titleCn?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const publishedCount = tours.filter((t) => t.status === 'published').length
  const draftCount = tours.filter((t) => t.status === 'draft').length

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tour Packages</h1>
          <p className="text-gray-500 mt-1">Manage your tour packages</p>
        </div>
        <Link
          href="/admin/tours/new"
          className="inline-flex items-center justify-center bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-light transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Tour Package
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 border">
          <div className="text-3xl font-bold text-gray-900">{tours.length}</div>
          <div className="text-gray-500 text-sm">Total Tours</div>
        </div>
        <div className="bg-white rounded-xl p-5 border">
          <div className="text-3xl font-bold text-green-600">{publishedCount}</div>
          <div className="text-gray-500 text-sm">Published</div>
        </div>
        <div className="bg-white rounded-xl p-5 border">
          <div className="text-3xl font-bold text-yellow-600">{draftCount}</div>
          <div className="text-gray-500 text-sm">Drafts</div>
        </div>
        <div className="bg-white rounded-xl p-5 border">
          <div className="text-3xl font-bold text-primary">{tours.reduce((sum, t) => sum + t.itinerary.length, 0)}</div>
          <div className="text-gray-500 text-sm">Total Days</div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tours..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
      </div>

      {/* Tours Table/Grid */}
      {filteredTours.length === 0 ? (
        <div className="bg-white rounded-xl border p-12 text-center">
          <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No tours found</h3>
          <p className="text-gray-500 mb-6">
            {searchQuery ? 'Try a different search term' : 'Create your first tour package'}
          </p>
          {!searchQuery && (
            <Link
              href="/admin/tours/new"
              className="inline-flex items-center bg-primary text-white px-5 py-2.5 rounded-lg font-medium"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create Tour
            </Link>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl border overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Tour</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Duration</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Price</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredTours.map((tour) => (
                  <tr key={tour.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={tour.coverImage}
                          alt={tour.title}
                          className="w-16 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{tour.title}</div>
                          {tour.titleCn && <div className="text-sm text-gray-500">{tour.titleCn}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{tour.duration}</td>
                    <td className="px-6 py-4 font-medium">
                      {tour.currency} {tour.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleStatus(tour)}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          tour.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {tour.status === 'published' ? (
                          <>
                            <Eye className="w-4 h-4 mr-1" />
                            Published
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-4 h-4 mr-1" />
                            Draft
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          href={`/admin/tours/${tour.id}`}
                          className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Edit className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(tour.id, tour.title)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={tour.coverImage}
                    alt={tour.title}
                    className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{tour.title}</h3>
                    <p className="text-sm text-gray-500">{tour.duration}</p>
                    <p className="text-sm font-medium mt-1">
                      {tour.currency} {tour.price.toLocaleString()}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <button
                        onClick={() => toggleStatus(tour)}
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          tour.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {tour.status === 'published' ? 'Published' : 'Draft'}
                      </button>
                      <div className="flex items-center space-x-1">
                        <Link
                          href={`/admin/tours/${tour.id}`}
                          className="p-2 text-gray-600 hover:text-primary"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(tour.id, tour.title)}
                          className="p-2 text-gray-600 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
