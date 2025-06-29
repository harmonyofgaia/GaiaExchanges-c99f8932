
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AdminProtectedRoute } from '@/components/auth/AdminProtectedRoute'
import { SystemControlCenter } from '@/components/admin/SystemControlCenter'
import { QuantumAdminDashboard } from '@/components/admin/QuantumAdminDashboard'
import { WebsiteHostingManager } from '@/components/WebsiteHostingManager'
import { EnhancedArtworkCloud } from '@/components/creative/EnhancedArtworkCloud'
import { FeatureStatusChecker } from '@/components/admin/FeatureStatusChecker'
import { MissingFeaturesChecker } from '@/components/admin/MissingFeaturesChecker'

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            🌍 HARMONY OF GAIA ADMIN CONTROL CENTER
          </h1>
          <p className="text-xl text-muted-foreground mt-4">
            Complete System Management • Neural Security • Global Reach • Perfect Harmony
          </p>
          <p className="text-lg text-green-400 mt-2">
            🎵 "Seeds Will Form Into Music" - Together We Make The World A Better Place 🎵
          </p>
        </div>

        <AdminProtectedRoute>
          <Tabs defaultValue="audit" className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-black/50 backdrop-blur-md border border-green-500/20">
              <TabsTrigger value="audit" className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400">
                🔍 Feature Audit
              </TabsTrigger>
              <TabsTrigger value="features" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
                ✅ Features
              </TabsTrigger>
              <TabsTrigger value="system" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
                🛡️ System
              </TabsTrigger>
              <TabsTrigger value="quantum" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                ⚡ Quantum
              </TabsTrigger>
              <TabsTrigger value="hosting" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
                🌐 Hosting
              </TabsTrigger>
              <TabsTrigger value="artwork" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-400">
                🎨 Artwork Cloud
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="audit" className="space-y-6 mt-6">
              <MissingFeaturesChecker />
            </TabsContent>
            
            <TabsContent value="features" className="space-y-6 mt-6">
              <FeatureStatusChecker />
            </TabsContent>
            
            <TabsContent value="system" className="space-y-6 mt-6">
              <SystemControlCenter />
            </TabsContent>
            
            <TabsContent value="quantum" className="space-y-6 mt-6">
              <QuantumAdminDashboard />
            </TabsContent>
            
            <TabsContent value="hosting" className="space-y-6 mt-6">
              <WebsiteHostingManager />
            </TabsContent>
            
            <TabsContent value="artwork" className="space-y-6 mt-6">
              <EnhancedArtworkCloud />
            </TabsContent>
          </Tabs>
        </AdminProtectedRoute>
      </div>
    </div>
  )
}

export default Admin
