import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AdminProtectedRoute } from '@/components/auth/AdminProtectedRoute'
import { AdminOnlyAccess } from '@/components/security/AdminOnlyAccess'
import { WorldwideDefenseMonitor } from '@/components/security/WorldwideDefenseMonitor'
import { AdminOverview } from '@/components/admin/AdminOverview'
import { SystemControlCenter } from '@/components/admin/SystemControlCenter'
import { QuantumAdminDashboard } from '@/components/admin/QuantumAdminDashboard'
import { WebsiteHostingManager } from '@/components/WebsiteHostingManager'
import { EnhancedArtworkCloud } from '@/components/creative/EnhancedArtworkCloud'
import { MasterArtworkGenerator } from '@/components/admin/MasterArtworkGenerator'
import { GamingNFTMarketplace } from '@/components/GamingNFTMarketplace'
import { EnhancedWormsArena } from '@/components/EnhancedWormsArena'
import { GameDevelopmentCloud } from '@/components/admin/GameDevelopmentCloud'
import { CreativeNFTGenerator } from '@/components/admin/CreativeNFTGenerator'
import { PrehistoricGuardian } from '@/components/security/PrehistoricGuardian'
import { MasterDefenseOrchestrator } from '@/components/admin/MasterDefenseOrchestrator'

import { UserManagementSystemRefactored } from '@/components/admin/UserManagementSystemRefactored'
import { SecureConnectionManager } from '@/components/admin/SecureConnectionManager'
import { QuantumBlockchainCore } from '@/components/quantum/QuantumBlockchainCore'
import { LiveBlockchainViewer } from '@/components/admin/LiveBlockchainViewer'
import { GlobalMarketingEngine } from '@/components/marketing/GlobalMarketingEngine'
import { AdminNFTMarketplace } from '@/components/admin/AdminNFTMarketplace'
import { GamingAssetsManager } from '@/components/admin/GamingAssetsManager'
import { GlobalTechIntelligence } from '@/components/security/GlobalTechIntelligence'
import { BrandClarificationManager } from '@/components/admin/BrandClarificationManager'
import { CompletionTaskManager } from '@/components/admin/CompletionTaskManager'

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            🌍 HARMONY OF GAIA ADMIN CONTROL CENTER
          </h1>
          <p className="text-xl text-muted-foreground mt-4">
            GAiA Token (NOT GAIA Everworld) • Culture of Harmony • Exclusive Community • Quantum Security
          </p>
          <p className="text-lg text-green-400 mt-2">
            🎵 "Seeds Will Form Into Music" - Protected By Ultimate Defense + Invisible Operations 🎵
          </p>
        </div>

        <AdminProtectedRoute>
          <AdminOnlyAccess>
            <Tabs defaultValue="brand-clarification" className="w-full">
              <TabsList className="grid w-full grid-cols-12 bg-black/50 backdrop-blur-md border border-green-500/20">
                <TabsTrigger value="brand-clarification" className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400">
                  🚨 Brand Clarity
                </TabsTrigger>
                <TabsTrigger value="completion-tasks" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                  📋 Task Manager  
                </TabsTrigger>
                <TabsTrigger value="master-defense" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                  👑 Master Defense
                </TabsTrigger>
                <TabsTrigger value="worldwide-defense" className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400">
                  🌍 Worldwide Defense
                </TabsTrigger>
                <TabsTrigger value="tech-intelligence" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                  🧠 Tech Intelligence
                </TabsTrigger>
                <TabsTrigger value="overview" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
                  📊 Overview
                </TabsTrigger>
                <TabsTrigger value="guardian" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                  🦕 Guardian
                </TabsTrigger>
                <TabsTrigger value="creative-nft" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                  🎨 Creative NFTs
                </TabsTrigger>
                <TabsTrigger value="user-management" className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400">
                  👥 User Control
                </TabsTrigger>
                <TabsTrigger value="nft-marketplace" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                  🎮 NFT Market
                </TabsTrigger>
                <TabsTrigger value="gaming-assets" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
                  🛡️ Game Assets
                </TabsTrigger>
                <TabsTrigger value="system" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
                  🛡️ System
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="brand-clarification" className="space-y-6 mt-6">
                <BrandClarificationManager />
              </TabsContent>
              
              <TabsContent value="completion-tasks" className="space-y-6 mt-6">
                <CompletionTaskManager />
              </TabsContent>
              
              <TabsContent value="master-defense" className="space-y-6 mt-6">
                <MasterDefenseOrchestrator />
              </TabsContent>
              
              <TabsContent value="worldwide-defense" className="space-y-6 mt-6">
                <WorldwideDefenseMonitor />
              </TabsContent>
              
              <TabsContent value="tech-intelligence" className="space-y-6 mt-6">
                <GlobalTechIntelligence />
              </TabsContent>
              
              <TabsContent value="overview" className="space-y-6 mt-6">
                <AdminOverview />
              </TabsContent>
              
              <TabsContent value="guardian" className="space-y-6 mt-6">
                <PrehistoricGuardian />
              </TabsContent>
              
              <TabsContent value="creative-nft" className="space-y-6 mt-6">
                <CreativeNFTGenerator />
              </TabsContent>
              
              <TabsContent value="user-management" className="space-y-6 mt-6">
                <UserManagementSystemRefactored />
              </TabsContent>
              
              <TabsContent value="nft-marketplace" className="space-y-6 mt-6">
                <AdminNFTMarketplace />
              </TabsContent>
              
              <TabsContent value="gaming-assets" className="space-y-6 mt-6">
                <GamingAssetsManager />
              </TabsContent>
              
              <TabsContent value="system" className="space-y-6 mt-6">
                <SystemControlCenter />
              </TabsContent>
            </Tabs>
          </AdminOnlyAccess>
        </AdminProtectedRoute>
      </div>
    </div>
  )
}

export default Admin
